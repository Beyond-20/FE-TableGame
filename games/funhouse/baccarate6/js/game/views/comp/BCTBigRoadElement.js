import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTBigRoadElement extends LibView {
    constructor(config) {
        super(config);


    }

    cleanUp () {
        if (this.icon) {
            this.icon.destroy();
            this.icon = null;
        }

    }

    setStateBigRoad (data) {

        this.cleanUp();
        let img = null;
        if (data.result == "dealer") {
            if (data.tie) {
                if (data.tieE6) {
                    img = "redoutlinewithgreendotE6";
                } else if (data.easy6) {
                    img = "redoutlinewithgreendotE6";
                } else {
                    img = "redoutlinewithgreendot";
                }
            } else {
                if (data.easy6) {
                    img = "redoutlineE6";
                } else {
                    img = "redoutline";
                }

            }
        } else if (data.result == "player") {
            if (data.tie) {
                if (data.tieE6) {
                    img = "blueoutlinewithgreendotE6";
                } else if (data.easy6) {
                    img = "blueoutlinewithgreendotE6";
                } else {
                    img = "blueoutlinewithgreendot";
                }
            } else {
                if (data.easy6) {
                    img = "blueoutlineE6";
                } else {
                    img = "blueoutline";
                }

            }

        } else {
            if (data.tieE6) {
                img = "blueoutlinewithgreendotE6";
            } else if (data.easy6) {
                img = "blueoutlinewithgreendotE6";
            } else {
                img = "blueoutline";
            }


        }
        if (img) {
            this.icon = CoreLib.UIUtil.getSprite(img);
            this.addChild(this.icon);
        }
    }





};
