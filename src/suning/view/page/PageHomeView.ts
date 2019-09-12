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
     * <p>PageHomeUI的逻辑类</p>
     * @date  :2019-04-09 22:39:58
     * @EasyGame.org Tools
     */ 
    export class PageHomeView  extends easy.View{
        public constructor() {
            super();
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
            this.ui = new PageHomeUI();
        }
        /**
         * 获取ui对象
         * @returns
         */
        public get ui():PageHomeUI{
            return <PageHomeUI>this._ui;
        }

        /**
         * 设置ui对象
         * @param
         */
        public set ui(myui:PageHomeUI){
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
            //this.addHandleEvent("getMemberNoSuccess", "openLuckyNumsWin");

            //TODO UI层声明的组件,可能会用到,请自行启用
            easy.TweenEffect.setAnchorXY(this.ui.btnPlay);
            easy.TweenEffect.setAnchorXY(this.ui.btnRule);
            easy.TweenEffect.setAnchorXY(this.ui.groupTitle);
            this.ui.btnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnPlay, this);
            this.ui.btnRule.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnRule, this);
            easy.TweenEffect.setAnchorXY(this.ui.imgBg);
            this.ui.imgBg.x=easy.GlobalSetting.DISPLAY_WIDTH/2;
            this.ui.imgBg.y=easy.GlobalSetting.DISPLAY_HEIGHT/2;
            GameData.setBgScale(this.ui.imgBg);

            //TODO View逻辑可在此继续添加
        }
        private onTouchBtnPlay(event:egret.TouchEvent):void {
            //TODO 此处填写 btnPlay按钮点击逻辑
            window["changeMusicState"]();
            egret.Tween.removeTweens(this.ui.btnPlay);
            setTimeout(function () {
                easy.ViewManager.show(PageGameView);
            },this,300);
        }
        //跳转到规则页
        private onTouchBtnRule(event:egret.TouchEvent):void {
            //TODO 此处填写 btnRule按钮点击逻辑
            easy.PopupManager.show(WinRuleWin);
        }
        //页面还原
        private pageInit():void{
            this.ui.groupTitle.y=290+this.ui.groupTitle.height/2;
            this.ui.imgTitleTxt2.alpha=0;
            GameData.setObjScale([this.ui.btnPlay,this.ui.btnRule,this.ui.groupTitle],0);
            this.ui.groupRole.x=easy.GlobalSetting.DISPLAY_WIDTH;
            this.ui.groupRole.y=630;
            this.ui.btnPlay.touchEnabled=true;
        }
        //页面动画
        private pageMc():void{
            var that=this;
            egret.Tween.get(this.ui.groupTitle).wait(300).to({scaleX:1,scaleY:1},500,egret.Ease.backOut).wait(200);
            egret.Tween.get(this.ui.groupRole).to({x:78,y:620},1001,egret.Ease.backOut).to({x:88,y:630},800).to({x:78,y:620},800).call(this.pageMc2,this);
        }
        private roleLoopMc():void{//角色循环动画
            egret.Tween.get(this.ui.groupRole,{loop:true}).to({x:this.ui.groupRole.x+10,y:this.ui.groupRole.y+10},800).to({x:this.ui.groupRole.x,y:this.ui.groupRole.y},800);
        }
        private pageMc2():void{
            var that=this;
            egret.Tween.get(this.ui.groupRole).to({x:78,y:551},500).call(this.roleLoopMc,this);
            egret.Tween.get(this.ui.imgTitleTxt1).to({alpha:0},500);
            egret.Tween.get(this.ui.imgTitleTxt2).to({alpha:1},500);
            egret.Tween.get(this.ui.groupTitle).to({y:202+this.ui.groupTitle.height/2},500);
            egret.Tween.get(this.ui.btnRule).wait(500).to({scaleX:1,scaleY:1},500,egret.Ease.backOut);
            egret.Tween.get(this.ui.btnPlay).wait(800).to({scaleX:1,scaleY:1},500,egret.Ease.backOut).call(function () {
                egret.Tween.get(that.ui.btnPlay,{loop:true}).to({scaleX:1.05,scaleY:1.05},800).to({scaleX:1,scaleY:1},800);
            },this);
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
            egret.Tween.removeTweens(this.ui.groupRole);
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