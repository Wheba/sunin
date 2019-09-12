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
     * @date  :2019-04-24 19:51:46
     * @EasyGame.org Tools
     */ 
    export class TempPlazaUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "TempPlazaUI";//合并材质资源名称
        public resTexture:Array<string> = [];//单材质资源名称
        public resGroup:Array<string> = ["page_TempPlazaUI"];//配置文件的Group
        public resFiles:Array<string> = ["page/TempPlazaUI_loader_190424195146.json"];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public imgPlaza:easy.Image = null;
        public labelPlazaName:easy.Label = null;

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
            this.width = 362;
            this.height = 70;
            //imgPlaza 
            this.imgPlaza = new easy.Image(true);
            this.imgPlaza.name = "imgPlaza";
            this.addChild(this.imgPlaza);
            this.imgPlaza.width = 362;
            this.imgPlaza.height = 70;
            //labelPlazaName 
            this.labelPlazaName = new easy.Label(true);
            this.labelPlazaName.name = "labelPlazaName";
            this.addChild(this.labelPlazaName);
            this.labelPlazaName.text = "连云港苏宁广场";
            this.labelPlazaName.fontSize = 35;
            this.labelPlazaName.color = 0xffffff;
            this.labelPlazaName.hAlign = "center";
            this.labelPlazaName.autoSize = false;
            this.labelPlazaName.width = 362;
            this.labelPlazaName.height = 70;
            this.labelPlazaName.topEnabled = true;
            this.labelPlazaName.bottomEnabled = true;
            this.labelPlazaName.leftEnabled = true;
            this.labelPlazaName.rightEnabled = true;
            this.labelPlazaName.showBg = false;
            this.labelPlazaName.border = false;

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
            var jsonData:any = RES.getRes("TempPlazaUI_json");
            if (jsonData != null) {
                this.spriteSheet = new egret.SpriteSheet(RES.getRes("TempPlazaUI_img"));
                for (var key in jsonData.texture){
                    this.spriteSheet.createTexture(key, jsonData.texture[key].x, jsonData.texture[key].y, jsonData.texture[key].w, jsonData.texture[key].h);
                }
            }
            if (this.spriteSheet) this.imgPlaza.texture = this.spriteSheet.getTexture("6_3");
            this.imgPlaza.drawDelay = false;
            this.labelPlazaName.drawDelay = false;

        }
    }
}