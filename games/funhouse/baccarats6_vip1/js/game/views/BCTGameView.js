import {TGGameView} from "../../../../../../../slot_core/corelib/views/layoutcomps/TGGameView";
import {CoreLib} from "../../../../../../../slot_core/corelib/core/CoreLib";
import {slotModel} from "../../../../../../../slot_core/corelib/models/SlotModel"

export class BCTGameView extends TGGameView {
    constructor(config) {
        super(config);
        this.bgComp = this.elementsList["bgComp"];
        this.panelComp = this.elementsList["panelComp"];
        this.cardsAreaComp = this.elementsList["cardsAreaComp"];
        this.chipsPanel = this.elementsList["chipsPanel"];
        this.betBalanceComp = this.elementsList["betBalanceComp"];
        this.roadmapComp = this.elementsList["roadmapComp"];
        this.gameButtonsComp = this.elementsList["gameButtonsComp"];
        this.desktopSettings = this.elementsList["desktopSettings"];
        this.mobileSettingsComp = this.elementsList["mobileSettingsComp"];
        this.desktopButtonsComp = this.elementsList["desktopButtonsComp"];
        if (CoreLib.Model.DeviceConfig.isDevice) {
            this.maskRect = CoreLib.UIUtil.getRectangle(100,100, 0x00ff00);
            this.addChild(this.maskRect);
        }



        this.alertPopup = this.elementsList["alertPopup"];
        this.alertPopup.on("RESIZE_ALERT", this.repositionAlert.bind(this));
        this.gameContainer = CoreLib.UIUtil.getContainer();
        this.addChild(this.gameContainer);
        this.gameContainer.addChild(this.bgComp, this.panelComp, this.cardsAreaComp, this.betBalanceComp, this.gameButtonsComp, this.chipsPanel, this.desktopButtonsComp, this.roadmapComp, this.desktopSettings);

        this.addChild(this.mobileSettingsComp, this.alertPopup);

        CoreLib.EventHandler.addEventListener("BCT_PLACE_BET", this.onBCTPlaceBet.bind(this));
        CoreLib.EventHandler.addEventListener("BCT_BET_PLACED", this.onBCTBetPlaced.bind(this));
        CoreLib.EventHandler.addEventListener("BCT_UNDO_RECEIVED", this.onBCTUndoDone.bind(this));
        CoreLib.EventHandler.addEventListener("BCT_CARD_SHOWN", this.onBCTCardShown.bind(this));
        CoreLib.EventHandler.addEventListener("BCT_SHOW_WINNING_IN_PANEL", this.showWinningInPanel.bind(this));
        CoreLib.EventHandler.addEventListener("BCT_REBET_CLICKED", this.onRebetClicked.bind(this));
        CoreLib.EventHandler.addEventListener("BCT_UNDO_CLICKED", this.onUndoClicked.bind(this));
        CoreLib.EventHandler.addEventListener("BCT_BUTTONSCOMP_RESIZED", this.buttonsCompResized.bind(this));
        CoreLib.EventHandler.addEventListener("SHOW_BCT_BET_ERROR", this.showBCTBetError.bind(this));
        CoreLib.EventHandler.addEventListener(CoreLib.SlotEvents.HANDLE_BACCARAT_SOCKET_MESSAGE, this.onBCTSocketMessage.bind(this));

        this.betsMap = {};
        this.resetBetValues();
        this.checkGameState();
        this.requestBetHistory();
        if (!CoreLib.Model.DeviceConfig.isIOSDevice) {
            CoreLib.EventHandler.dispatchEvent("PLAY_BCT_BGMUSIC");
        }
    }
    requestBetHistory() {
        CoreLib.WrapperService.requestBCTHistory();
    }
    checkGameState () {
        let state = slotModel.getGameInitFullData().gameStatus;
        switch (state) {
            case "createGame":
                this.resetBetValues();
                this.cardsAreaComp.cleanUpRound();
                this.cardsAreaComp.startTimer();
                this.panelComp.cleanUpRound();
                this.panelComp.setState(true);
                this.betBalanceComp.setState(true);
                CoreLib.EventHandler.dispatchEvent("UPDATE_BCT_BET", this.getTotalBet());
                CoreLib.EventHandler.dispatchEvent("PLAY_PLACE_BET_VOICE");
                break;
            case "startGame":
                CoreLib.EventHandler.dispatchEvent("BCT_CLEAR_PANEL_CARDS");
                this.panelComp.setState(false);
                this.betBalanceComp.setState(false);
                this.cardsAreaComp.clearTimer();
                CoreLib.EventHandler.dispatchEvent("PLAY_NOMORE_BETS_VOICE");
                break;
            default :
                break;
        }
    }
    getCountText (data) {
        return (data.vip1_createGame.roundCount + " / " + data.vip1_createGame.totalCount);
    }
    onBCTSocketMessage (data) {
        let msg;
        for (let p in data) {
            msg = p;
        }


        if (msg.indexOf("vip1_") > -1) {
            if (msg != "vip1_BaccaratBet") {
                let arr = msg.split("_");
                this.cardsAreaComp.updateGameStatus(arr[1]);
            } else {

            }
            //console.log(msg, data);
            switch (msg) {
                case "vip1_createGame" :
                    this.resetBetValues();
                    this.cardsAreaComp.cleanUpRound();
                    this.cardsAreaComp.startTimer();
                    //this.panelComp.startTimer();
                    this.panelComp.cleanUpRound();
                    this.panelComp.setState(true);
                    this.cardsAreaComp.updateCountText(this.getCountText(data));
                    this.gameButtonsComp.setState(true);
                    this.chipsPanel.setCompEnabled(true);
                    this.requestBetHistory();
                    CoreLib.EventHandler.dispatchEvent("UPDATE_BCT_BET", this.getTotalBet());
                    CoreLib.EventHandler.dispatchEvent("PLAY_PLACE_BET_VOICE");
                    this.setRebetUndoButtonState();
                    break;
                case "vip1_startGame" :
                    CoreLib.Model.GameConfig.bctWinning = 0;
                    CoreLib.Model.GameConfig.playedGame = false;
                    this.panelComp.setState(false);
                    this.gameButtonsComp.setState(false);
                    this.chipsPanel.setCompEnabled(false);
                    this.cardsAreaComp.clearTimer();
                    CoreLib.EventHandler.dispatchEvent("PLAY_NOMORE_BETS_VOICE");
                    break;
                case "vip1_gameResult" :
                    if (data.vip1_gameResult.player_id == slotModel.getPlayerId()) {
                        CoreLib.Model.GameConfig.bctWinning += data.vip1_gameResult.result.totalWin;
                        CoreLib.Model.GameConfig.playedGame = true;
                        //slotModel.updateEasyBaccaratBalance(data);
                        CoreLib.WrapperService.requestUserBalance();
                        this.cardsAreaComp.storeGameResult(data.vip1_gameResult);
                    }
                    break;
                case "vip1_runGame" :
                    this.panelComp.setState(false);
                    this.gameButtonsComp.setState(false);
                    this.chipsPanel.setCompEnabled(false);
                    this.dealResult = {};
                    this.dealResult.result = data.vip1_runGame;
                    this.panelComp.setState(false);
                    this.cardsAreaComp.dealCards(this.dealResult.result);
                    break;
                case "vip1_BaccaratBet" :
                    this.handleBetPlacement(data.vip1_BaccaratBet);
                    break;
                default :
                    break;
            }
        }
    }
    setRebetUndoButtonState() {
        let totalBet = this.lastBetsMap.pssBet + this.lastBetsMap.bssBet + this.lastBetsMap.playerBet + this.lastBetsMap.playerPairBet + this.lastBetsMap.bankerBet + this.lastBetsMap.bankerPairBet + this.lastBetsMap.tieBet;
        if (totalBet > 0) {
            if (this.getTotalBet() > 0) {
                CoreLib.EventHandler.dispatchEvent("REBET_BUTTON_STATE", false);
            } else {
                CoreLib.EventHandler.dispatchEvent("REBET_BUTTON_STATE", true);
            }

        } else {
            CoreLib.EventHandler.dispatchEvent("REBET_BUTTON_STATE", false);
        }
        let len = this.betsArray.length;
        if (len > 0) {
            CoreLib.EventHandler.dispatchEvent("UNDO_BUTTON_STATE", true);
        } else {
            CoreLib.EventHandler.dispatchEvent("UNDO_BUTTON_STATE", false);
        }
    }
    handleBetPlacement (data) {
        this.panelComp.updateBetData(data);
        // this.setRebetUndoButtonState();

    }
    onBCTCardShown (type) {
        this.panelComp.showCard(type, this.dealResult.result);
    }

