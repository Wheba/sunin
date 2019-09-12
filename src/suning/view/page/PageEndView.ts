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
     * <p>PageEndUI的逻辑类</p>
     * @date  :2019-04-10 16:22:35
     * @EasyGame.org Tools
     */ 
    export class PageEndView  extends easy.View{
        public constructor() {
            super();
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
            this.ui = new PageEndUI();
        }
        /**
         * 获取ui对象
         * @returns
         */
        public get ui():PageEndUI{
            return <PageEndUI>this._ui;
        }

        /**
         * 设置ui对象
         * @param
         */
        public set ui(myui:PageEndUI){
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
            this.addHandleEvent("openGetCouponBtn", "openGetCouponBtn");
            this.addHandleEvent("changePlazaSuccess", "changePlazaSuccess");
            //TODO UI层声明的组件,可能会用到,请自行启用
            easy.TweenEffect.setAnchorXY(this.ui.imgBg);
            this.ui.imgBg.x=easy.GlobalSetting.DISPLAY_WIDTH/2;
            this.ui.imgBg.y=easy.GlobalSetting.DISPLAY_HEIGHT/2;
            GameData.setBgScale(this.ui.imgBg);
            for (var i:number=0;i<3;i++){
                easy.TweenEffect.setAnchorXY(this.ui[this.btnNameList[i]]);
            }
            easy.TweenEffect.setAnchorXY(this.ui.btnRank);
            easy.TweenEffect.setAnchorXY(this.ui.btnAgain);
            easy.TweenEffect.setAnchorXY(this.ui.btnShare);
            easy.TweenEffect.setAnchorXY(this.ui.btnGetCoupon);
            easy.TweenEffect.setAnchorXY(this.ui.btnSquare);
            this.ui.btnRank.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnRank, this);
            this.ui.btnAgain.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnAgain, this);
            this.ui.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnShare, this);
            this.ui.btnGetCoupon.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBtnGetCoupon, this);
            this.ui.btnSquare.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                egret.Tween.removeTweens(this.ui.btnSquare);
                easy.PopupManager.show(WinPlazaWin);
            },this);

            //TODO View逻辑可在此继续添加
        }
        //排行榜
        private onTouchBtnRank(event:egret.TouchEvent):void {
            //TODO 此处填写 btnRank按钮点击逻辑
            window["addNums"](['_trackEvent', "排行榜-游戏积分页", "平台-"+GameData.gameEnterToName(),"广场-"+GameData.plazaIdToName()]);
            easy.PopupManager.show(WinRankWin);
        }
        //再来一次
        private onTouchBtnAgain(event:egret.TouchEvent):void {
            //TODO 此处填写 btnAgain按钮点击逻辑
            window["addNums"](['_trackEvent', "再玩一次-游戏积分页", "平台-"+GameData.gameEnterToName(),"广场-"+GameData.plazaIdToName()]);
            easy.ViewManager.show(PageGameView);
        }
        private onTouchBtnGetCoupon():void{
            if(GameData.gameEnter=="3"&&!GameData.selectPlaza){//朋友圈进入并且没有选择广场
                easy.MessageTips.showMessage("请先选择广场");
            }else{
                if(GameData.memberNo!=""){//会员ID
                    window["addNums"](['_trackEvent', "领取礼包","已登陆"]);
                    this.closeGetCouponBtn();
                    suning.GameData.getCoupon();
                }else{
                    window["addNums"](['_trackEvent', "领取礼包","未登陆","调用登陆接口"]);
                    GameData.getMemberNo();
                }
            }
        }
        private openGetCouponBtn():void{
            this.ui.btnGetCoupon.touchEnabled=true;
            this.ui.btnGetCoupon.texture=this.ui.spriteSheet.getTexture("btn_GetCoupon");
            this.ui.btnGetCoupon.draw();
        }
        private closeGetCouponBtn():void{
            this.ui.btnGetCoupon.touchEnabled=false;
            this.ui.btnGetCoupon.texture=this.ui.spriteSheet.getTexture("btn_GetCoupon0");
            this.ui.btnGetCoupon.draw();
        }
        //分享
        private onTouchBtnShare():void{
            if(GameData.gameEnter=="1"){//App
                GameData.appShare();
            }else{
                easy.PopupManager.show(WinShareWin);
            }
        }
        //页面还原
        private pageInit():void{
            this.ui.labelImgScore.text=GameData.gameScore+"";
            this.ui.labelImgRank.text=GameData.userRank+"";
            GameData.setObjScale([this.ui.btnRank,this.ui.btnAgain,this.ui.btnShare,this.ui.btnGetCoupon,this.ui.btnSquare],0);
            this.ui.imgRankTishi.alpha=0;
            this.ui.imgRankTishi.y=438+50;
            this.ui.groupFrame.alpha=0;
            this.ui.groupFrame.y=105-50;
            this.ui.imgCoupon.x=-185.5+100;
            this.ui.imgCoupon.alpha=0;
            if(GameData.luckyState){//中奖
                window["addNums"](['_trackEvent', "游戏结束页","有礼包"]);
                this.ui.groupBtn.visible=false;
                this.ui.groupCoupon.visible=true;
            }else{
                window["addNums"](['_trackEvent', "游戏结束页","无礼包"]);
                this.ui.groupBtn.visible=true;
                this.ui.groupCoupon.visible=false;
            }
            this.changePlazaSuccess();
            this.openGetCouponBtn();
        }
        //页面动画
        private btnNameList:Array<any>=["btnAgain","btnShare","btnRank"];
        private pageMc():void{
            var that=this;
            egret.Tween.get(this.ui.groupFrame).to({alpha:1,y:105},500);
            egret.Tween.get(this.ui.imgRankTishi).to({alpha:1,y:438},500);
            if(GameData.luckyState){
                egret.Tween.get(this.ui.imgCoupon).to({alpha:1}).to({x:-185.5},500,egret.Ease.backOut);
                egret.Tween.get(this.ui.btnGetCoupon).wait(600).to({scaleX:1,scaleY:1},500,egret.Ease.backOut);
                if(GameData.gameEnter=="3"){//朋友圈
                    egret.Tween.get(this.ui.btnSquare).wait(600).to({scaleX:1,scaleY:1},500,egret.Ease.backOut).call(function () {
                        egret.Tween.get(that.ui.btnSquare,{loop:true}).to({scaleX:1.05,scaleY:1.05},800).to({scaleX:1,scaleY:1},800);
                    },this);
                }
            }else{
                for (var i:number=0;i<3;i++){
                    egret.Tween.get(this.ui[this.btnNameList[i]]).wait(i*300).to({scaleX:1,scaleY:1},500,egret.Ease.backOut);
                }
            }
        }


        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        public enter():void {
            super.enter();
            if(GameData.activityed){
                easy.ViewManager.show(PageOverView);
            }
            this.pageInit();
            this.pageMc();
            //TODO 在这里写,进入时,初始数据的操作
        }
        //选择广场完毕
        private changePlazaSuccess():void{
            if(GameData.selectPlaza&&GameData.plazaSelectIndex!=null){
                this.ui.btnSquare.label=GameData.plazaList[GameData.plazaSelectIndex].square_name;
            }else{
                this.ui.btnSquare.label = "点击选择您所属的广场";
            }
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
            egret.Tween.removeTweens(this.ui.btnSquare);
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