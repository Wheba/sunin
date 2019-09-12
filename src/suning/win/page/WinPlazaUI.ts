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
    export class WinPlazaUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "WinPlazaUI";//合并材质资源名称
        public resTexture:Array<string> = ["frame3"];//单材质资源名称
        public resGroup:Array<string> = ["page_WinPlazaUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/WinPlazaUI_loader_190424195147.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public groupFrame:easy.Group = null;
        public imgFrame:easy.Image = null;
        public groupTiao:easy.Group = null;
        public imgTiaoDi:easy.Image = null;
        public imgTiao:easy.Image = null;
        public groupClip:easy.Group = null;
        public groupContent:easy.Group = null;
        public btnConfirm:easy.Button = null;

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
            this.height = 478;
            //groupFrame 
            this.groupFrame = new easy.Group(true);
            this.groupFrame.name = "groupFrame";
            this.addChild(this.groupFrame);
            this.groupFrame.showBg = false;
            this.groupFrame.border = false;
            this.groupFrame.width = 471;
            this.groupFrame.height = 453;
            //imgFrame 
            this.imgFrame = new easy.Image(true);
            this.imgFrame.name = "imgFrame";
            this.groupFrame.addChild(this.imgFrame);
            this.imgFrame.width = 471;
            this.imgFrame.height = 453;
            //groupTiao 
            this.groupTiao = new easy.Group(true);
            this.groupTiao.name = "groupTiao";
            this.groupFrame.addChild(this.groupTiao);
            this.groupTiao.showBg = false;
            this.groupTiao.border = false;
            this.groupTiao.x = 418;
            this.groupTiao.y = 32;
            this.groupTiao.width = 19;
            this.groupTiao.height = 345;
            //imgTiaoDi 
            this.imgTiaoDi = new easy.Image(true);
            this.imgTiaoDi.name = "imgTiaoDi";
            this.groupTiao.addChild(this.imgTiaoDi);
            this.imgTiaoDi.y = -2.5;
            this.imgTiaoDi.width = 19;
            this.imgTiaoDi.height = 350;
            //imgTiao 
            this.imgTiao = new easy.Image(true);
            this.imgTiao.name = "imgTiao";
            this.groupTiao.addChild(this.imgTiao);
            this.imgTiao.x = 2;
            this.imgTiao.width = 15;
            this.imgTiao.height = 32;
            //groupClip 
            this.groupClip = new easy.Group(true);
            this.groupClip.name = "groupClip";
            this.groupFrame.addChild(this.groupClip);
            this.groupClip.showBg = false;
            this.groupClip.clip = true;
            this.groupClip.border = false;
            this.groupClip.x = 20;
            this.groupClip.y = 52;
            this.groupClip.width = 390;
            this.groupClip.height = 345;
            //groupContent 
            this.groupContent = new easy.Group(true);
            this.groupContent.name = "groupContent";
            this.groupClip.addChild(this.groupContent);
            this.groupContent.showBg = false;
            this.groupContent.border = false;
            this.groupContent.width = 390;
            this.groupContent.height = 345;
            //btnConfirm 
            this.btnConfirm = new easy.Button(true);
            this.btnConfirm.name = "btnConfirm";
            this.addChild(this.btnConfirm);
            this.btnConfirm.width = 225;
            this.btnConfirm.height = 68;
            this.btnConfirm.x = 123;
            this.btnConfirm.y = 410;

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
            var jsonData:any = RES.getRes("WinPlazaUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("WinPlazaUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.groupFrame.drawDelay = false;
            this.imgFrame.texture = RES.getRes("frame3");
            this.imgFrame.drawDelay = false;
            this.groupTiao.drawDelay = false;
            if (this.spriteSheet) this.imgTiaoDi.texture = this.spriteSheet.getTexture("6_2");
            this.imgTiaoDi.drawDelay = false;
            if (this.spriteSheet) this.imgTiao.texture = this.spriteSheet.getTexture("6_1");
            this.imgTiao.drawDelay = false;
            this.groupClip.drawDelay = false;
            this.groupContent.drawDelay = false;
            if (this.spriteSheet) this.btnConfirm.texture = this.spriteSheet.getTexture("btn_Confirm2");
            this.btnConfirm.drawDelay = false;

        }
    }
}