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
     * @date  :2019-04-26 15:50:31
     * @EasyGame.org Tools
     */ 
    export class PageGameUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "PageGameUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg","gameBg","role"];//单材质资源名称
        public resGroup:Array<string> = ["page_PageGameUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/PageGameUI_loader_190426155031.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public groupContent:easy.Group = null;
        public imgContentBg:easy.Image = null;
        public imgEnd:easy.Image = null;
        public groupRole:easy.Group = null;
        public groupOb1:easy.Group = null;
        public imgRole:easy.Image = null;
        public imgShield:easy.Image = null;
        public groupMove:easy.Group = null;
        public tempTime:TempTimeTemplate = null;
        public tempScore:TempScoreTemplate = null;
        public tempTishi:TempTiShiBallTemplate = null;
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
            this.groupContent.x = 84;
            this.groupContent.width = 582;
            this.groupContent.height = 1206;
            this.groupContent.topEnabled = true;
            this.groupContent.bottomEnabled = true;
            this.groupContent.horizontalEnabled = true;
            //imgContentBg 
            this.imgContentBg = new easy.Image(true);
            this.imgContentBg.name = "imgContentBg";
            this.groupContent.addChild(this.imgContentBg);
            this.imgContentBg.y = -150.5;
            this.imgContentBg.width = 582;
            this.imgContentBg.height = 1507;
            this.imgContentBg.verticalEnabled = true;
            //imgEnd 
            this.imgEnd = new easy.Image(true);
            this.imgEnd.name = "imgEnd";
            this.groupContent.addChild(this.imgEnd);
            this.imgEnd.x = 85.5;
            this.imgEnd.y = 300.5;
            this.imgEnd.width = 411;
            this.imgEnd.height = 605;
            //groupRole 
            this.groupRole = new easy.Group(true);
            this.groupRole.name = "groupRole";
            this.groupContent.addChild(this.groupRole);
            this.groupRole.showBg = false;
            this.groupRole.border = false;
            this.groupRole.y = 290;
            this.groupRole.width = 170;
            this.groupRole.height = 270;
            //groupOb1 
            this.groupOb1 = new easy.Group(true);
            this.groupOb1.name = "groupOb1";
            this.groupRole.addChild(this.groupOb1);
            this.groupOb1.border = false;
            this.groupOb1.x = 25;
            this.groupOb1.y = 65;
            this.groupOb1.width = 125;
            this.groupOb1.height = 105;
            this.groupOb1.visible = false;
            //imgRole 
            this.imgRole = new easy.Image(true);
            this.imgRole.name = "imgRole";
            this.groupRole.addChild(this.imgRole);
            this.imgRole.width = 170;
            this.imgRole.height = 270;
            //imgShield 
            this.imgShield = new easy.Image(true);
            this.imgShield.name = "imgShield";
            this.groupRole.addChild(this.imgShield);
            this.imgShield.x = -35.5;
            this.imgShield.y = 14.5;
            this.imgShield.width = 213;
            this.imgShield.height = 213;
            //groupMove 
            this.groupMove = new easy.Group(true);
            this.groupMove.name = "groupMove";
            this.groupContent.addChild(this.groupMove);
            this.groupMove.showBg = false;
            this.groupMove.border = false;
            this.groupMove.width = 582;
            this.groupMove.height = 1206;
            this.groupMove.topEnabled = true;
            this.groupMove.bottomEnabled = true;
            this.groupMove.leftEnabled = true;
            this.groupMove.rightEnabled = true;
            //tempTime 
            this.tempTime = new suning.TempTimeTemplate();
            this.tempTime.name = "tempTime";
            this.groupContent.addChild(this.tempTime);
            if (this.tempTime.ui["resFiles"]) this.resFiles = this.resFiles.concat(this.tempTime.ui.resFiles);
            if (this.tempTime.ui["resGroup"]) this.resGroup = this.resGroup.concat(this.tempTime.ui.resGroup);
            this.tempTime.x = -46;
            this.tempTime.y = 13;
            //tempScore 
            this.tempScore = new suning.TempScoreTemplate();
            this.tempScore.name = "tempScore";
            this.groupContent.addChild(this.tempScore);
            if (this.tempScore.ui["resFiles"]) this.resFiles = this.resFiles.concat(this.tempScore.ui.resFiles);
            if (this.tempScore.ui["resGroup"]) this.resGroup = this.resGroup.concat(this.tempScore.ui.resGroup);
            this.tempScore.x = 345;
            this.tempScore.y = 13;
            //tempTishi 
            this.tempTishi = new suning.TempTiShiBallTemplate();
            this.tempTishi.name = "tempTishi";
            this.groupContent.addChild(this.tempTishi);
            if (this.tempTishi.ui["resFiles"]) this.resFiles = this.resFiles.concat(this.tempTishi.ui.resFiles);
            if (this.tempTishi.ui["resGroup"]) this.resGroup = this.resGroup.concat(this.tempTishi.ui.resGroup);
            this.tempTishi.x = 183.5;
            this.tempTishi.y = 495.5;
            this.tempTishi.horizontalEnabled = true;
            this.tempTishi.verticalEnabled = true;
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
            var jsonData:any = RES.getRes("PageGameUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("PageGameUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.groupContent.drawDelay = false;
            this.imgContentBg.texture = RES.getRes("gameBg");
            this.imgContentBg.drawDelay = false;
            if (this.spriteSheet) this.imgEnd.texture = this.spriteSheet.getTexture("game_Stone0");
            this.imgEnd.drawDelay = false;
            this.groupRole.drawDelay = false;
            this.groupOb1.drawDelay = false;
            if (this.spriteSheet) this.imgRole.texture = this.spriteSheet.getTexture("role2");
            this.imgRole.drawDelay = false;
            this.imgShield.drawDelay = false;
            this.groupMove.drawDelay = false;
            //模板tempTime
            this.tempTime.validateNow();
            //模板tempScore
            this.tempScore.validateNow();
            //模板tempTishi
            this.tempTishi.validateNow();
            //模板tempMusic
            this.tempMusic.validateNow();

        }
    }
}