    resetBetValues () {
        this.lastBetsMap = {};
        for (let p in this.betsMap) {
            this.lastBetsMap[p] = this.betsMap[p];
        }
        this.betsMap.playerBet = 0;
        this.betsMap.playerPairBet = 0;
        this.betsMap.bankerBet = 0;
        this.betsMap.bankerPairBet = 0;
        this.betsMap.tieBet = 0;
        this.betsMap.pssBet = 0;
        this.betsMap.bssBet = 0;
        this.betsMap.superSixBet = 0;
        this.betsArray = [];
    }



    getCurrentBet(id) {
        if (id == "pssBtn") {
            return this.betsMap.superSixBet;
        } else if (id == "bssBtn") {
            return this.betsMap.superSixBet;
        } else if (id == "playerBtn") {
            return this.betsMap.playerBet;
        } else if (id == "bankerBtn") {
            return this.betsMap.bankerBet;
        } else if (id == "playerPairBtn") {
            return this.betsMap.playerPairBet;
        } else if (id == "bankerPairBtn") {
            return this.betsMap.bankerPairBet;
        } else if (id == "tieBtn") {
            return this.betsMap.tieBet;
        }
    }

    validateIndivBet (id) {
        let bet = CoreLib.Model.GameConfig.selectedChipValue;
        let currentBet = this.getCurrentBet(id);
        if (id == "pssBtn" || id == "bssBtn") {
            if (bet + currentBet > CoreLib.Model.GameConfig.superSixMaxBet) {
                return false;
            } else {
                return true;
            }
        } else if (id == "playerBtn" || id == "bankerBtn") {
            if (bet + currentBet > CoreLib.Model.GameConfig.playerBankerMaxBet) {
                return false;
            } else {
                return true;
            }
        } else if (id == "playerPairBtn" || id == "bankerPairBtn") {
            if (bet + currentBet > CoreLib.Model.GameConfig.pairMaxBet) {
                return false;
            } else {
                return true;
            }
        } else if (id == "tieBtn") {
            if (bet + currentBet > CoreLib.Model.GameConfig.tieMaxBet) {
                return false;
            } else {
                return true;
            }
        }
    }


