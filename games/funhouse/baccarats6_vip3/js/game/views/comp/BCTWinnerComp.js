import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTWinnerComp extends LibView {
    constructor(config) {
        super(config);
        this.bg = this.elementsList["bg"];
        this.resultText = this.elementsList["resultText"];
        this.resultText.text = "12556.00"
    }

    setText (str, type) {
        this.resultText.text = str;
    }



};
