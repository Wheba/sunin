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
     * @date  :2019-04-25 23:33:24
     * @EasyGame.org Tools
     */ 
    export class TempRankUI  extends easy.Group{
        public resourceRoot:string = "";
        public resSpriteSheet:string = "";//合并材质资源名称
        public resTexture:Array<string> = [];//单材质资源名称
        public resGroup:Array<string> = [];//配置文件的Group
        public resFiles:Array<string> = [];//需要下载的资源group
        public spriteSheet:egret.SpriteSheet = null;//ui对应的材质集,已经分割好,方便外部读取方便

        public groupMove:easy.Group = null;
        public labelNo:easy.Label = null;
        public labelScore:easy.Label = null;
        public labelMember:easy.Label = null;

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
            this.width = 400;
            this.height = 45;
            //groupMove 
            this.groupMove = new easy.Group(true);
            this.groupMove.name = "groupMove";
            this.addChild(this.groupMove);
            this.groupMove.border = false;
            this.groupMove.width = 400;
            this.groupMove.height = 45;
            this.groupMove.topEnabled = true;
            this.groupMove.bottomEnabled = true;
            this.groupMove.leftEnabled = true;
            this.groupMove.rightEnabled = true;
            this.groupMove.alpha = 0;
            //labelNo 
            this.labelNo = new easy.Label(true);
            this.labelNo.name = "labelNo";
            this.addChild(this.labelNo);
            this.labelNo.text = "04";
            this.labelNo.fontSize = 30;
            this.labelNo.color = 0xffffff;
            this.labelNo.hAlign = "center";
            this.labelNo.autoSize = false;
            this.labelNo.width = 80;
            this.labelNo.height = 45;
            this.labelNo.showBg = false;
            this.labelNo.border = false;
            //labelScore 
            this.labelScore = new easy.Label(true);
            this.labelScore.name = "labelScore";
            this.addChild(this.labelScore);
            this.labelScore.text = "800";
            this.labelScore.fontSize = 30;
            this.labelScore.color = 0xffffff;
            this.labelScore.hAlign = "center";
            this.labelScore.autoSize = false;
            this.labelScore.width = 120;
            this.labelScore.height = 45;
            this.labelScore.x = 280;
            this.labelScore.topEnabled = true;
            this.labelScore.bottomEnabled = true;
            this.labelScore.rightEnabled = true;
            this.labelScore.showBg = false;
            this.labelScore.border = false;
            //labelMember 
            this.labelMember = new easy.Label(true);
            this.labelMember.name = "labelMember";
            this.addChild(this.labelMember);
            this.labelMember.text = "70300056865";
            this.labelMember.fontSize = 30;
            this.labelMember.color = 0xffffff;
            this.labelMember.hAlign = "center";
            this.labelMember.autoSize = false;
            this.labelMember.width = 200;
            this.labelMember.height = 45;
            this.labelMember.x = 80;
            this.labelMember.leftEnabled = true;
            this.labelMember.left = 80;
            this.labelMember.rightEnabled = true;
            this.labelMember.right = 120;
            this.labelMember.showBg = false;
            this.labelMember.border = false;

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
            this.groupMove.drawDelay = false;
            this.labelNo.drawDelay = false;
            this.labelScore.drawDelay = false;
            this.labelMember.drawDelay = false;

        }
    }
}