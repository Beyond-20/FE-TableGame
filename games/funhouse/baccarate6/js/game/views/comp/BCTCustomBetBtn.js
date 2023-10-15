import {LibContainer} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"
import {TGChipStack} from "../../../../../../../../slot_core/corelib/views/tgcomps/TGChipStack"

export class BCTCustomBetBtn extends LibContainer {
    constructor(config) {
        super(config);

        this.bg = this.elementsList["bg"];
        CoreLib.UIUtil.setClickable(this.bg, false);
        CoreLib.UIUtil.addInteraction(this.bg, this.onBGClicked.bind(this));
        this.ttext = this.elementsList["ttext"];
        if (this.ttext) {
            CoreLib.UIUtil.setPosition(this.ttext, (this.bg.width - this.ttext.width) / 2, (this.bg.height - this.ttext.height) / 2);
        }
        this.betStatusComp = this.elementsList["betStatusComp"];

        this.chipStack = new TGChipStack();
        this.addChild(this.chipStack);

        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.chipStack.scale.set(0.6);
        } else {
            this.chipStack.scale.set(0.54);
        }
        this.totalBG = this.elementsList["totalBG"];
        this.totalText = this.elementsList["totalText"];
        if (this.totalBG) {
            this.totalBG.visible = false;
        }
        if (this.totalText) {
            this.totalText.visible = false;

        }


        if (this.totalBG) {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.configData.cardPositions = this.configData.mobileCardPositionsP;
                    this.configData.cardScale = this.configData.mobileCardScale;
                } else {
                    this.configData.cardPositions = this.configData.mobileCardPositionsL;
                    this.configData.cardScale = this.configData.mobileCardScale;
                }

            }
        }
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.configData.chipPosX = this.configData.chipPosPX;
                this.configData.chipPosY = this.configData.chipPosPY;
            } else {
                this.configData.chipPosX = this.configData.chipPosLX;
                this.configData.chipPosY = this.configData.chipPosLY;
            }

        }
        CoreLib.UIUtil.setPosition(this.chipStack, CoreLib.Util.getDefaultValue(this.configData.chipPosX, 0), CoreLib.Util.getDefaultValue(this.configData.chipPosY, 0))

    }

    showCard1 (val, total) {
        this.cleanUpCards();
        this.totalBG.visible = true;
        this.totalText.visible = true;
        this.totalText.text = total;
        this.card1 = CoreLib.UIUtil.getSprite(val);
        this.card1.scale.set(this.configData.cardScale);
        this.card1.x = this.configData.cardPositions[0].x;
        this.card1.y = this.configData.cardPositions[0].y;
        this.addChild(this.card1);
    }
    showCard2 (val, total) {
        this.totalText.text = total;
        this.card2 = CoreLib.UIUtil.getSprite(val);
        this.card2.scale.set(this.configData.cardScale);
        this.card2.x = this.configData.cardPositions[1].x;
        this.card2.y = this.configData.cardPositions[1].y;
        this.addChild(this.card2);
    }
    showCard3 (val, total) {
        this.totalText.text = total;
        this.card3 = CoreLib.UIUtil.getSprite(val);
        this.addChild(this.card3);
        this.card3.scale.set(this.configData.cardScale);
        this.card3.rotation = CoreLib.Util.getRadians(90);
        this.card3.x = this.configData.cardPositions[2].x;
        this.card3.y = this.configData.cardPositions[2].y;

    }
    updateBetData (arr, perc) {
        this.betStatusComp.updateBetData(arr, perc);
    }
    clearBetData () {
        this.betStatusComp.clearBetData();
    }

    cleanUpCards () {
        if (this.card1) {
            this.card1.destroy();
            this.card1 = null;
        }
        if (this.card2) {
            this.card2.destroy();
            this.card2 = null;
        }
        if (this.card3) {
            this.card3.destroy();
            this.card3 = null;
        }
        if (this.totalBG) {
            this.totalBG.visible = false;
        }
        if (this.totalText) {
            this.totalText.visible = false;
        }
    }

    setState (flag) {
        CoreLib.UIUtil.setClickable(this.bg, flag);
    }

    showWinning () {
        let flt = new PIXI.filters.GlowFilter({ distance: 12, outerStrength: 1.6, innerStrength : 0});
        this.bg.filters = [flt];
        CoreLib.AnimationManager.animateTween(this.bg, 0.5, {alpha : 0.5, repeat : -1, yoyo : true});
    }

    hideWinning () {
        this.bg.filters = null;
        CoreLib.AnimationManager.killTweensOf(this.bg);
    }

    removeGlow () {
        this.bg.filters = null;
    }

    updateBet(val) {
        this.chipStack.showStack(val);
        CoreLib.EventHandler.dispatchEvent("PLAY_CHIP_PLACEMENT_SOUND");

    }


    onBGClicked () {
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TG_BUTTON_CLICKED);
        CoreLib.EventHandler.dispatchEvent("BCT_PLACE_BET", this.name);
    }
    onResizeEndEvent () {
        super.onResizeEndEvent()
        if (this.ttext) {
            CoreLib.UIUtil.setPosition(this.ttext, (this.bg.width - this.ttext.width) / 2, (this.bg.height - this.ttext.height) / 2);
        }
    }

    resizeViewComponents (layoutData = null) {
        super.resizeViewComponents(layoutData);
        if (this.ttext) {
            CoreLib.UIUtil.setPosition(this.ttext, (this.bg.width - this.ttext.width) / 2, (this.bg.height - this.ttext.height) / 2);
        }
        this.positionForDevice();

        if (this.totalBG) {
            if (CoreLib.Model.DeviceConfig.isDevice) {
                if (CoreLib.Model.DeviceConfig.isPortrait) {
                    this.configData.cardPositions = this.configData.mobileCardPositionsP;
                    this.configData.cardScale = this.configData.mobileCardScale;
                } else {
                    this.configData.cardPositions = this.configData.mobileCardPositionsL;
                    this.configData.cardScale = this.configData.mobileCardScale;
                }

            }
        }
        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.configData.chipPosX = this.configData.chipPosPX;
                this.configData.chipPosY = this.configData.chipPosPY;
            } else {
                this.configData.chipPosX = this.configData.chipPosLX;
                this.configData.chipPosY = this.configData.chipPosLY;
            }

        }
        CoreLib.UIUtil.setPosition(this.chipStack, CoreLib.Util.getDefaultValue(this.configData.chipPosX, 0), CoreLib.Util.getDefaultValue(this.configData.chipPosY, 0))
        if (this.card1) {
            this.card1.x = this.configData.cardPositions[0].x;
            this.card1.y = this.configData.cardPositions[0].y;
        }
        if (this.card2) {
            this.card2.x = this.configData.cardPositions[1].x;
            this.card2.y = this.configData.cardPositions[1].y;
        }
        if (this.card3) {
            this.card3.x = this.configData.cardPositions[2].x;
            this.card3.y = this.configData.cardPositions[2].y;
        }
    }


};
