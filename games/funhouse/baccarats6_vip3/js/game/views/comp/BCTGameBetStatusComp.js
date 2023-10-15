import {SliderComp} from "../../../../../../../../slot_core/corelib/views/comps/SliderComp";
import { CoreLib } from '../../../../../../../../slot_core/corelib/core/CoreLib'
import { LibContainer } from '../../../../../../../../slot_core/corelib/pixiwrapper/LibContainer'

export class BCTGameBetStatusComp extends LibContainer {
    constructor(config) {
        super(config);

        let scale = 0.4;
        if (CoreLib.Model.DeviceConfig.isDevice) {
            scale = 0.60;
        }
        let config1 = {name : "betPercComp", type : "Comp", class : "CircularTimer", x : 0, y : 0, fillColor : this.configData.fillColor, style : "gameFont1Style", fontSize : 66, mFontSize : 80, fontColor : this.configData.fontColor, scale : scale};
        this.percComp = CoreLib.UIUtil.getElement(config1);
        this.addChild(this.percComp);

        this.playerIcon = CoreLib.UIUtil.getSprite("playerIcon");
        this.addChild(this.playerIcon);
        this.playerIcon.tint = this.configData.fillColor;

        let config2 = {name : "totalnumbertext", type : "Text", style : "gameFont1Style", fontSize : 26, mFontSize : 48, fontColor: this.configData.fontColor};
        this.totalPlayerText = CoreLib.UIUtil.getElement(config2);
        this.addChild(this.totalPlayerText);
        this.totalPlayerText.text = 0;
        this.totalBetText = CoreLib.UIUtil.getElement(config2);
        this.addChild(this.totalBetText);
        this.totalBetText.text = "0";

        if (this.configData.percPosition != undefined && this.configData.percPosition == "right") {
            CoreLib.UIUtil.setPosition(this.playerIcon, 0, (this.percComp.height * 0.5 - this.playerIcon.height) / 2);
            CoreLib.UIUtil.setPosition(this.totalPlayerText, this.playerIcon.x + this.playerIcon.width * 1.05, this.playerIcon.y + (this.playerIcon.height - this.totalPlayerText.height) / 2 - 2);
            CoreLib.UIUtil.setPosition(this.totalBetText, this.totalPlayerText.x + this.totalPlayerText.width - this.totalBetText.width, this.totalPlayerText.y + this.totalPlayerText.height * 1.2);
            if (CoreLib.Model.DeviceConfig.isDevice) {
                CoreLib.UIUtil.setPosition(this.percComp, this.totalBetText.x + this.totalBetText.width + 100, 0);
            } else {
                CoreLib.UIUtil.setPosition(this.percComp, this.totalBetText.x + this.totalBetText.width + 60, 0);
            }


        } else {
            CoreLib.UIUtil.setPosition(this.percComp, 0, 0);
            CoreLib.UIUtil.setPosition(this.playerIcon, this.percComp.width * 1.1, (this.percComp.height * 0.5 - this.playerIcon.height) / 2);
            CoreLib.UIUtil.setPosition(this.totalPlayerText, this.playerIcon.x + this.playerIcon.width * 1.05, this.playerIcon.y + (this.playerIcon.height - this.totalPlayerText.height) / 2 - 2);
            CoreLib.UIUtil.setPosition(this.totalBetText, this.totalPlayerText.x + this.totalPlayerText.width - this.totalBetText.width, this.totalPlayerText.y + this.totalPlayerText.height * 1.2);
        }

    }


    updateBetData (arr, perc) {
        this.totalPlayerText.text = arr[0];
        this.totalBetText.text = CoreLib.WrapperService.formatCurrencyWithoutSymbol(arr[1], 0);
        this.percComp.updateBetStatusCompPercentage(perc);
        // this.percComp.showValue(perc);
        // this.percComp.updateBetPercentage(perc);
    }

    clearBetData () {
        this.totalPlayerText.text = "0";
        this.totalBetText.text = "0";
        this.percComp.updateBetStatusCompPercentage(0);
    }

}
