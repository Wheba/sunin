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
     * @date  :2019-04-09 22:39:47
     * @EasyGame.org Tools
     */ 
    export class LoadMianUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "LoadMianUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg"];//单材质资源名称
        public resGroup:Array<string> = ["loading_main"];//配置文件的Group
        public resFiles:Array<string> = ["loading_main.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public groupMiddle:easy.Group = null;
        public imgQ1:easy.Image = null;
        public imgQ2:easy.Image = null;
        public imgLoading:easy.Image = null;
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
            this.bgColor = 0x0;
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
            //groupMiddle 
            this.groupMiddle = new easy.Group(true);
            this.groupMiddle.name = "groupMiddle";
            this.addChild(this.groupMiddle);
            this.groupMiddle.showBg = false;
            this.groupMiddle.border = false;
            this.groupMiddle.x = 177.5;
            this.groupMiddle.y = 319;
            this.groupMiddle.width = 403;
            this.groupMiddle.height = 408;
            this.groupMiddle.horizontalEnabled = true;
            this.groupMiddle.horizontalCenter = 4;
            this.groupMiddle.verticalEnabled = true;
            this.groupMiddle.verticalCenter = -80;
            //imgQ1 
            this.imgQ1 = new easy.Image(true);
            this.imgQ1.name = "imgQ1";
            this.groupMiddle.addChild(this.imgQ1);
            this.imgQ1.width = 403;
            this.imgQ1.height = 408;
            //imgQ2 
            this.imgQ2 = new easy.Image(true);
            this.imgQ2.name = "imgQ2";
            this.groupMiddle.addChild(this.imgQ2);
            this.imgQ2.x = 27;
            this.imgQ2.y = 30;
            this.imgQ2.width = 349;
            this.imgQ2.height = 348;
            //imgLoading 
            this.imgLoading = new easy.Image(true);
            this.imgLoading.name = "imgLoading";
            this.groupMiddle.addChild(this.imgLoading);
            this.imgLoading.x = 117;
            this.imgLoading.y = 186.5;
            this.imgLoading.width = 169;
            this.imgLoading.height = 35;
            //imgRole 
            this.imgRole = new easy.Image(true);
            this.imgRole.name = "imgRole";
            this.groupMiddle.addChild(this.imgRole);
            this.imgRole.x = 84;
            this.imgRole.y = -60;
            this.imgRole.width = 632;
            this.imgRole.height = 397;
            this.imgRole.scaleX = 0.32;
            this.imgRole.scaleY = 0.32;

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
            var jsonData:any = RES.getRes("LoadMianUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("LoadMianUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.groupMiddle.drawDelay = false;
            this.imgQ1.texture = this.spriteSheet.getTexture("loading_4");
            this.imgQ1.drawDelay = false;
            this.imgQ2.texture = this.spriteSheet.getTexture("loading_3");
            this.imgQ2.drawDelay = false;
            this.imgLoading.texture = this.spriteSheet.getTexture("loading_2");
            this.imgLoading.drawDelay = false;
            this.imgRole.texture = this.spriteSheet.getTexture("role");
            this.imgRole.drawDelay = false;

        }
    }
}