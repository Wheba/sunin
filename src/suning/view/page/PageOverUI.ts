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
     * @date  :2019-04-28 13:48:39
     * @EasyGame.org Tools
     */ 
    export class PageOverUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "PageOverUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg"];//单材质资源名称
        public resGroup:Array<string> = ["page_PageOverUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/PageOverUI_loader_190428134839.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public groupContent:easy.Group = null;
        public groupFrame:easy.Group = null;
        public imgTxt:easy.Image = null;
        public imgRole:easy.Image = null;

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
            this.clip = true;
            this.border = false;
            this.width = 750;
            this.height = 1206;
            this.topEnabled = true;
            this.bottomEnabled = true;
            this.leftEnabled = true;
            this.rightEnabled = true;
            //imgBg 
            this.imgBg = new easy.Image(true);
            this.imgBg.name = "imgBg";
            this.addChild(this.imgBg);
            this.imgBg.y = -150;
            this.imgBg.width = 750;
            this.imgBg.height = 1506;
            //groupContent 
            this.groupContent = new easy.Group(true);
            this.groupContent.name = "groupContent";
            this.addChild(this.groupContent);
            this.groupContent.showBg = false;
            this.groupContent.border = false;
            this.groupContent.width = 750;
            this.groupContent.height = 1206;
            this.groupContent.horizontalEnabled = true;
            this.groupContent.verticalEnabled = true;
            //groupFrame 
            this.groupFrame = new easy.Group(true);
            this.groupFrame.name = "groupFrame";
            this.groupContent.addChild(this.groupFrame);
            this.groupFrame.border = false;
            this.groupFrame.x = 90.5;
            this.groupFrame.y = 207.5;
            this.groupFrame.width = 569;
            this.groupFrame.height = 378;
            //imgTxt 
            this.imgTxt = new easy.Image(true);
            this.imgTxt.name = "imgTxt";
            this.groupFrame.addChild(this.imgTxt);
            this.imgTxt.x = 85;
            this.imgTxt.y = 75;
            this.imgTxt.width = 399;
            this.imgTxt.height = 228;
            this.imgTxt.horizontalEnabled = true;
            this.imgTxt.verticalEnabled = true;
            //imgRole 
            this.imgRole = new easy.Image(true);
            this.imgRole.name = "imgRole";
            this.groupContent.addChild(this.imgRole);
            this.imgRole.x = 46;
            this.imgRole.y = 670;
            this.imgRole.width = 538;
            this.imgRole.height = 336;

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
            var jsonData:any = RES.getRes("PageOverUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("PageOverUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.groupContent.drawDelay = false;
            if (this.spriteSheet) this.groupFrame.bgTexture = this.spriteSheet.getTexture("frame2");
            this.groupFrame.drawDelay = false;
            if (this.spriteSheet) this.imgTxt.texture = this.spriteSheet.getTexture("8_1");
            this.imgTxt.drawDelay = false;
            if (this.spriteSheet) this.imgRole.texture = this.spriteSheet.getTexture("8_2");
            this.imgRole.drawDelay = false;

        }
    }
}