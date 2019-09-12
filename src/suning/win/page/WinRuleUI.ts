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
     * @date  :2019-04-24 19:51:49
     * @EasyGame.org Tools
     */ 
    export class WinRuleUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "WinRuleUI";//合并材质资源名称
        public resTexture:Array<string> = ["loadingBg","frame1","btn_Back"];//单材质资源名称
        public resGroup:Array<string> = ["page_WinRuleUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/WinRuleUI_loader_190424195149.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgBg:easy.Image = null;
        public imgFrame:easy.Image = null;
        public imgTitle:easy.Image = null;
        public imgRule1:easy.Image = null;
        public imgRule2:easy.Image = null;
        public imgRule3:easy.Image = null;
        public imgRule4:easy.Image = null;
        public imgRule5:easy.Image = null;
        public imgRule6:easy.Image = null;
        public btnBack:easy.Button = null;

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
            //imgTitle 
            this.imgTitle = new easy.Image(true);
            this.imgTitle.name = "imgTitle";
            this.addChild(this.imgTitle);
            this.imgTitle.x = 135;
            this.imgTitle.y = 91;
            this.imgTitle.width = 201;
            this.imgTitle.height = 40;
            //imgRule1 
            this.imgRule1 = new easy.Image(true);
            this.imgRule1.name = "imgRule1";
            this.addChild(this.imgRule1);
            this.imgRule1.x = 40;
            this.imgRule1.y = 212;
            this.imgRule1.width = 384;
            this.imgRule1.height = 70;
            //imgRule2 
            this.imgRule2 = new easy.Image(true);
            this.imgRule2.name = "imgRule2";
            this.addChild(this.imgRule2);
            this.imgRule2.x = 40;
            this.imgRule2.y = 318;
            this.imgRule2.width = 385;
            this.imgRule2.height = 71;
            //imgRule3 
            this.imgRule3 = new easy.Image(true);
            this.imgRule3.name = "imgRule3";
            this.addChild(this.imgRule3);
            this.imgRule3.x = 40;
            this.imgRule3.y = 424;
            this.imgRule3.width = 384;
            this.imgRule3.height = 70;
            //imgRule4 
            this.imgRule4 = new easy.Image(true);
            this.imgRule4.name = "imgRule4";
            this.addChild(this.imgRule4);
            this.imgRule4.x = 40;
            this.imgRule4.y = 530;
            this.imgRule4.width = 384;
            this.imgRule4.height = 70;
            //imgRule5 
            this.imgRule5 = new easy.Image(true);
            this.imgRule5.name = "imgRule5";
            this.addChild(this.imgRule5);
            this.imgRule5.x = 40;
            this.imgRule5.y = 635;
            this.imgRule5.width = 384;
            this.imgRule5.height = 45;
            //imgRule6 
            this.imgRule6 = new easy.Image(true);
            this.imgRule6.name = "imgRule6";
            this.addChild(this.imgRule6);
            this.imgRule6.x = 40;
            this.imgRule6.y = 716;
            this.imgRule6.width = 385;
            this.imgRule6.height = 45;
            //btnBack 
            this.btnBack = new easy.Button(true);
            this.btnBack.name = "btnBack";
            this.addChild(this.btnBack);
            this.btnBack.width = 223;
            this.btnBack.height = 67;
            this.btnBack.x = 124;
            this.btnBack.y = 919;

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
            var jsonData:any = RES.getRes("WinRuleUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("WinRuleUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            this.imgBg.texture = RES.getRes("loadingBg");
            this.imgBg.drawDelay = false;
            this.imgFrame.texture = RES.getRes("frame1");
            this.imgFrame.drawDelay = false;
            if (this.spriteSheet) this.imgTitle.texture = this.spriteSheet.getTexture("rule_Title");
            this.imgTitle.drawDelay = false;
            if (this.spriteSheet) this.imgRule1.texture = this.spriteSheet.getTexture("rule_1");
            this.imgRule1.drawDelay = false;
            if (this.spriteSheet) this.imgRule2.texture = this.spriteSheet.getTexture("rule_2");
            this.imgRule2.drawDelay = false;
            if (this.spriteSheet) this.imgRule3.texture = this.spriteSheet.getTexture("rule_3");
            this.imgRule3.drawDelay = false;
            if (this.spriteSheet) this.imgRule4.texture = this.spriteSheet.getTexture("rule_4");
            this.imgRule4.drawDelay = false;
            if (this.spriteSheet) this.imgRule5.texture = this.spriteSheet.getTexture("rule_5");
            this.imgRule5.drawDelay = false;
            if (this.spriteSheet) this.imgRule6.texture = this.spriteSheet.getTexture("rule_6");
            this.imgRule6.drawDelay = false;
            this.btnBack.texture = RES.getRes("btn_Back");
            this.btnBack.drawDelay = false;

        }
    }
}