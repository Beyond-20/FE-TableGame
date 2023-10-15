import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTPanelComp extends LibView {
    constructor(config) {
        super(config);
        this.panelbg = this.elementsList["panelbg"];
        this.buttonsComp = this.elementsList["buttonsComp"];
    }
    updateBetData (data) {
        this.buttonsComp.updateBetData(data);
    }
    setState (flag) {
        this.buttonsComp.setState(flag);
    }
    showWinning (result) {
        this.buttonsComp.showWinning(result);
    }
    hideWinning () {
        this.buttonsComp.hideWinning();
    }
    showMaxbetWarning () {
        this.buttonsComp.showMaxbetWarning();
    }
    showBetError (msg) {
        this.buttonsComp.showBetError(msg);
    }
    showBalanceError () {
        this.buttonsComp.showBalanceError();
    }
    hideWarning () {
        this.buttonsComp.hideWarning();
    }
    updateBet (betsMap) {
        this.buttonsComp.updateBet(betsMap);
    }
    showCard (type, result) {
        this.buttonsComp.showCard(type, result);
    }

    updateGameForLastRound (result) {
        this.buttonsComp.updateGameForLastRound(result);
    }
    cleanUpRound () {
        this.buttonsComp.cleanUpRound();
    }
    clearAllBets () {
        this.buttonsComp.clearAllBets();
    }

    showLandscapeView () {
        this.panelbg.visible = false;
        this.buttonsComp.x = 0;
    }
    showPortraitView () {
        this.panelbg.visible = true;
        this.buttonsComp.x = 0;
    }
    setPanelHeight (ht) {
        this.panelbg.height = ht;
    }
    setPanelYScale (sc) {
        this.panelbg.scale.y = sc;
    }


    resizeViewComponents () {
        super.resizeViewComponents();

        if (CoreLib.Model.DeviceConfig.isDevice) {
            if (CoreLib.Model.DeviceConfig.isPortrait) {
                this.panelbg.width = 1440;
            } else {
                this.panelbg.width = 2560;
            }
        }

    }

};
