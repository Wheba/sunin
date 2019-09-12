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
     * @date  :2019-04-24 19:51:45
     * @EasyGame.org Tools
     */ 
    export class PageHomeUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "PageHomeUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg","role"];//单材质资源名称
        public resGroup:Array<string> = ["page_PageHomeUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/PageHomeUI_loader_190424195145.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public groupContent:easy.Group = null;
        public groupTitle:easy.Group = null;
        public imgTitle:easy.Image = null;
        public imgTitleTxt1:easy.Image = null;
        public imgTitleTxt2:easy.Image = null;
        public groupRole:easy.Group = null;
        public imgRole:easy.Image = null;
        public imgRoleTxt:easy.Image = null;
        public btnPlay:easy.Button = null;
        public btnRule:easy.Button = null;
        public imgLogo1:easy.Image = null;
        public imgLogo2:easy.Image = null;
        public tempMusic:TempMusicTemplate = null;

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
            //groupTitle 
            this.groupTitle = new easy.Group(true);
            this.groupTitle.name = "groupTitle";
            this.groupContent.addChild(this.groupTitle);
            this.groupTitle.showBg = false;
            this.groupTitle.border = false;
            this.groupTitle.x = 120;
            this.groupTitle.y = 203;
            this.groupTitle.width = 510;
            this.groupTitle.height = 200;
            //imgTitle 
            this.imgTitle = new easy.Image(true);
            this.imgTitle.name = "imgTitle";
            this.groupTitle.addChild(this.imgTitle);
            this.imgTitle.width = 510;
            this.imgTitle.height = 161;
            //imgTitleTxt1 
            this.imgTitleTxt1 = new easy.Image(true);
            this.imgTitleTxt1.name = "imgTitleTxt1";
            this.groupTitle.addChild(this.imgTitleTxt1);
            this.imgTitleTxt1.x = 76.5;
            this.imgTitleTxt1.y = 162;
            this.imgTitleTxt1.width = 357;
            this.imgTitleTxt1.height = 29;
            this.imgTitleTxt1.visible = false;
            //imgTitleTxt2 
            this.imgTitleTxt2 = new easy.Image(true);
            this.imgTitleTxt2.name = "imgTitleTxt2";
            this.groupTitle.addChild(this.imgTitleTxt2);
            this.imgTitleTxt2.x = 56.5;
            this.imgTitleTxt2.y = 167;
            this.imgTitleTxt2.width = 357;
            this.imgTitleTxt2.height = 34;
            //groupRole 
            this.groupRole = new easy.Group(true);
            this.groupRole.name = "groupRole";
            this.groupContent.addChild(this.groupRole);
            this.groupRole.showBg = false;
            this.groupRole.border = false;
            this.groupRole.x = 78;
            this.groupRole.y = 551;
            this.groupRole.width = 644;
            this.groupRole.height = 398;
            //imgRole 
            this.imgRole = new easy.Image(true);
            this.imgRole.name = "imgRole";
            this.groupRole.addChild(this.imgRole);
            this.imgRole.width = 632;
            this.imgRole.height = 397;
            //imgRoleTxt 
            this.imgRoleTxt = new easy.Image(true);
            this.imgRoleTxt.name = "imgRoleTxt";
            this.groupRole.addChild(this.imgRoleTxt);
            this.imgRoleTxt.x = 421;
            this.imgRoleTxt.y = 231;
            this.imgRoleTxt.width = 223;
            this.imgRoleTxt.height = 78;
            //btnPlay 
            this.btnPlay = new easy.Button(true);
            this.btnPlay.name = "btnPlay";
            this.groupContent.addChild(this.btnPlay);
            this.btnPlay.width = 278;
            this.btnPlay.height = 84;
            this.btnPlay.x = 236;
            this.btnPlay.y = 1016;
            //btnRule 
            this.btnRule = new easy.Button(true);
            this.btnRule.name = "btnRule";
            this.groupContent.addChild(this.btnRule);
            this.btnRule.width = 171;
            this.btnRule.height = 52;
            this.btnRule.x = 289.5;
            this.btnRule.y = 433;
            //imgLogo1 
            this.imgLogo1 = new easy.Image(true);
            this.imgLogo1.name = "imgLogo1";
            this.addChild(this.imgLogo1);
            this.imgLogo1.x = 20;
            this.imgLogo1.y = 20;
            this.imgLogo1.width = 118;
            this.imgLogo1.height = 73;
            this.imgLogo1.leftEnabled = true;
            this.imgLogo1.left = 20;
            //imgLogo2 
            this.imgLogo2 = new easy.Image(true);
            this.imgLogo2.name = "imgLogo2";
            this.addChild(this.imgLogo2);
            this.imgLogo2.x = 536;
            this.imgLogo2.y = 20;
            this.imgLogo2.width = 194;
            this.imgLogo2.height = 66;
            this.imgLogo2.left = 20;
            this.imgLogo2.rightEnabled = true;
            this.imgLogo2.right = 20;
            //tempMusic 
            this.tempMusic = new suning.TempMusicTemplate();
            this.tempMusic.name = "tempMusic";
            this.addChild(this.tempMusic);
            if (this.tempMusic.ui["resFiles"]) this.resFiles = this.resFiles.concat(this.tempMusic.ui.resFiles);
            if (this.tempMusic.ui["resGroup"]) this.resGroup = this.resGroup.concat(this.tempMusic.ui.resGroup);
            this.tempMusic.x = 617;
            this.tempMusic.y = 1074;
            this.tempMusic.bottomEnabled = true;
            this.tempMusic.ui.bottomEnabled = true;
            this.tempMusic.bottom = 10;
            this.tempMusic.rightEnabled = true;
            this.tempMusic.ui.rightEnabled = true;
            this.tempMusic.right = 10;
            this.tempMusic.touchEnabled = true;
            this.tempMusic.ui.touchEnabled = true;

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
            var jsonData:any = RES.getRes("PageHomeUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("PageHomeUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.groupContent.drawDelay = false;
            this.groupTitle.drawDelay = false;
            if (this.spriteSheet) this.imgTitle.texture = this.spriteSheet.getTexture("1_2");
            this.imgTitle.drawDelay = false;
            if (this.spriteSheet) this.imgTitleTxt1.texture = this.spriteSheet.getTexture("1_3_1");
            this.imgTitleTxt1.drawDelay = false;
            if (this.spriteSheet) this.imgTitleTxt2.texture = this.spriteSheet.getTexture("1_3_2");
            this.imgTitleTxt2.drawDelay = false;
            this.groupRole.drawDelay = false;
            this.imgRole.texture = RES.getRes("role");
            this.imgRole.drawDelay = false;
            if (this.spriteSheet) this.imgRoleTxt.texture = this.spriteSheet.getTexture("1_1");
            this.imgRoleTxt.drawDelay = false;
            if (this.spriteSheet) this.btnPlay.texture = this.spriteSheet.getTexture("btn_Play");
            this.btnPlay.drawDelay = false;
            if (this.spriteSheet) this.btnRule.texture = this.spriteSheet.getTexture("btn_rule");
            this.btnRule.drawDelay = false;
            if (this.spriteSheet) this.imgLogo1.texture = this.spriteSheet.getTexture("logo1");
            this.imgLogo1.drawDelay = false;
            if (this.spriteSheet) this.imgLogo2.texture = this.spriteSheet.getTexture("logo2");
            this.imgLogo2.drawDelay = false;
            //模板tempMusic
            this.tempMusic.validateNow();

        }
    }
}