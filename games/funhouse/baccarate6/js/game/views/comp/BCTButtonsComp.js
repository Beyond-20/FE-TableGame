import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"

export class BCTButtonsComp extends LibView {
    constructor(config) {
        super(config);

        this.bg = this.elementsList["bg"];
        this.pssBtn = this.elementsList["pssBtn"];
        this.bssBtn = this.elementsList["bssBtn"];
        this.playerPairBtn = this.elementsList["playerPairBtn"];
        this.bankerPairBtn = this.elementsList["bankerPairBtn"];
        this.playerBtn = this.elementsList["playerBtn"];
        this.tieBtn = this.elementsList["tieBtn"];
        this.bankerBtn = this.elementsList["bankerBtn"];
        this.warningComp = this.elementsList["warningComp"];
        this.warningComp.visible = false;
        CoreLib.EventHandler.addEventListener("BCT_CLEAR_PANEL_CARDS", this.onClearPanelCards.bind(this));


    }
    updateBetData (data) {
        let totalBet = data.playerBet[1] + data.bankerBet[1] + data.tieBet[1];
        if (totalBet == 0) {
            this.playerBtn.updateBetData(data.playerBet, 0);
            this.bankerBtn.updateBetData(data.bankerBet, 0);
            this.tieBtn.updateBetData(data.tieBet, 0);
            return;
        }
        let perc1 = Math.round((data.playerBet[1] / totalBet) * 100);
        let perc2 = Math.round((data.bankerBet[1] / totalBet) * 100);
        let perc3 = Math.round((data.tieBet[1] / totalBet) * 100);
        this.playerBtn.updateBetData(data.playerBet, perc1);
        this.bankerBtn.updateBetData(data.bankerBet, perc2);
        this.tieBtn.updateBetData(data.tieBet, perc3);
    }
    showBetError (msg) {

        this.warningComp.visible = true;
        this.warningComp.alpha = 0;
        this.warningComp.showBetError(msg);
        CoreLib.AnimationManager.animateTween(this.warningComp, 0.25, {alpha : 1});
        setTimeout(this.hideWarning.bind(this), 2000);
    }
    showMaxbetWarning () {
        if (this.warningComp.visible) {
            return;
        }
        this.warningComp.visible = true;
        this.warningComp.alpha = 0;
        this.warningComp.showMaxBetWarning();
        CoreLib.AnimationManager.animateTween(this.warningComp, 0.25, {alpha : 1});
        setTimeout(this.hideWarning.bind(this), 2000);
    }
    showBalanceError () {
        if (this.warningComp.visible) {
            return;
        }
        this.warningComp.visible = true;
        this.warningComp.alpha = 0;
        this.warningComp.showBalanceError();
        CoreLib.AnimationManager.animateTween(this.warningComp, 0.25, {alpha : 1});
        setTimeout(this.hideWarning.bind(this), 2000);
    }
    hideWarning () {
        CoreLib.AnimationManager.animateTween(this.warningComp, 0.5, {alpha : 0, onComplete : this.onWarningcompHidden.bind(this)});
    }
    onWarningcompHidden () {
        this.warningComp.alpha = 1;
        this.warningComp.visible = false;
    }
    showWinning (result) {
        let id = result.winner;
        if (id == "player") {
            this.playerBtn.showWinning();
        } else if (id == "dealer") {
            this.bankerBtn.showWinning();
        } else if (id == "tie") {
            this.tieBtn.showWinning();
        }
        if (result.easy6) {
            this.pssBtn.showWinning();
            this.bssBtn.showWinning();
        }
        if (result.playerPair) {
            this.playerPairBtn.showWinning();
        }
        if (result.dealerPair) {
            this.bankerPairBtn.showWinning();
        }
    }
    hideWinning () {
        this.pssBtn.hideWinning();
        this.bssBtn.hideWinning();
        this.playerBtn.hideWinning();
        this.playerPairBtn.hideWinning();
        this.bankerBtn.hideWinning();
        this.bankerPairBtn.hideWinning();
        this.tieBtn.hideWinning();
    }
    setState (flag) {
        this.pssBtn.setState(flag);
        this.bssBtn.setState(flag);
        this.playerBtn.setState(flag);
        this.bankerBtn.setState(flag);
        this.tieBtn.setState(flag);
        this.playerPairBtn.setState(flag);
        this.bankerPairBtn.setState(flag);
    }
    updateBet (betsMap) {
        this.pssBtn.updateBet(betsMap.pssBet);
        this.bssBtn.updateBet(betsMap.bssBet);
        this.playerBtn.updateBet(betsMap.playerBet);
        this.bankerBtn.updateBet(betsMap.bankerBet);
        this.tieBtn.updateBet(betsMap.tieBet);
        this.playerPairBtn.updateBet(betsMap.playerPairBet);
        this.bankerPairBtn.updateBet(betsMap.bankerPairBet);
    }

