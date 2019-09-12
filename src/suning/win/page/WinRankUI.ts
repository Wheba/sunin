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
     * <p></p>
     * @date  :2019-04-26 0:50:56
     * @EasyGame.org Tools
     */ 
    export class WinRankUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "WinRankUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg","frame1","btn_Back"];//单材质资源名称
        public resGroup:Array<string> = ["page_WinRankUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/WinRankUI_loader_19042605056.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public imgFrame:easy.Image = null;
        public imgHead:easy.Image = null;
        public groupClip:easy.Group = null;
        public groupContent:easy.Group = null;
        public btnBack:easy.Button = null;
        public imgTitleNew:easy.Image = null;

        public constructor() {
            super(true);
        }
        /**
         * 初始化主场景的组件,加入场景时,主动调用一次
         * 子类覆写该方法,添加UI逻辑
         */  
        public createChildren():void {
            super.createChildren();
            this.showBg = false;
            this.border = false;
            this.width = 471;
            this.height = 860;
            //imgBg 
            this.imgBg = new easy.Image(true);
            this.imgBg.name = "imgBg";
            this.addChild(this.imgBg);
            this.imgBg.x = -139.5;
            this.imgBg.y = -323;
            this.imgBg.width = 750;
            this.imgBg.height = 1506;
            //imgFrame 
            this.imgFrame = new easy.Image(true);
            this.imgFrame.name = "imgFrame";
            this.addChild(this.imgFrame);
            this.imgFrame.width = 471;
            this.imgFrame.height = 860;
            this.imgFrame.alpha = 0.5;
            //imgHead 
            this.imgHead = new easy.Image(true);
            this.imgHead.name = "imgHead";
            this.addChild(this.imgHead);
            this.imgHead.x = 49;
            this.imgHead.y = 109;
            this.imgHead.width = 353;
            this.imgHead.height = 29;
            //groupClip 
            this.groupClip = new easy.Group(true);
            this.groupClip.name = "groupClip";
            this.addChild(this.groupClip);
            this.groupClip.showBg = false;
            this.groupClip.clip = true;
            this.groupClip.border = false;
            this.groupClip.x = 35.5;
            this.groupClip.y = 160;
            this.groupClip.width = 400;
            this.groupClip.height = 670;
            //groupContent 
            this.groupContent = new easy.Group(true);
            this.groupContent.name = "groupContent";
            this.groupClip.addChild(this.groupContent);
            this.groupContent.showBg = false;
            this.groupContent.clip = true;
            this.groupContent.border = false;
            this.groupContent.width = 400;
            this.groupContent.height = 670;
            //btnBack 
            this.btnBack = new easy.Button(true);
            this.btnBack.name = "btnBack";
            this.addChild(this.btnBack);
            this.btnBack.width = 223;
            this.btnBack.height = 67;
            this.btnBack.x = 124;
            this.btnBack.y = 919;
            //imgTitleNew 
            this.imgTitleNew = new easy.Image(true);
            this.imgTitleNew.name = "imgTitleNew";
            this.addChild(this.imgTitleNew);
            this.imgTitleNew.x = 161.5;
            this.imgTitleNew.y = 30.5;
            this.imgTitleNew.width = 148;
            this.imgTitleNew.height = 39;

        }
        /**
         * 获取初始化逻辑,加入场景时,主动调用一次
         * 子类覆写该方法,添加业务逻辑
         */
         public initData():void {
           super.initData();
        }
        /**
         * 进入的逻辑
         * 可以再次根据外部数据情况做一些逻辑处理
         */
        public enter():void {

        }

        /**
         * 退出的逻辑
         * 做一些数据的销毁或者初始化,保证下次进入的时候,不会残留
         */
        public outer():void {

        }
        /**
         * 刷新UI皮肤显示
         */
        public validateNow():void{
            this.drawDelay = false;
            var jsonData:any = RES.getRes("WinRankUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("WinRankUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.imgFrame.texture = RES.getRes("frame1");
            this.imgFrame.drawDelay = false;
            if (this.spriteSheet) this.imgHead.texture = this.spriteSheet.getTexture("rankHead");
            this.imgHead.drawDelay = false;
            this.groupClip.drawDelay = false;
            this.groupContent.drawDelay = false;
            this.btnBack.texture = RES.getRes("btn_Back");
            this.btnBack.drawDelay = false;
            if (this.spriteSheet) this.imgTitleNew.texture = this.spriteSheet.getTexture("rankTitle");
            this.imgTitleNew.drawDelay = false;

        }
    }
}