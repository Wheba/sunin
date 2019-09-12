/**
 * Copyright (c) 2014,www.easygame.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the easygame.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EASYEGRET.COM AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
module suning{

    /**
     * <p>PageGameUI的逻辑类</p>
     * @date  :2019-04-10 10:27:06
     * @EasyGame.org Tools
     */ 
    export class PageGameView  extends easy.View{
        public constructor() {
            super();
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
            this.ui = new PageGameUI();
        }
        /**
         * 获取ui对象
         * @returns
         */
        public get ui():PageGameUI{
            return <PageGameUI>this._ui;
        }

        /**
         * 设置ui对象
         * @param
         */
        public set ui(myui:PageGameUI){
            this.setUI(myui);
        }
        /**
         * 初始化一些必要的逻辑数据
         * 这个方法是在第一次加入stage的时候,做调用
         */
        public initData():void {
            super.initData();
            //TODO 添加协议弱响应的方法,一般是用来驱动刷新当前的ui
            //参数说明:第一个参数是协议的id号
            //        第二个参数是本类public的方法,方法唯一的参数就是对应的协议实例,如下方法全名为onPktLoginResult(pkt:MyProtocalCmd)
            //this.addHandlePacket(ID_PACKET, "onPktLoginResult")


            //TODO 添加事件的弱响应的方法,一般是用来驱动刷新当前的ui
            //注意:必须调用MessageControler.addEvent()注册事件名称,否者不会转发到这里
            //参数说明:第一个参数是事件名称
            //        第二个参数是本类public的方法,方法唯一的参数就是MyEvent实例,如下方法全名为onMyEventLoginResult(event:easy.MyEvent)
            //this.addHandleEvent("LOGIN_RESULT", "onMyEventLoginResult");

            //TODO UI层声明的组件,可能会用到,请自行启用
            easy.TweenEffect.setAnchorXY(this.ui.imgBg);
            this.ui.imgBg.x=easy.GlobalSetting.DISPLAY_WIDTH/2;
            this.ui.imgBg.y=easy.GlobalSetting.DISPLAY_HEIGHT/2;
            GameData.setBgScale(this.ui.imgBg);
            //this.ui.imgBg.touchEnabled=true;
            this.ui.groupRole.touchEnabled=true;
            this.ui.groupRole.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.beginTouch,this);
            easy.TweenEffect.setAnchorXY(this.ui.groupRole);
            this._roleHalfW=this.ui.groupRole.width/2;
            this._roleHalfH=this.ui.groupRole.height/2;
            easy.TweenEffect.setAnchorXY(this.ui.groupOb1);
            easy.TweenEffect.setAnchorXY(this.ui.imgRole);
            easy.TweenEffect.setAnchorXY(this.ui.imgEnd);
            //TODO View逻辑可在此继续添加
        }
        //移动
        private _roleDX:number;
        private _roleDY:number;
        private beginTouch(e:egret.TouchEvent):void{
            this._roleDX=e.stageX-this.ui.groupRole.x;
            this._roleDY=e.stageY-this.ui.groupRole.y;
            this.ui.touchEnabled=true;
            this.ui.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveTouch,this);
            this.ui.addEventListener(egret.TouchEvent.TOUCH_END,this.endTouch,this);
        }
        private _frameLeftMargin:number=6;//框的左边距
        private _frameRightMargin:number=10;//框的右边距
        private _roleHalfW:number;//角色半宽
        private _roleHalfH:number;//角色半高
        private _roleNextX:number;
        private _roleNextY:number;
        private moveTouch(e:egret.TouchEvent):void{
            if(this.gameState==this.gameState_Run){
                this._roleNextX=e.stageX-this._roleDX;//下个X坐标点
                this._roleNextY=e.stageY-this._roleDY;//下个Y坐标点
                if(this._roleNextX-this._roleHalfW<this._frameLeftMargin){
                    this._roleNextX=this._roleHalfW+this._frameLeftMargin;
                }
                if(this._roleNextX+this._roleHalfW>this.ui.groupContent.width-this._frameRightMargin){
                    this._roleNextX=this.ui.groupContent.width-this._frameRightMargin-this._roleHalfW;
                }
                if(this._roleNextY+this._roleHalfH>easy.GlobalSetting.DISPLAY_HEIGHT){
                    this._roleNextY=easy.GlobalSetting.DISPLAY_HEIGHT-this._roleHalfH;
                }
                if(this._roleNextY-this._roleHalfH<120){
                    this._roleNextY=120+this._roleHalfH;
                }
            }
        }
        private endTouch():void{
            this.ui.touchEnabled=false;
            this.ui.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.moveTouch,this);
            this.ui.removeEventListener(egret.TouchEvent.TOUCH_END,this.endTouch,this);
        }
        //页面初始化
        private gameState:number;//游戏状态
        private gameState_Run:number=2;//游戏进行中
        private gameState_End:number=3;//游戏结束
        private shield:boolean=false;//护罩状态
        private pageInit():void{
            this.ui.imgShield.texture=easy.ResManager.getRes("http://static.jiyou-tech.com/2019/375/resource/assets/ui/ball/gameBigBall0.png");
            GameData.luckyState=false;//重置为未中奖状态
            this.ui.imgEnd.scaleX=this.ui.imgEnd.scaleY=0;
            this.ui.imgEnd.y=easy.GlobalSetting.DISPLAY_HEIGHT/2;
            //速度重置
            this.ObstacleSpeed=10;
            this.EnergyBallSpeed=12;
            this.LuckyBallSpeed=12;
            this.speedTimeCount=0;
            //幸运球
            this.luckyBallList=[0,1,1];
            this.getNewObstacleTempTime=50;
            this.newObstacleTempCount=5;
            this.newBallTempCount=this.getNewBallTempTime;
            //护罩
            this.shield=false;
            this.ui.imgShield.visible=false;
            this.roleInit();
            GameData.gameSeconds=0;
            this.timeCount=0;
            this.addTime();
            this.firstSuningBall=false;
            //获得的优惠券清空
            easy.HttpUtil.postData(GameData.apiUrl+"/game_start.php","",this.gameStartReply,this);
        }
        private gameStartReply(str):void{
            var that=this;
            var json=JSON.parse(str);
            if(json.code==200){
                window["addGameNums"]();//开始游戏统计
                GameData.gameID=json.game_id;
                this.gameState=this.gameState_Run;
                easy.HeartBeat.addListener(this,this.moveTemp,1);
            }else{
                easy.MessageTips.showMessage(json.msg);
            }
        }
        private roleInit():void{
            this.ui.imgRole.scaleX=1;
            this.ui.groupRole.rotation=0;
            this.ui.groupRole.x=this._roleNextX=this.ui.groupContent.width/2;
            this.ui.groupRole.y=this._roleNextY=easy.GlobalSetting.DISPLAY_HEIGHT-this.ui.groupRole.height/2-200;
        }
        //游戏计时
        private timeCount:number=0;
        private addTime():void{
            this.timeCount++;
            if(this.timeCount%60==0){
                GameData.gameSeconds++;
                this.ui.tempTime.changeTime(GameData.slewTime( GameData.gameSeconds));
            }
        }
        //障碍物
        private ObstacleSpeed:number=8;//移动速度
        private ObstacleTempList_Move:Array<any>=[];//障碍物移动中模版列表
        private ObstacleDataList:Array<any>=[[63,62],[90,105]];//障碍物数据信息列表
        private addObstacleTemp():void{
            var tempObstacle:suning.TempObstacleTemplate = easy.ObjectPool.getByClass(TempObstacleTemplate, "Obstacle");
            this.ui.groupMove.addChild(tempObstacle);
            easy.TweenEffect.setAnchorXY(tempObstacle);
            this.obstacleInit(tempObstacle);
            this.ObstacleTempList_Move.push(tempObstacle);
        }
        private obstacleInit(tempObstacle):void{
            var code=Math.floor(Math.random()*2+1);
            tempObstacle.data={
                type:1,
                code:code,
                width:this.ObstacleDataList[code-1][0],
                height:this.ObstacleDataList[code-1][1],
                show:true,//是否需要显示
            };
            tempObstacle.changeImg(code);
            tempObstacle.x=this.creatNewX(tempObstacle.data.width);
            tempObstacle.y=-tempObstacle.data.height/2-100;
            tempObstacle.visible=true;
        }
        //能量球
        private EnergyBallSpeed:number=10;//移动速度
        private EnergyBallTempList_Move:Array<any>=[];//能量球移动中模版列表
        private EnergyBallScoreList:Array<any>=[10,11,12];
        private EnergyBallTypeNum:Array<any>=[5,4,7];
        private addEnergyBallTemp(code):void{
            var tempEnergyBall:suning.TempEnergyBallTemplate = easy.ObjectPool.getByClass(TempEnergyBallTemplate, "EnergyBall");
            this.ui.groupMove.addChild(tempEnergyBall);
            easy.TweenEffect.setAnchorXY(tempEnergyBall);
            this.energyBallInit(tempEnergyBall,code);
            this.EnergyBallTempList_Move.push(tempEnergyBall);
        }
        private energyBallInit(tempEnergyBall,code):void{
            var imgCode=Math.floor(Math.random()*this.EnergyBallTypeNum[code-1]+1);
            tempEnergyBall.data={
                type:2,
                code:code,
                width:140,
                height:140,
                show:true,//是否需要显示
            };
            tempEnergyBall.changeImg(2,code,imgCode);
            tempEnergyBall.x=this.creatNewX(tempEnergyBall.data.width);
            tempEnergyBall.y=-tempEnergyBall.data.height/2-100;
            tempEnergyBall.visible=true;
        }
        //幸运球
        private LuckyBallSpeed:number=10;//移动速度
        private luckyBallList:Array<any>=[0,1,1];//幸运球特性列表 0护罩 1抽奖
        private LuckyBallTempList_Move:Array<any>=[];//幸运球移动中模版列表
        private addLuckyBallTemp():void{
            var tempLuckyBall:suning.TempEnergyBallTemplate = easy.ObjectPool.getByClass(TempEnergyBallTemplate, "LuckyBall");
            this.ui.groupMove.addChild(tempLuckyBall);
            easy.TweenEffect.setAnchorXY(tempLuckyBall);
            this.luckyBallInit(tempLuckyBall);
            this.LuckyBallTempList_Move.push(tempLuckyBall);
        }
        private luckyBallInit(tempLuckyBall):void{
            var code=this.luckyBallList.splice(Math.floor(Math.random()*this.luckyBallList.length),1)[0];
            tempLuckyBall.data={
                type:3,
                code:code,
                width:140,
                height:140,
                show:true,//是否需要显示
            };
            tempLuckyBall.changeImg(3,0,0);
            tempLuckyBall.x=this.creatNewX(tempLuckyBall.data.width);
            tempLuckyBall.y=-tempLuckyBall.data.height/2-100;
            tempLuckyBall.visible=true;
        }
        //移动模版
        private getNewObstacleTempTime:number=25;//获取新的障碍物的时间
        private newObstacleTempCount:number=25;
        private getNewBallTempTime:number=100;//获取新的能量球的时间
        private addSpeedTime:number=1000*10;//每隔10秒增加速度
        private speedTimeCount:number=0;
        private newBallTempCount:number=100;
        private firstSuningBall:boolean=false;
        //private energyBallPR:number=20;
        private luckyBallPR:number=50;
        private moveTemp():void{
            if(this.gameState==this.gameState_Run){//游戏中
                this.addTime();//增加时间
                if(!this.firstSuningBall){
                    this.firstSuningBall=true;
                    this.addEnergyBallTemp(3);//出现苏宁能量球
                    return;
                }
                this.speedTimeCount++;
                if(this.speedTimeCount%this.addSpeedTime==0){
                    this.ObstacleSpeed++;
                    this.EnergyBallSpeed++;
                    this.LuckyBallSpeed++;
                }
                this.newObstacleTempCount--;
                if(this.newObstacleTempCount<0){
                    if(Math.floor(Math.random()*2+1)==1){
                        if(this.getNewObstacleTempTime>25){
                            this.getNewObstacleTempTime--
                        }
                        this.newObstacleTempCount=this.getNewObstacleTempTime;
                        this.addObstacleTemp();
                    }
                }
                this.newBallTempCount--;
                if(this.newBallTempCount<0){
                    if(Math.floor(Math.random()*2+1)==1){
                        this.newBallTempCount=this.getNewBallTempTime;
                        var pr=Math.floor(Math.random()*100+1);
                        if(pr<=this.luckyBallPR&&this.luckyBallList.length>0){//出现幸运球
                            console.log("出现幸运球");
                            this.addLuckyBallTemp();
                        }else{
                            this.addEnergyBallTemp(Math.floor(Math.random()*3+1));
                        }
                    }
                }
                this.ui.groupRole.x=this._roleNextX;
                this.ui.groupRole.y=this._roleNextY;
                this.ui.imgRole.scaleX=this._roleNextX>=this.ui.groupContent.width/2?1:-1;
                //幸运球移动
                for (var i:number=0;i<this.LuckyBallTempList_Move.length;i++){
                    var tempLuckyBall=this.LuckyBallTempList_Move[i];
                    tempLuckyBall.y+=this.LuckyBallSpeed;
                    this.collisionRole(tempLuckyBall);//碰撞检测
                    if(tempLuckyBall.y-tempLuckyBall.data.height/2>easy.GlobalSetting.DISPLAY_HEIGHT){//移除画面
                        easy.ObjectPool.recycleClass(this.LuckyBallTempList_Move[i],"LuckyBall");
                        this.ui.groupMove.removeChild(this.LuckyBallTempList_Move[i]);
                        this.LuckyBallTempList_Move.splice(i,1);
                        i--;
                    }
                }
                //能量球移动
                for (var i:number=0;i<this.EnergyBallTempList_Move.length;i++){
                    var tempEnergyBall=this.EnergyBallTempList_Move[i];
                    tempEnergyBall.y+=this.EnergyBallSpeed;
                    this.collisionRole(tempEnergyBall);//碰撞检测
                    if(tempEnergyBall.y-tempEnergyBall.data.height/2>easy.GlobalSetting.DISPLAY_HEIGHT){//移除画面
                        easy.ObjectPool.recycleClass(this.EnergyBallTempList_Move[i],"EnergyBall");
                        this.ui.groupMove.removeChild(this.EnergyBallTempList_Move[i]);
                        this.EnergyBallTempList_Move.splice(i,1);
                        i--;
                    }
                }
                //障碍物移动
                for (var i:number=0;i<this.ObstacleTempList_Move.length;i++){
                    var tempObstacle=this.ObstacleTempList_Move[i];
                    tempObstacle.y+=this.ObstacleSpeed;
                    if(!this.shield){//保护罩未打开
                        this.collisionRole(tempObstacle);//碰撞检测
                    }
                    if(tempObstacle.y-tempObstacle.data.height/2>easy.GlobalSetting.DISPLAY_HEIGHT){//移除画面
                        easy.ObjectPool.recycleClass(this.ObstacleTempList_Move[i],"Obstacle");
                        this.ui.groupMove.removeChild(this.ObstacleTempList_Move[i]);
                        this.ObstacleTempList_Move.splice(i,1);
                        i--;
                    }
                }
            }
        }
        private creatNewX(width):number{
            return Math.floor(Math.random()*(this.ui.groupMove.width-width-this._frameRightMargin*2)+(width/2+this._frameLeftMargin));
        }
        //碰撞检测
        private collisionError:number=5;//检测允许误差
        private collisionRole(temp):void{
            if(temp.data.show){
                var that=this;
                var absX=Math.abs((this.ui.groupRole.x-this._roleHalfW+this.ui.groupOb1.x)-temp.x);
                var w=temp.data.width/2+this.ui.groupOb1.width/2;
                if(absX+this.collisionError>=w){
                    return;
                }
                var absY=Math.abs((this.ui.groupRole.y-this._roleHalfH+this.ui.groupOb1.y)-temp.y);
                var h=temp.data.height/2+this.ui.groupOb1.height/2;
                if(absY+this.collisionError>=h){
                    return;
                }else{//已碰撞
                    if(temp.data.type==1&&!this.shield){//障碍物
                        this.gameState=this.gameState_End;
                        easy.HeartBeat.removeListener(this,this.moveTemp);
                        this.clearTemp();
                        this.ui.tempTishi.closeTishi();
                        if(GameData.memberNo){
                            var parm="game_id="+GameData.gameID+"&play_score="+GameData.gameScore+"&play_seconds="+GameData.gameSeconds+"&user_id="+GameData.memberNo;
                        }else{
                            var parm="game_id="+GameData.gameID+"&play_score="+GameData.gameScore+"&play_seconds="+GameData.gameSeconds;
                        }
                        easy.HttpUtil.postData(GameData.apiUrl+"//submit_score.php",parm,this.endMc,this);
                    }else if(temp.data.type==2){//能量球
                        temp.data.show=false;
                        temp.visible=false;
                        GameData.gameScore+=this.EnergyBallScoreList[temp.data.code-1];
                        easy.MyEvent.sendEvent("changeScore");
                        this.ui.tempTishi.tishiMc(temp.data.code,2);
                        var scoreList=[10,11,12];
                        var parm="game_id="+GameData.gameID+"&increase_score="+scoreList[temp.data.code-1]+"&play_seconds="+GameData.gameSeconds;
                        easy.HttpUtil.postData(GameData.apiUrl+"/increase_step.php",parm,function () {},this);
                    }else if(temp.data.type==3){//幸运球
                        temp.data.show=false;
                        temp.visible=false;
                        if(temp.data.code==0){
                            this.shield=true;
                            this.ui.imgShield.visible=true;
                            egret.Tween.get(this.ui.imgShield).wait(3000).call(this.shieldMc,this).wait(2000).call(this.shieldHidden,this);
                        }else{
                            if(GameData.luckyState){
                                this.ui.tempTishi.tishiMc(0,3);
                            }else{
                                var random=Math.floor(Math.random()*2);
                                if(random==0){//中奖
                                    GameData.luckyState=true;
                                    this.ui.tempTishi.tishiMc(1,3);
                                }else{//未中奖
                                    this.ui.tempTishi.tishiMc(0,3);
                                }
                            }
                        }
                    }
                }
            }
        }
        private shieldMc():void{
            egret.Tween.get(this.ui.imgShield,{loop:true}).to({alpha:0.5},300).to({alpha:1},300);
        }
        private shieldHidden():void{
            egret.Tween.removeTweens(this.ui.imgShield);
            this.ui.imgShield.visible=false;
            this.ui.imgShield.alpha=1;
            this.shield=false;
        }
        //结束动画
        private endMc(str):void{
            var json=JSON.parse(str);
            GameData.userRank=json.code==200?json.user_info.order:0;
            var rotation=this.ui.imgRole.scaleX>0?-90:90;
            egret.Tween.get(this.ui.groupRole).to({rotation:rotation,x:this.ui.groupContent.width/2,y:this.ui.groupContent.height/2},300);
            egret.Tween.get(this.ui.imgEnd).to({scaleX:1,scaleY:1},300).wait(300).call(function () {
                easy.ViewManager.show(PageEndView);
            },this);
        }
        //清除模版
        private clearTemp():void{
            //清除幸运球模版
            for (var i:number=0;i<this.LuckyBallTempList_Move.length;i++){
                easy.ObjectPool.recycleClass(this.LuckyBallTempList_Move[i],"LuckyBall");
                this.ui.groupMove.removeChild(this.LuckyBallTempList_Move[i]);
            }
            this.LuckyBallTempList_Move.splice(0,this.LuckyBallTempList_Move.length);
            //清除能量球模版
            for (var i:number=0;i<this.EnergyBallTempList_Move.length;i++){
                easy.ObjectPool.recycleClass(this.EnergyBallTempList_Move[i],"EnergyBall");
                this.ui.groupMove.removeChild(this.EnergyBallTempList_Move[i]);
            }
            this.EnergyBallTempList_Move.splice(0,this.EnergyBallTempList_Move.length);
            //清除障碍物模版
            for (var i:number=0;i<this.ObstacleTempList_Move.length;i++){
                easy.ObjectPool.recycleClass(this.ObstacleTempList_Move[i],"Obstacle");
                this.ui.groupMove.removeChild(this.ObstacleTempList_Move[i]);
            }
            this.ObstacleTempList_Move.splice(0,this.ObstacleTempList_Move.length);
        }
        


        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        public enter():void {
            super.enter();
            window["addNums"](['_trackEvent', "游戏页"]);
            window["changeMusicSrc"](2);
            this.pageInit();
            //TODO 在这里写,进入时,初始数据的操作
        }
        
        /**
         * enter的过渡效果
         */
        public enterTransition():void {
            super.enterTransition();
            //TODO 可以覆盖这里,写自己想要的enter效果
        }

        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        public outer():void {
            super.outer();
            this.endTouch();
            window["changeMusicSrc"](1);
            //TODO 在这里写,退出时,清理数据的操作
        }
        
        /**
         * outer的过渡效果
         */
        public outerTransition():void {
            super.outerTransition();
            //TODO 可以覆盖这里,写自己想要的out效果
        }
        
        /**
         * 通过ResManager.getTexture(url)触发下载的url资源,会通知到当前显示的view中的onMyEventResDownloaded方法
         * 参数myevent携带两个数据
         *    url:完成加载的url
         *    data:完成加载的数据内容
         * 可以通过ResManager.getTexture(url),再次取到data数据
         * @param event
         */
        //public onMyEventResDownloaded(myevent:easy.MyEvent):void {
             //TODO 当前view动态加载的资源,请在这里添加刷新逻辑
        //}

        /**
         * View自身的材质,首次下载完成会调用加载一次,刷新UI皮肤显示
         * 使用了框架的UI机制,单ui的资源下载完成会调用改方法刷新
         * 若view中有逻辑使用到ui的素材,应该在这里做素材的赋值
         */
        public validateNow():void{
            super.validateNow();
            //TODO 初始特殊的素材资源,需要调用可以写在这里
            //if (this.ui && this.ui.spriteSheet) {
            //
            //}
        }
    }
}