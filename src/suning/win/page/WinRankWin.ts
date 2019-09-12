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
     * <p>WinRankUI的逻辑类</p>
     * @date  :2019-04-11 17:45:37
     * @EasyGame.org Tools
     */ 
    export class WinRankWin  extends easy.Win{
        public constructor() {
            super();
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
            this.ui = new WinRankUI();
        }
        /**
         * 获取ui对象
         * @returns
         */
        public get ui():WinRankUI{
            return <WinRankUI>this._ui;
        }

        /**
         * 设置ui对象
         * @param
         */
        public set ui(myui:WinRankUI){
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
            GameData.setBgScale(this.ui.imgBg);
            easy.TweenEffect.setAnchorXY(this.ui.btnBack);
            this.ui.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchBtnBack, this);
            //滚动区域设置
            this.ui.groupContent.x=0;
            this.ui.groupContent.y=0;
            this.scrollView.setContent(this.ui.groupContent);
            this.scrollView.width=this.ui.groupClip.width;
            this.scrollView.height=this.ui.groupClip.height;
            this.scrollView.x=0;
            this.scrollView.y=0;
            this.ui.groupClip.addChild(this.scrollView);
            this.scrollView.bounces=false;
            this.scrollView.verticalScrollPolicy="auto";
            this.scrollView.horizontalScrollPolicy="off";
            this.scrollView.addEventListener(egret.Event.COMPLETE,this.onComplete,this);
            //TODO View逻辑可在此继续添加
        }
        private scrollView:egret.ScrollView=new egret.ScrollView();//滚动区域
        private onComplete():void{
            if(this.ui.groupContent.height>this.ui.groupClip.height){
                if(this.scrollView.scrollTop>=(this.ui.groupContent.height-this.ui.groupClip.height)-5){
                    this.getRank();
                }
            }
        }
        //退出界面
        private onTouchBtnBack(event:egret.TouchEvent):void {
            //TODO 此处填写 btnBack按钮点击逻辑
            easy.PopupManager.hidden(this);
        }
        private pageCode:number=1;
        private showNum:number=0;//显示数量
        private pageInit():void{
            this.ui.groupContent.height=0.1;
            this.scrollView.setScrollTop(0);
            this.pageCode=0;
            this.showNum=0;
            this.loadState=this.load_End;
        }


        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        public enter():void {
            super.enter();
            this.pageInit();
            this.getRank();
            //TODO 在这里写,进入时,初始数据的操作
        }
        private loadState:number=0;//更新数据状态
        private load_End:number=0;//更新结束
        private load_Wait:number=1;//更新等待中
        private load_Close:number=2;//更新功能关闭
        private getNum:number=20;//每次获取数量
        private getRank():void{
            if(this.loadState==this.load_End){//可更新
                this.loadState=this.load_Wait;
                this.pageCode++;
                var parm="user_id="+GameData.memberNo+"&page="+this.pageCode+"&range="+this.getNum;
                easy.HttpUtil.getData(GameData.apiUrl+"/rank_result.php",parm,this.getRankListReply,this);
            }
        }
        private getRankListReply(str):void{
            var json=JSON.parse(str);
            this.loadState=this.load_End;
            if(json.code==200){
                for (var i:number=0;i<json.items.length;i++){
                    if(this.rankTempList.length<=i+this.showNum){
                        this.addRankTemp();
                    }
                    this.rankTempList[i+this.showNum].changeContent(json.items[i]);
                }
                if(json.items.length<this.getNum){
                    this.loadState=this.load_Close;
                }
                this.showNum+=json.items.length;
                this.ui.groupContent.height=45*this.showNum;
            }else{
                easy.MessageTips.showMessage(json.msg);
            }
        }
        private rankTempList:Array<any>=[];
        private addRankTemp():void{
            var tempRank:suning.TempRankTemplate = easy.ObjectPool.getByClass(TempRankTemplate, "TempRank");
            //var tempRank:TempRankTemplate=new TempRankTemplate();
            this.ui.groupContent.addChild(tempRank);
            this.ui["tempRank"+this.rankTempList.length] = tempRank;
            tempRank.x=0;
            tempRank.y=45*this.rankTempList.length;
            tempRank.ui.labelNo.text=this.rankTempList.length+1+"";
            tempRank.checkResReady();
            this.rankTempList.push(tempRank);
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
            for (var i:number=0;i<this.rankTempList.length;i++){
                easy.ObjectPool.recycleClass(this.rankTempList[i],"TempRank");
                this.ui.groupContent.removeChild(this.rankTempList[i]);
            }
            this.rankTempList.splice(0,this.rankTempList.length);
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