    showCard (type, result) {
        if (type == "p1") {
            CoreLib.Model.GameConfig.playerHandTotal = result.playerHandTotal1st; //this.getHandTotal(result.playerCards, 1);
            this.playerBtn.showCard1(result.playerCards[0], CoreLib.Model.GameConfig.playerHandTotal); //result.playerHandTotalInitial);
        } else if (type == "b1") {
            CoreLib.Model.GameConfig.bankerHandTotal = result.dealerHandTotal1st; //this.getHandTotal(result.dealerCards, 1);
            this.bankerBtn.showCard1(result.dealerCards[0], CoreLib.Model.GameConfig.bankerHandTotal); //result.dealerHandTotalInitial);
        } else if (type == "p2") {
            CoreLib.Model.GameConfig.playerHandTotal = result.playerHandTotal2nd; //(result.playerCards, 2);
            this.playerBtn.showCard2(result.playerCards[1], CoreLib.Model.GameConfig.playerHandTotal);//result.playerHandTotal);
        } else if (type == "b2") {
            CoreLib.Model.GameConfig.bankerHandTotal = result.dealerHandTotal2nd; //this.getHandTotal(result.dealerCards, 2);
            this.bankerBtn.showCard2(result.dealerCards[1], CoreLib.Model.GameConfig.bankerHandTotal); //result.dealerHandTotal);
        } else if (type == "p3") {
            CoreLib.Model.GameConfig.playerHandTotal = result.playerHandTotal3rd;//this.getHandTotal(result.playerCards, 3);
            this.playerBtn.showCard3(result.playerCards[2], CoreLib.Model.GameConfig.playerHandTotal); //result.playerHandTotalFinal);
        } else if (type == "b3") {
            CoreLib.Model.GameConfig.bankerHandTotal = result.dealerHandTotal3rd;//this.getHandTotal(result.dealerCards, 3);
            this.bankerBtn.showCard3(result.dealerCards[2], CoreLib.Model.GameConfig.bankerHandTotal); //result.dealerHandTotalFinal);
        }
    }

    getHandTotal (arr, len) {
        let total = 0;
        let val;
        for (let k = 0; k < len; k++) {
            val = arr[k].split("")[1];
            if (val == "10" || val== "k" || val == "q" || val == "j") {
                total += 0;
            } else if (val == "a") {
                total += 1;
            } else {
                total += Number(val);
            }

        }
        if (total >= 10) {
            total -= 10;
        }
        return total;
    }
    clearAllBets () {
        this.pssBtn.updateBet(0, false);
        this.bssBtn.updateBet(0, false);
        this.playerBtn.updateBet(0, false);
        this.bankerBtn.updateBet(0, false);
        this.tieBtn.updateBet(0, false);
        this.playerPairBtn.updateBet(0, false);
        this.bankerPairBtn.updateBet(0, false);
    }

    cleanUpRound () {
        this.pssBtn.updateBet(0, false);
        this.bssBtn.updateBet(0, false);
        this.playerBtn.updateBet(0, false);
        this.bankerBtn.updateBet(0, false);
        this.tieBtn.updateBet(0, false);
        this.playerPairBtn.updateBet(0, false);
        this.bankerPairBtn.updateBet(0, false);
        this.playerBtn.cleanUpCards();
        this.bankerBtn.cleanUpCards();
        this.playerBtn.clearBetData();
        this.bankerBtn.clearBetData();
        this.tieBtn.clearBetData();
    }
    onClearPanelCards() {
        this.playerBtn.cleanUpCards();
        this.bankerBtn.cleanUpCards();
    }


    resizeViewComponents () {
        super.resizeViewComponents();
        CoreLib.UIUtil.positionObjectForDevice(this.pssBtn);
        CoreLib.UIUtil.positionObjectForDevice(this.bssBtn);
        CoreLib.UIUtil.positionObjectForDevice(this.playerBtn);
        CoreLib.UIUtil.positionObjectForDevice(this.bankerBtn);
        CoreLib.UIUtil.positionObjectForDevice(this.playerPairBtn);
        CoreLib.UIUtil.positionObjectForDevice(this.bankerPairBtn);
        CoreLib.UIUtil.positionObjectForDevice(this.tieBtn);

        CoreLib.UIUtil.setPosition(this.warningComp, (this.bg.width - this.warningComp.width) / 2, this.bg.height - this.warningComp.height * 1.1)
        CoreLib.EventHandler.dispatchEvent("BCT_BUTTONSCOMP_RESIZED");


    }
    onResizeEndEvent () {
        super.onResizeEndEvent();
        if (CoreLib.Model.DeviceConfig.isDesktop) {

        } else {
            if (CoreLib.Model.DeviceConfig.isLandscape) {
                this.bg.width = this.bssBtn.x + this.bssBtn.width;
                this.bg.height = this.pssBtn.y + this.pssBtn.height * 1.02;
            } else {
                this.bg.width = this.bssBtn.x + this.bssBtn.width;
                this.bg.height = this.playerBtn.y + this.playerBtn.height * 1.02;
            }

        }
    }

};