    getTotalBet () {
        let bet = 0;
        bet += this.betsMap.playerBet + this.betsMap.bankerBet + this.betsMap.tieBet + this.betsMap.playerPairBet + this.betsMap.bankerPairBet + this.betsMap.superSixBet;
        if (bet < 0) {
            bet = 0;
        }
        return bet;
    }

    getRebetObj () {
        let serverbetsmap = {};
        serverbetsmap.playerBet = this.lastBetsMap.playerBet;
        serverbetsmap.playerPairBet = this.lastBetsMap.playerPairBet;
        serverbetsmap.bankerBet = this.lastBetsMap.bankerBet;
        serverbetsmap.bankerPairBet = this.lastBetsMap.bankerPairBet;
        serverbetsmap.tieBet = this.lastBetsMap.tieBet;
        serverbetsmap.superSixBet = this.lastBetsMap.superSixBet;
        return serverbetsmap;
    }
    getServerBetsMap (id) {
        let serverbetsmap = {};
        serverbetsmap.playerBet = 0;
        serverbetsmap.playerPairBet = 0;
        serverbetsmap.bankerBet = 0;
        serverbetsmap.bankerPairBet = 0;
        serverbetsmap.tieBet = 0;
        serverbetsmap.superSixBet = 0;
        let val = CoreLib.Model.GameConfig.selectedChipValue;
        switch (id) {
            case "pssBtn" :
                serverbetsmap.superSixBet += val;
                break;
            case "bssBtn" :
                serverbetsmap.superSixBet += val;
                break;
            case "playerBtn" :
                serverbetsmap.playerBet += val;
                break;
            case "bankerBtn" :
                serverbetsmap.bankerBet += val;
                break;
            case "playerPairBtn" :
                serverbetsmap.playerPairBet += val;
                break;
            case "bankerPairBtn" :
                serverbetsmap.bankerPairBet += val;
                break;
            case "tieBtn" :
                serverbetsmap.tieBet += val;
                break;
            default :
                break;
        }
        return serverbetsmap;
    }
    doFullScreen() {
        if (CoreLib.Model.DeviceConfig.isDevice) {
            CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.DO_GAME_FULLSCREEN);
        }
    }
    onBCTPlaceBet (id) {
        this.doFullScreen();
        if (CoreLib.Model.GameConfig.selectedChipValue <= slotModel.getBalance()) {
            if (this.validateIndivBet(id)) {
                CoreLib.EventHandler.dispatchEvent("UNDO_BUTTON_STATE", false);
                CoreLib.EventHandler.dispatchEvent("REBET_BUTTON_STATE", false);
                this.panelComp.setState(false);
                this.pssBet = id == "pssBtn" ? true : false;
                this.bssBet = id == "bssBtn" ? true : false;
                CoreLib.WrapperService.requestBCTBetPlacement(this.getServerBetsMap(id));
                this.panelComp.hideWarning();
            } else {
                // show max bet warning
                this.panelComp.showMaxbetWarning();
            }
        } else {
            this.panelComp.showBalanceError();
        }
    }
    showBCTBetError (msg) {
        this.panelComp.showBetError(msg);
    }

    onBCTBetPlaced () {
        let data = slotModel.getBCTBetData();
        this.addNewBet(data);
        this.panelComp.updateBet(this.betsMap);
        CoreLib.EventHandler.dispatchEvent("UPDATE_BCT_BET", this.getTotalBet());
        this.setRebetUndoButtonState();
        this.panelComp.setState(true);
    }
    onBCTUndoDone () {
        let totalbet = this.undoBetObject.playerBet + this.undoBetObject.playerPairBet + this.undoBetObject.bankerBet + this.undoBetObject.bankerPairBet + this.undoBetObject.tie + this.undoBetObject.superSixBet;
        this.betsMap.playerBet -= this.undoBetObject.bets.playerBet;
        this.betsMap.bankerBet -= this.undoBetObject.bets.bankerBet;
        this.betsMap.playerPairBet -= this.undoBetObject.bets.playerPairBet;
        this.betsMap.bankerPairBet -= this.undoBetObject.bets.bankerPairBet;
        this.betsMap.tieBet -= this.undoBetObject.bets.tieBet;
        this.betsMap.superSixBet -= this.undoBetObject.bets.superSixBet;
        if (this.pssBet) {
            this.betsMap.pssBet -= this.undoBetObject.bets.superSixBet;
        } else if (this.bssBet) {
            this.betsMap.bssBet -= this.undoBetObject.bets.superSixBet;
        }
        let len = this.betsArray.length;
        if (len > 0) {
            for (let k = 0; k < len; k++) {
                if (this.betsArray[k].roundId == this.undoBetObject.roundId) {
                    this.betsArray.splice(k, 1);
                }
            }
        }
        this.panelComp.updateBet(this.betsMap);
        CoreLib.EventHandler.dispatchEvent("UPDATE_BCT_BET", this.getTotalBet());
        this.setRebetUndoButtonState();
        this.panelComp.setState(true);

    }
    addNewBet (obj) {
        let data = obj.result.bets;
        this.betsMap.playerBet += data.playerBet;
        this.betsMap.playerPairBet += data.playerPairBet;
        this.betsMap.bankerBet += data.bankerBet;
        this.betsMap.bankerPairBet += data.bankerPairBet;
        this.betsMap.tieBet += data.tieBet;
        this.betsMap.superSixBet += data.superSixBet;
        if (this.pssBet) {
            this.betsMap.pssBet += data.superSixBet;
        } else if (this.bssBet) {
            this.betsMap.bssBet += data.superSixBet;
        }
        let betobj = {};
        betobj.id = obj.result.id;
        betobj.roundId = obj.roundId;
        betobj.bets = data;
        this.betsArray.push(betobj);
    }

    onRebetClicked () {
        let totalBet = this.lastBetsMap.pssBet + this.lastBetsMap.bssBet + this.lastBetsMap.playerBet + this.lastBetsMap.playerPairBet + this.lastBetsMap.bankerBet + this.lastBetsMap.bankerPairBet + this.lastBetsMap.tieBet;
        if (totalBet > slotModel.getBalance()) {
            this.panelComp.showBalanceError();
        } else {
            if (totalBet > 0) {
                if (this.lastBetsMap.pssBet > 0) {
                    this.pssBet = true;
                } else {
                    this.pssBet = false;
                }
                if (this.lastBetsMap.bssBet > 0) {
                    this.bssBet = true;
                } else {
                    this.bssBet = false;
                }
                CoreLib.EventHandler.dispatchEvent("UNDO_BUTTON_STATE", false);
                CoreLib.EventHandler.dispatchEvent("REBET_BUTTON_STATE", false);
                this.panelComp.setState(false);
                CoreLib.WrapperService.requestBCTBetPlacement(this.getRebetObj());
                this.panelComp.hideWarning();
            }
        }
    }
    onUndoClicked () {
        CoreLib.EventHandler.dispatchEvent("UNDO_BUTTON_STATE", false);
        CoreLib.EventHandler.dispatchEvent("REBET_BUTTON_STATE", false);
        this.panelComp.setState(false);
        let len = this.betsArray.length;
        let obj;
        if (len > 0) {
            obj = this.betsArray[len - 1];
        }
        this.undoBetObject = obj;
        CoreLib.WrapperService.requestBCTUndo(obj);
    }

    showWinningInPanel () {
        this.panelComp.showWinning(this.dealResult.result);
        setTimeout(this.hideWinningInPanel.bind(this), 4000);
    }
    hideWinningInPanel () {
        this.panelComp.hideWinning();
    }

    buttonsCompResized () {
        setTimeout(this.onResizeEndEvent.bind(this), 0);
    }
    repositionAlert() {
        CoreLib.UIUtil.setPosition(this.alertPopup, (CoreLib.UIUtil.getGameWidth() - this.alertPopup.width) / 2, (CoreLib.UIUtil.getGameHeight() - this.alertPopup.height) / 2);
    }

    onResizeEndEvent () {
        super.resizeViewComponents();
        this.gameContainer.scale.set(1);

        if (CoreLib.Model.DeviceConfig.isDesktop) {

        } else {
            this.panelComp.setPanelYScale(1);
            if (CoreLib.Model.DeviceConfig.isLandscape) {
                this.gameContainer.removeChild(this.maskRect);
                this.gameContainer.mask = null;
                this.removeChild(this.maskRect);
                this.cardsAreaComp.scale.set(1);
                let sc = (this.bgComp.width * 1) / this.cardsAreaComp.width;
                this.cardsAreaComp.scale.set(sc);
                this.panelComp.showLandscapeView();
                CoreLib.UIUtil.setPosition(this.panelComp, (this.bgComp.width - this.panelComp.width) / 2, this.bgComp.height - this.panelComp.height * 1.02);
                CoreLib.UIUtil.setPosition(this.betBalanceComp, (this.bgComp.width - this.betBalanceComp.width) / 2, this.panelComp.y - this.betBalanceComp.guideRect.height);
                CoreLib.UIUtil.setPosition(this.gameButtonsComp, (this.bgComp.width - this.gameButtonsComp.width), this.panelComp.y - this.gameButtonsComp.guideRect.height * 1.2);
                CoreLib.UIUtil.setPosition(this.chipsPanel, (this.bgComp.width - this.chipsPanel.width) / 2, this.panelComp.y - this.chipsPanel.height);

                this.roadmapComp.scale.set(1);
                CoreLib.UIUtil.setPosition(this.roadmapComp, (this.bgComp.width - this.roadmapComp.width) / 2, (this.bgComp.height - this.roadmapComp.height) / 2);

            } else {
                this.gameContainer.mask = this.maskRect;
                this.gameContainer.addChild(this.maskRect);
                this.maskRect.alpha = 0.5;
                this.maskRect.width = this.bgComp.width;
                this.maskRect.height = CoreLib.UIUtil.getGameHeight();
                this.panelComp.showPortraitView();
                this.cardsAreaComp.scale.set(1);
                let sc = (this.bgComp.width * 1) / this.cardsAreaComp.width;
                this.cardsAreaComp.scale.set(sc);
                this.roadmapComp.scale.set(1);
                sc = (this.bgComp.width * 1) / this.roadmapComp.width;
                this.roadmapComp.scale.set(sc);
                CoreLib.UIUtil.setPosition(this.panelComp, (this.bgComp.width - this.panelComp.width) / 2, this.cardsAreaComp.y + this.cardsAreaComp.height);
                CoreLib.UIUtil.setPosition(this.gameButtonsComp, (this.bgComp.width - this.gameButtonsComp.width), this.panelComp.y + this.panelComp.height);
                CoreLib.UIUtil.setPosition(this.roadmapComp, (this.bgComp.width - this.roadmapComp.width) / 2, this.gameButtonsComp.y + this.gameButtonsComp.height);
                CoreLib.UIUtil.setPosition(this.betBalanceComp, (this.bgComp.width - this.betBalanceComp.width) / 2, this.roadmapComp.y + this.roadmapComp.height * 0.92);
                CoreLib.UIUtil.setPosition(this.chipsPanel, (this.bgComp.width - this.chipsPanel.width) / 2, this.gameButtonsComp.y);
                this.maskRect.height = this.betBalanceComp.y + this.betBalanceComp.height;
            }
        }

        let sc = CoreLib.UIUtil.getGameWidth() / this.gameContainer.width;
        let hsc = CoreLib.UIUtil.getGameHeight() / this.gameContainer.height;
        this.gameContainer.scale.set(Math.min(sc, hsc));
        CoreLib.UIUtil.setPositionX(this.gameContainer, (CoreLib.UIUtil.getGameWidth() - this.gameContainer.width) / 2);
        if (CoreLib.Model.DeviceConfig.isDevice && CoreLib.Model.DeviceConfig.isPortrait) {
            CoreLib.UIUtil.setPositionY(this.gameContainer, (CoreLib.UIUtil.getGameHeight() - this.maskRect.height * this.gameContainer.scale.y) / 2);
            this.panelComp.setPanelHeight(this.gameButtonsComp.y + this.gameButtonsComp.height - this.panelComp.y);
        } else {
            CoreLib.UIUtil.setPositionY(this.gameContainer, (CoreLib.UIUtil.getGameHeight() - this.gameContainer.height) / 2);
        }
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.desktopSettings.scale.set(1);
        }

    }


}
