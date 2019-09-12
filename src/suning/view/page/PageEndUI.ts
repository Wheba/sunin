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
     * @date  :2019-04-26 11:50:46
     * @EasyGame.org Tools
     */ 
    export class PageEndUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "PageEndUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg"];//单材质资源名称
        public resGroup:Array<string> = ["page_PageEndUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/PageEndUI_loader_190426115046.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public groupContent:easy.Group = null;
        public groupFrame:easy.Group = null;
        public imgFrame:easy.Image = null;
        public labelImgScore:easy.LabelImage = null;
        public imgRank:easy.Image = null;
        public labelImgRank:easy.LabelImage = null;
        public imgRankTishi:easy.Image = null;
        public groupBtn:easy.Group = null;
        public btnRank:easy.Button = null;
        public btnAgain:easy.Button = null;
        public btnShare:easy.Button = null;
        public groupCoupon:easy.Group = null;
        public imgCoupon:easy.Image = null;
        public btnGetCoupon:easy.Button = null;
        public btnSquare:easy.Button = null;
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
            //groupFrame 
            this.groupFrame = new easy.Group(true);
            this.groupFrame.name = "groupFrame";
            this.groupContent.addChild(this.groupFrame);
            this.groupFrame.showBg = false;
            this.groupFrame.border = false;
            this.groupFrame.x = 139.5;
            this.groupFrame.y = 105;
            this.groupFrame.width = 471;
            this.groupFrame.height = 305;
            //imgFrame 
            this.imgFrame = new easy.Image(true);
            this.imgFrame.name = "imgFrame";
            this.groupFrame.addChild(this.imgFrame);
            this.imgFrame.width = 471;
            this.imgFrame.height = 305;
            //labelImgScore 
            this.labelImgScore = new easy.LabelImage(true);
            this.labelImgScore.name = "labelImgScore";
            this.groupFrame.addChild(this.labelImgScore);
            this.labelImgScore.rollingZoomAlign = "center";
            this.labelImgScore.width = 330;
            this.labelImgScore.height = 100;
            this.labelImgScore.x = 70.5;
            this.labelImgScore.y = 112;
            this.labelImgScore.showBg = false;
            this.labelImgScore.border = false;
            this.labelImgScore.hAlign = "center";
            //imgRank 
            this.imgRank = new easy.Image(true);
            this.imgRank.name = "imgRank";
            this.groupFrame.addChild(this.imgRank);
            this.imgRank.x = 53.5;
            this.imgRank.y = 239;
            this.imgRank.width = 364;
            this.imgRank.height = 40;
            //labelImgRank 
            this.labelImgRank = new easy.LabelImage(true);
            this.labelImgRank.name = "labelImgRank";
            this.groupFrame.addChild(this.labelImgRank);
            this.labelImgRank.text = "1";
            this.labelImgRank.rollingZoomAlign = "center";
            this.labelImgRank.width = 130;
            this.labelImgRank.height = 50;
            this.labelImgRank.x = 249.5;
            this.labelImgRank.y = 232;
            this.labelImgRank.showBg = false;
            this.labelImgRank.border = false;
            this.labelImgRank.hAlign = "center";
            //imgRankTishi 
            this.imgRankTishi = new easy.Image(true);
            this.imgRankTishi.name = "imgRankTishi";
            this.groupContent.addChild(this.imgRankTishi);
            this.imgRankTishi.x = 174.5;
            this.imgRankTishi.y = 438;
            this.imgRankTishi.width = 401;
            this.imgRankTishi.height = 84;
            //groupBtn 
            this.groupBtn = new easy.Group(true);
            this.groupBtn.name = "groupBtn";
            this.groupContent.addChild(this.groupBtn);
            this.groupBtn.showBg = false;
            this.groupBtn.border = false;
            this.groupBtn.x = 325;
            this.groupBtn.y = 1106;
            this.groupBtn.visible = false;
            //btnRank 
            this.btnRank = new easy.Button(true);
            this.btnRank.name = "btnRank";
            this.groupBtn.addChild(this.btnRank);
            this.btnRank.width = 272;
            this.btnRank.height = 82;
            this.btnRank.x = -86;
            this.btnRank.y = -118;
            //btnAgain 
            this.btnAgain = new easy.Button(true);
            this.btnAgain.name = "btnAgain";
            this.groupBtn.addChild(this.btnAgain);
            this.btnAgain.width = 272;
            this.btnAgain.height = 82;
            this.btnAgain.x = -86;
            this.btnAgain.y = -434;
            //btnShare 
            this.btnShare = new easy.Button(true);
            this.btnShare.name = "btnShare";
            this.groupBtn.addChild(this.btnShare);
            this.btnShare.width = 271;
            this.btnShare.height = 82;
            this.btnShare.x = -85.5;
            this.btnShare.y = -279;
            //groupCoupon 
            this.groupCoupon = new easy.Group(true);
            this.groupCoupon.name = "groupCoupon";
            this.groupContent.addChild(this.groupCoupon);
            this.groupCoupon.showBg = false;
            this.groupCoupon.border = false;
            this.groupCoupon.x = 325;
            this.groupCoupon.y = 1106;
            //imgCoupon 
            this.imgCoupon = new easy.Image(true);
            this.imgCoupon.name = "imgCoupon";
            this.groupCoupon.addChild(this.imgCoupon);
            this.imgCoupon.x = -185.5;
            this.imgCoupon.y = -485.5;
            this.imgCoupon.width = 471;
            this.imgCoupon.height = 221;
            //btnGetCoupon 
            this.btnGetCoupon = new easy.Button(true);
            this.btnGetCoupon.name = "btnGetCoupon";
            this.groupCoupon.addChild(this.btnGetCoupon);
            this.btnGetCoupon.width = 350;
            this.btnGetCoupon.height = 150;
            this.btnGetCoupon.x = -125;
            this.btnGetCoupon.y = -79;
            //btnSquare 
            this.btnSquare = new easy.Button(true);
            this.btnSquare.name = "btnSquare";
            this.groupCoupon.addChild(this.btnSquare);
            this.btnSquare.label = "点击选择您所属的广场";
            this.btnSquare.labelColor = 0xffffff;
            this.btnSquare.fontSize = 35;
            this.btnSquare.width = 471;
            this.btnSquare.height = 91;
            this.btnSquare.x = -185.5;
            this.btnSquare.y = -200;
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
            var jsonData:any = RES.getRes("PageEndUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("PageEndUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.groupContent.drawDelay = false;
            this.groupFrame.drawDelay = false;
            if (this.spriteSheet) this.imgFrame.texture = this.spriteSheet.getTexture("end_Frame");
            this.imgFrame.drawDelay = false;
            if (this.spriteSheet) this.labelImgScore.texture = this.spriteSheet.getTexture("labelImg1");
            this.labelImgScore.drawDelay = false;
            if (this.spriteSheet) this.imgRank.texture = this.spriteSheet.getTexture("end_Rank");
            this.imgRank.drawDelay = false;
            if (this.spriteSheet) this.labelImgRank.texture = this.spriteSheet.getTexture("labelImg2");
            this.labelImgRank.drawDelay = false;
            if (this.spriteSheet) this.imgRankTishi.texture = this.spriteSheet.getTexture("end_Txt");
            this.imgRankTishi.drawDelay = false;
            this.groupBtn.drawDelay = false;
            if (this.spriteSheet) this.btnRank.texture = this.spriteSheet.getTexture("btn_Rank");
            this.btnRank.drawDelay = false;
            if (this.spriteSheet) this.btnAgain.texture = this.spriteSheet.getTexture("btn_Again");
            this.btnAgain.drawDelay = false;
            if (this.spriteSheet) this.btnShare.texture = this.spriteSheet.getTexture("btn_Share2");
            this.btnShare.drawDelay = false;
            this.groupCoupon.drawDelay = false;
            if (this.spriteSheet) this.imgCoupon.texture = this.spriteSheet.getTexture("Coupon0");
            this.imgCoupon.drawDelay = false;
            if (this.spriteSheet) this.btnGetCoupon.texture = this.spriteSheet.getTexture("btn_GetCoupon");
            this.btnGetCoupon.drawDelay = false;
            if (this.spriteSheet) this.btnSquare.texture = this.spriteSheet.getTexture("btn_Square");
            this.btnSquare.drawDelay = false;
            //模板tempMusic
            this.tempMusic.validateNow();

        }
    }
}