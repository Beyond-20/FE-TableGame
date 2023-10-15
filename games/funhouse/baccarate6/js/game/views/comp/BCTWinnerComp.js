import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTWinnerComp extends LibView {
    constructor(config) {
        super(config);
        this.bg = this.elementsList["bg"];
        this.resultText = this.elementsList["resultText"];
        this.resultText.text = "";
    }

    setText (str, type) {
        this.resultText.text = str;
    }



};
