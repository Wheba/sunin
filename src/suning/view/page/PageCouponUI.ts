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
     * @date  :2019-04-24 19:51:44
     * @EasyGame.org Tools
     */ 
    export class PageCouponUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "PageCouponUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg","role"];//单材质资源名称
        public resGroup:Array<string> = ["page_PageCouponUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/PageCouponUI_loader_190424195144.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public groupContent:easy.Group = null;
        public imgCoupon:easy.Image = null;
        public labelTime:easy.Label = null;
        public imgTxt:easy.Image = null;
        public groupRole:easy.Group = null;
        public imgRole:easy.Image = null;
        public imgRoleTxt:easy.Image = null;
        public btnAgain:easy.Button = null;
        public btnCard:easy.Button = null;
        public btnShare:easy.Button = null;
        public btnRank:easy.Button = null;
        public btnDownLoad:easy.Button = null;
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
            //imgCoupon 
            this.imgCoupon = new easy.Image(true);
            this.imgCoupon.name = "imgCoupon";
            this.groupContent.addChild(this.imgCoupon);
            this.imgCoupon.x = 139.5;
            this.imgCoupon.y = 431.5;
            this.imgCoupon.width = 471;
            this.imgCoupon.height = 221;
            //labelTime 
            this.labelTime = new easy.Label(true);
            this.labelTime.name = "labelTime";
            this.groupContent.addChild(this.labelTime);
            this.labelTime.text = "使用期限  4月18日 - 5月31日";
            this.labelTime.fontSize = 23;
            this.labelTime.color = 0xffffff;
            this.labelTime.hAlign = "center";
            this.labelTime.autoSize = false;
            this.labelTime.width = 470;
            this.labelTime.height = 50;
            this.labelTime.x = 140;
            this.labelTime.y = 590;
            this.labelTime.showBg = false;
            this.labelTime.border = false;
            //imgTxt 
            this.imgTxt = new easy.Image(true);
            this.imgTxt.name = "imgTxt";
            this.groupContent.addChild(this.imgTxt);
            this.imgTxt.x = 267.5;
            this.imgTxt.y = 354;
            this.imgTxt.width = 201;
            this.imgTxt.height = 40;
            //groupRole 
            this.groupRole = new easy.Group(true);
            this.groupRole.name = "groupRole";
            this.groupContent.addChild(this.groupRole);
            this.groupRole.showBg = false;
            this.groupRole.border = false;
            this.groupRole.x = 258;
            this.groupRole.y = 24;
            this.groupRole.width = 644;
            this.groupRole.height = 398;
            this.groupRole.scaleX = 0.75;
            this.groupRole.scaleY = 0.75;
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
            //btnAgain 
            this.btnAgain = new easy.Button(true);
            this.btnAgain.name = "btnAgain";
            this.groupContent.addChild(this.btnAgain);
            this.btnAgain.width = 272;
            this.btnAgain.height = 82;
            this.btnAgain.x = 63;
            this.btnAgain.y = 795;
            //btnCard 
            this.btnCard = new easy.Button(true);
            this.btnCard.name = "btnCard";
            this.groupContent.addChild(this.btnCard);
            this.btnCard.width = 272;
            this.btnCard.height = 82;
            this.btnCard.x = 414;
            this.btnCard.y = 795;
            //btnShare 
            this.btnShare = new easy.Button(true);
            this.btnShare.name = "btnShare";
            this.groupContent.addChild(this.btnShare);
            this.btnShare.width = 271;
            this.btnShare.height = 82;
            this.btnShare.x = 63;
            this.btnShare.y = 917;
            //btnRank 
            this.btnRank = new easy.Button(true);
            this.btnRank.name = "btnRank";
            this.groupContent.addChild(this.btnRank);
            this.btnRank.width = 272;
            this.btnRank.height = 82;
            this.btnRank.x = 414;
            this.btnRank.y = 917;
            //btnDownLoad 
            this.btnDownLoad = new easy.Button(true);
            this.btnDownLoad.name = "btnDownLoad";
            this.groupContent.addChild(this.btnDownLoad);
            this.btnDownLoad.width = 271;
            this.btnDownLoad.height = 82;
            this.btnDownLoad.x = 239.5;
            this.btnDownLoad.y = 1034;
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
            var jsonData:any = RES.getRes("PageCouponUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("PageCouponUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.groupContent.drawDelay = false;
            this.imgCoupon.texture = easy.ResManager.getTexture("Coupon1");
            this.imgCoupon.drawDelay = false;
            this.labelTime.drawDelay = false;
            if (this.spriteSheet) this.imgTxt.texture = this.spriteSheet.getTexture("5_1");
            this.imgTxt.drawDelay = false;
            this.groupRole.drawDelay = false;
            this.imgRole.texture = RES.getRes("role");
            this.imgRole.drawDelay = false;
            if (this.spriteSheet) this.imgRoleTxt.texture = this.spriteSheet.getTexture("1_1");
            this.imgRoleTxt.drawDelay = false;
            if (this.spriteSheet) this.btnAgain.texture = this.spriteSheet.getTexture("btn_Again");
            this.btnAgain.drawDelay = false;
            if (this.spriteSheet) this.btnCard.texture = this.spriteSheet.getTexture("btn_Card");
            this.btnCard.drawDelay = false;
            if (this.spriteSheet) this.btnShare.texture = this.spriteSheet.getTexture("btn_Share2");
            this.btnShare.drawDelay = false;
            if (this.spriteSheet) this.btnRank.texture = this.spriteSheet.getTexture("btn_Rank");
            this.btnRank.drawDelay = false;
            if (this.spriteSheet) this.btnDownLoad.texture = this.spriteSheet.getTexture("btn_Download");
            this.btnDownLoad.drawDelay = false;
            //模板tempMusic
            this.tempMusic.validateNow();

        }
    }
}