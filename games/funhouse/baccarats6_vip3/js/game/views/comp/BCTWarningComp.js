import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTWarningComp extends LibView {
    constructor(config) {
        super(config);
        this.bg = CoreLib.UIUtil.getSprite("leftbox");
        this.warningText = this.elementsList["warningText"];
        CoreLib.UIUtil.setPositionX(this.warningText, this.bg.width / 2);
    }

    showMaxBetWarning () {
        this.warningText.text = CoreLib.Util.getContent("maxBetWarning");
    }

    showBalanceError () {
        this.warningText.text = CoreLib.Util.getContent("balanceError");
    }
    showBetError (msg) {
        this.warningText.text = msg;
    }



};
