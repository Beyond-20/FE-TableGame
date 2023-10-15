import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTResultComp extends LibView {
    constructor(config) {
        super(config);
        this.bg = this.elementsList["bg"];
        this.resultText = this.elementsList["resultText"];
        this.resultText.text = "PLAYER"
    }

    setText (str, type) {

        this.resultText.text = str;
        if (type == "player") {
            this.bg.texture = CoreLib.UIUtil.getTexture("winnerBGPlayer");
        } else if (type == "dealer") {
            this.bg.texture = CoreLib.UIUtil.getTexture("winnerBGDealer");
        } else {
            this.bg.texture = CoreLib.UIUtil.getTexture("winnerBGTie");
        }
    }



};
