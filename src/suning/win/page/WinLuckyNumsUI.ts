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
     * @date  :2019-04-24 19:51:47
     * @EasyGame.org Tools
     */ 
    export class WinLuckyNumsUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "WinLuckyNumsUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg"];//单材质资源名称
        public resGroup:Array<string> = ["page_WinLuckyNumsUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/WinLuckyNumsUI_loader_190424195147.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public groupFrame:easy.Group = null;
        public imgFrame:easy.Image = null;
        public imgTishi:easy.Image = null;
        public btnBack:easy.Button = null;
        public btnShare:easy.Button = null;

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
            this.width = 569;
            this.height = 580;
            //imgBg 
            this.imgBg = new easy.Image(true);
            this.imgBg.name = "imgBg";
            this.addChild(this.imgBg);
            this.imgBg.x = -90.5;
            this.imgBg.y = -463;
            this.imgBg.width = 750;
            this.imgBg.height = 1506;
            //groupFrame 
            this.groupFrame = new easy.Group(true);
            this.groupFrame.name = "groupFrame";
            this.addChild(this.groupFrame);
            this.groupFrame.showBg = false;
            this.groupFrame.border = false;
            this.groupFrame.width = 569;
            this.groupFrame.height = 378;
            //imgFrame 
            this.imgFrame = new easy.Image(true);
            this.imgFrame.name = "imgFrame";
            this.groupFrame.addChild(this.imgFrame);
            this.imgFrame.width = 569;
            this.imgFrame.height = 378;
            //imgTishi 
            this.imgTishi = new easy.Image(true);
            this.imgTishi.name = "imgTishi";
            this.groupFrame.addChild(this.imgTishi);
            this.imgTishi.x = 78.5;
            this.imgTishi.y = 123;
            this.imgTishi.width = 412;
            this.imgTishi.height = 132;
            //btnBack 
            this.btnBack = new easy.Button(true);
            this.btnBack.name = "btnBack";
            this.addChild(this.btnBack);
            this.btnBack.width = 181;
            this.btnBack.height = 55;
            this.btnBack.x = 50;
            this.btnBack.y = 460;
            //btnShare 
            this.btnShare = new easy.Button(true);
            this.btnShare.name = "btnShare";
            this.addChild(this.btnShare);
            this.btnShare.width = 180;
            this.btnShare.height = 55;
            this.btnShare.x = 340;
            this.btnShare.y = 460;

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
            var jsonData:any = RES.getRes("WinLuckyNumsUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("WinLuckyNumsUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.groupFrame.drawDelay = false;
            if (this.spriteSheet) this.imgFrame.texture = this.spriteSheet.getTexture("frame2");
            this.imgFrame.drawDelay = false;
            if (this.spriteSheet) this.imgTishi.texture = this.spriteSheet.getTexture("4_1");
            this.imgTishi.drawDelay = false;
            if (this.spriteSheet) this.btnBack.texture = this.spriteSheet.getTexture("btn_Back2");
            this.btnBack.drawDelay = false;
            if (this.spriteSheet) this.btnShare.texture = this.spriteSheet.getTexture("btn_Share");
            this.btnShare.drawDelay = false;

        }
    }
}