module suning{
    export class GameData{
        public static activityed:boolean=false;//活动是否已结束
        public static userRandomCode:string="";//用户标识
        public static showLog:boolean;//是否调用Log
        public static apiUrl:string="";//接口地址
        public static lat:number=31.203772;//纬度
        public static lng:number=121.62101;//经度
        public static scaleBg:number=1;//背景图放大倍数
        public static setBgScale(obj):void{//放大缩小背景图
            obj.scaleX=obj.scaleY=this.scaleBg;
        }
        public static setObjScale(objArray,scale):void{//设置放大倍数
            for (var i:number=0;i<objArray.length;i++){
                objArray[i].scaleX=objArray[i].scaleY=scale;
            }
        }
        public static slewTime(time):string{//转换时间
            var min,min1,min2,sec,sec1;
            var delHourTime=time%3600;
            min1=(delHourTime-delHourTime%600)/600;
            delHourTime=delHourTime-min1*600;
            min2=(delHourTime-delHourTime%60)/60;
            delHourTime=delHourTime-min2*60;
            sec1=(delHourTime-delHourTime%10)/10;
            delHourTime=delHourTime-sec1*10;
            min=min1+""+min2;
            sec=sec1+""+delHourTime;
            return min+":"+sec;
        }
        public static resourceId:string="";//券ID
        public static couponType:string="";//券类型
        public static couponStartTime:Array<any>=[];//券开始时间
        public static couponEndTime:Array<any>=[];//券结束时间
        public static luckyState:boolean=false;//中奖状态
        public static gameID:string="";//游戏开始记录gameID
        public static gameScore:number=0;//本轮游戏积分
        public static gameSeconds:number=0;//游戏时间
        public static isWeiXin:boolean=false;//是否微信浏览器
        public static gameEnter:string="";//游戏入口
        public static memberNo:string="";//会员ID
        public static getMemberNo():void{//获取会员ID
            if(suning.GameData.showLog)easy.HttpUtil.getData(suning.GameData.apiUrl+"/check_log.php","url=进入了getMemberNo方法,标识码["+this.userRandomCode+"]",function () {},this);
            var resource="resource=gameEnter_"+this.gameEnter+"@plazaId_"+this.plazaId+"@gameScore_"+this.gameScore+"@userRank_"+this.userRank+"@gameID_"+this.gameID+"@luckyState_"+this.luckyState;
            var obj={resourceId:resource,gameEnter:this.gameEnter,callback:window["replyMemberNo"]};
            window["callMemberNo"](obj);
        }
        public static plazaSelectIndex:number=null;//选择的广场下标
        public static plazaId:string="";//广场ID
        public static plazaList:any=null;//广场列表
        public static selectPlaza:boolean=true;//是否已选择广场
        public static getLatelyPlaze():void{//查询默认最近广场
            if(this.plazaId){
                for (var i:number=0;i<this.plazaList.length;i++){
                    if(this.plazaList[i].square_id==this.plazaId){
                        var currentPlaza=this.plazaList.splice(i,1)[0];
                        this.plazaList.unshift(currentPlaza);
                        this.plazaSelectIndex=0;
                        break;
                    }
                }
                this.selectPlaza=true;
                return;
            }
            if(!window["latitude"]||!window["longitude"]){
            }else{
                var distance=100000000000,index=0;
                this.lat=window["latitude"];
                this.lng=window["longitude"];
                for (var i:number=0;i<GameData.plazaList.length;i++){
                    var newDistance=window["getFlatternDistance"](this.lat,this.lng,parseFloat(GameData.plazaList[i].square_latitude),parseFloat(GameData.plazaList[i].square_longitude));
                    newDistance=newDistance?newDistance:0;
                    if(newDistance<distance){
                        index=i;
                        distance=newDistance;
                    }
                }
                var currentPlaza=GameData.plazaList.splice(index,1)[0];
                GameData.plazaList.unshift(currentPlaza);
            }
            this.plazaSelectIndex=0;
            easy.MyEvent.sendEvent("changePlaza");
        }
        public static getCoupon():void{//领取优惠券
            var parm1="进入了getCoupon方法，调用领券接口,标识码["+this.userRandomCode+"]会员ID="+this.memberNo+"广场ID="+this.plazaId;
            if(suning.GameData.showLog)easy.HttpUtil.getData(suning.GameData.apiUrl+"/check_log.php","url="+parm1,function () {},this);
            var parm2="user_id="+this.memberNo+"&game_id="+this.gameID+"&square_id="+this.plazaId;
            easy.HttpUtil.getData(this.apiUrl+"/get_award.php",parm2,this.getCouponReply,this);
        }
        private static getCouponReply(res):void{
            var json=JSON.parse(res);
            console.log(json);
            if(json.code==200){//领奖成功
                this.resourceId=json.result.coupon_id;
                this.couponType=json.result.type_id;
                this.couponStartTime=json.result.coupon_start.split(" ")[0].split("-");
                this.couponEndTime=json.result.coupon_end.split(" ")[0].split("-");
                var parm="后台领取接口，领券成功,标识码["+this.userRandomCode+"],会员ID="+this.memberNo+"广场ID="+this.plazaId+"券ID="+this.resourceId;
                if(suning.GameData.showLog)easy.HttpUtil.getData(suning.GameData.apiUrl+"/check_log.php","url="+parm,function () {},this);
                window["callCoupon"]({plazaId:this.plazaId,memberNo:this.memberNo,resourceId:this.resourceId,couponType:this.couponType,callback:window["replyCoupon"]});
            }else{
                easy.MyEvent.sendEvent("openGetCouponBtn");
                if(json.code==-201){//个人领奖超限
                    easy.PopupManager.show(WinLuckyNumsWin,null,true,false);
                    var parm="后台领取接口，领券失败-个人领奖超限,标识码["+this.userRandomCode+"],会员ID="+this.memberNo+"广场ID="+this.plazaId;
                }else if(json.code==-202){//该区奖券以派发完毕
                    easy.PopupManager.show(WinSendCouponEndWin,null,true,false);
                    var parm="后台领取接口，领券失败-该区奖券以派发完毕,标识码["+this.userRandomCode+"],会员ID="+this.memberNo+"广场ID="+this.plazaId;
                }else{
                    easy.MessageTips.showMessage(json.msg);
                    var parm="后台领取接口，领券失败-"+json.msg+",标识码["+this.userRandomCode+"],会员ID="+this.memberNo+"广场ID="+this.plazaId;
                }
                if(suning.GameData.showLog)easy.HttpUtil.getData(suning.GameData.apiUrl+"/check_log.php","url="+parm,function () {},this);
            }
        }
        public static getCouponSuccess(){//确认成功领取优惠券
            var parm="后台调用确认领券接口,标识码["+this.userRandomCode+"],会员ID="+this.memberNo+"广场ID="+this.plazaId+"券ID="+this.resourceId;
            if(suning.GameData.showLog)easy.HttpUtil.getData(suning.GameData.apiUrl+"/check_log.php","url="+parm,function () {},this);
            var parm="game_id="+this.gameID+"&coupon_id="+this.resourceId+"&user_id="+this.memberNo;
            easy.HttpUtil.getData(this.apiUrl+"/award_confirm.php",parm,this.getCouponSuccessReply,this);
        }
        private static getCouponSuccessReply(res):void{
            var json=JSON.parse(res);
            if(json.code==200){
                if(json.user_history_award==0){//未成功领取过券
                    window["addNums"](['_trackEvent', "领取用户", "平台-"+this.gameEnterToName(),"广场-"+this.plazaIdToName()]);
                }
                window["addNums"](['_trackEvent', "领取优惠券", "平台-"+this.gameEnterToName(),"广场-"+this.plazaIdToName()]);
                var parm="后台确认领券成功,标识码["+this.userRandomCode+"],会员ID="+this.memberNo+"广场ID="+this.plazaId+"券ID="+this.resourceId;
                easy.ViewManager.show(suning.PageCouponView, null, false);
            }else{
                var parm="后台确认领券失败-"+json.msg+",标识码["+this.userRandomCode+"],会员ID="+this.memberNo+"广场ID="+this.plazaId+"券ID="+this.resourceId;
                easy.MessageTips.showMessage(json.msg);
            }
            easy.MyEvent.sendEvent("openGetCouponBtn");
            if(suning.GameData.showLog)easy.HttpUtil.getData(suning.GameData.apiUrl+"/check_log.php","url="+parm,function () {},this);
        }
        public static appShare():void{//APP分享
            var obj;
            if(this.memberNo!=""){//没有会员ID
                obj={plazaId:this.plazaId,shareTitle:"超能奇狮大挑战，快来搜集你的超能力！",shareContent:"超级能量球在此集结，超能力一触即发，闯关完成你将获得超级神秘大礼！",shareUrl:"http://www.jiyou-tech.com/2019/375/?gameEnter=3&shareType=APP",shareIco:"http://www.jiyou-tech.com/2019/375/img316.jpg"};
            }else{
                obj={plazaId:this.plazaId,memberNo:this.memberNo,shareTitle:"超能奇狮大挑战，快来搜集你的超能力！",shareContent:"超级能量球在此集结，超能力一触即发，闯关完成你将获得超级神秘大礼！",shareUrl:"http://www.jiyou-tech.com/2019/375/?gameEnter=3&shareType=APP",shareIco:"http://www.jiyou-tech.com/2019/375/img316.jpg"};
            }
            window["shareWeChat"](obj);
            window["addNums"](['_trackEvent', "分享-APP端分享", "平台-"+GameData.gameEnterToName(),"广场-"+GameData.plazaIdToName()]);
        }
        //排行
        public static userRank:number=0;//个人排名

        public static gameEnterToName():string{
            var list=["APP","公众号","朋友圈"];
            return list[parseInt(this.gameEnter)-1];
        }
        public static plazaIdToName():string{
            var list1=["E001","E002","E005","E006","E008","E014","E015","E016","E017","E023"];
            var list2=["成都苏宁广场","无锡苏宁广场","连云港苏宁广场","芜湖苏宁广场","汕头苏宁广场","徐州苏宁广场","镇江苏宁广场","包头苏宁广场","日照苏宁广场","滁州苏宁广场"];
            var index=list1.indexOf(this.plazaId);
            if(index>=0){
                return list2[index];
            }else{
                return "总部";
            }
        }

    }
}