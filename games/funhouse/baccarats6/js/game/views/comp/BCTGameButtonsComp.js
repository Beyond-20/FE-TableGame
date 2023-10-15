import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTGameButtonsComp extends LibView {
    constructor(config) {
        super(config);
        this.guideRect = this.elementsList["guideRect"];
        if (this.guideRect) {
            this.guideRect.alpha = 0;
        }
        this.roadmapBtn = this.elementsList["roadmapBtn"];
        this.roadmapBtn.addInteraction(this.onRoadmapClicked.bind(this));
        this.roadmapBtn.setEnabled(true);

        this.infoBtn = this.elementsList["infoBtn"];
        this.infoBtn.addInteraction(this.onInfoClicked.bind(this));
        this.infoBtn.setEnabled(true);

        this.undoBtn = this.elementsList["undoBtn"];
        this.undoBtn.addInteraction(this.onUndoClicked.bind(this));

        this.rebetBtn = this.elementsList["rebetBtn"];
        this.rebetBtn.addInteraction(this.onRebetClicked.bind(this));

        this.settingsBtn = this.elementsList["settingsBtn"];
        this.settingsBtn.addInteraction(this.onSettingsClicked.bind(this));
        this.settingsBtn.setEnabled(true);

        CoreLib.EventHandler.addEventListener("REBET_BUTTON_STATE", this.setRebetState.bind(this));
        CoreLib.EventHandler.addEventListener("UNDO_BUTTON_STATE", this.setUndoState.bind(this));
    }

    onSettingsClicked () {
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DESKTOP_SETTINGS_CLICKED);
        } else {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_MOBILE_SETTINGS_DIALOGUE, true);
        }
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TG_BUTTON_CLICKED);

    }

    setState (flag) {

        this.rebetBtn.setEnabled(flag);
        this.undoBtn.setEnabled(flag);
    }
    setRebetState (flag) {
        this.rebetBtn.setEnabled(flag);
    }
    setUndoState(flag) {
        this.undoBtn.setEnabled(flag);
    }
    onRoadmapClicked () {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DO_GAME_FULLSCREEN);
        }
        CoreLib.EventHandler.dispatchEvent("SHOW_BCT_ROADMAP");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TG_BUTTON_CLICKED);
    }
    onInfoClicked () {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DO_GAME_FULLSCREEN);
        }
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.SHOW_PAYTABLE);
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TG_BUTTON_CLICKED);
    }
    onUndoClicked () {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DO_GAME_FULLSCREEN);
        }
        CoreLib.EventHandler.dispatchEvent("BCT_UNDO_CLICKED");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TG_BUTTON_CLICKED);
    }
    onRebetClicked () {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DO_GAME_FULLSCREEN);
        }
        CoreLib.EventHandler.dispatchEvent("BCT_REBET_CLICKED");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.TG_BUTTON_CLICKED);
    }

    resizeViewComponents (layoutData = null) {
        super.resizeViewComponents(layoutData);
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.roadmapBtn.visible = false;
            let sc = 0.85;
            this.rebetBtn.scale.set(sc);
            this.undoBtn.scale.set(sc);
        } else {
            //this.guideRect.alpha = 0.4;
            if (CoreLib.Model.DeviceConfig.isLandscape) {
                this.roadmapBtn.visible = true;
                this.guideRect.height = 106;
                this.guideRect.width = 180;

                let scale = 1.2;
                this.roadmapBtn.scale.set(scale);
                this.infoBtn.scale.set(scale);
                this.rebetBtn.scale.set(scale);
                this.undoBtn.scale.set(scale);
                this.settingsBtn.scale.set(scale);

                CoreLib.UIUtil.setPosition(this.roadmapBtn, (this.guideRect.width - this.roadmapBtn.width) / 2, this.guideRect.height - this.roadmapBtn.height);
                CoreLib.UIUtil.setPosition(this.infoBtn, this.roadmapBtn.x, this.roadmapBtn.y - this.infoBtn.height * 1.2);
                CoreLib.UIUtil.setPosition(this.rebetBtn, this.infoBtn.x, this.infoBtn.y - this.rebetBtn.height * 1.2);
                CoreLib.UIUtil.setPosition(this.undoBtn, this.infoBtn.x, this.rebetBtn.y - this.undoBtn.height * 1.2);
                CoreLib.UIUtil.setPosition(this.settingsBtn, this.infoBtn.x, this.undoBtn.y - this.settingsBtn.height * 1.2);

            } else {
                this.roadmapBtn.visible = false;
                this.guideRect.height = 220;
                this.guideRect.width = 1440;

                this.infoBtn.scale.set(1)
                let sc = (this.guideRect.width * 0.1) / this.infoBtn.width;
                this.infoBtn.scale.set(sc);
                this.rebetBtn.scale.set(sc);
                this.undoBtn.scale.set(sc);
                this.roadmapBtn.scale.set(sc);
                this.settingsBtn.scale.set(sc);
                CoreLib.UIUtil.setPosition(this.infoBtn, this.guideRect.width - this.infoBtn.width * 1.1, (this.guideRect.height - this.infoBtn.height) / 2);
                CoreLib.UIUtil.setPosition(this.rebetBtn, this.infoBtn.x - this.rebetBtn.width * 1.2, this.infoBtn.y);
                CoreLib.UIUtil.setPosition(this.roadmapBtn, 10, this.infoBtn.y);
                CoreLib.UIUtil.setPosition(this.undoBtn, this.roadmapBtn.x + this.undoBtn.width * 1.2, this.infoBtn.y);
                CoreLib.UIUtil.setPosition(this.settingsBtn, this.undoBtn.x - this.settingsBtn.width * 1.1, this.infoBtn.y);
            }
        }
    }



};
