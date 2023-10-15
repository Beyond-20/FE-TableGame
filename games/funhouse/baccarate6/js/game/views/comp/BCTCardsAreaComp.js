import {LibView} from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import {CoreLib} from "../../../../../../../../slot_core/corelib/core/CoreLib"
import {TGCard} from "../../../../../../../../slot_core/corelib/views/tgcomps/TGCard"

const soundList = {
    "player" : "Player_Win",
    "dealer" : "Banker_Win",
    "tie" : "Tie_Win",
}
export class BCTCardsAreaComp extends LibView {
    constructor(config) {
        super(config);
        this.topchairs = this.elementsList["topchairs"];
        this.cContainer = CoreLib.UIUtil.getContainer();


        this.resultComp = this.elementsList["resultComp"];
        this.winnerComp = this.elementsList["winnerComp"];
        this.gameTimer = this.elementsList["gameTimer"];

        this.addChild(this.cContainer, this.resultComp, this.winnerComp);



        this.cardProps = {};
        this.cardProps.playerCard1 = {x : 48, y : 190, scaleX : 0.31, scaleY : 0.25, skewX : -0.18, skewY : 0};
        this.cardProps.playerCard2 = {x : 227, y : 190, scaleX : 0.32, scaleY : 0.25, skewX : -0.05, skewY : 0};
        this.cardProps.bankerCard1 = {x : 610, y : 190, scaleX : 0.32, scaleY : 0.25, skewX : 0.10, skewY : 0};
        this.cardProps.bankerCard2 = {x : 796, y : 190, scaleX : 0.32, scaleY : 0.25, skewX : 0.16, skewY : 0};
        this.cardProps.playerCard3 = {x : -138, y : 188, scaleX : 0.24, scaleY : 0.28, skewX : 0, skewY : 0.2, rotation : -90};
        this.cardProps.bankerCard3 = {x : 950, y : 188, scaleX : 0.24, scaleY : 0.28, skewX : 0, skewY : -0.2, rotation : -90};
        this.cardProps.startCard = {x : 1502, y : 46, scaleX : 0.22, scaleY : 0.22, skewX : 0.48, skewY : -0.9, rotation : 0};
        this.cardProps.endCard = {x : -718, y : -76, scaleX : 0.29, scaleY : 0.24, skewX : -0.48, skewY : 0.22};




        CoreLib.UIUtil.setPosition(this.cContainer, 856, 316)

        this.statusText = this.elementsList["statusText"];
        this.updateGameStatus("waitPlease");
        this.countText = this.elementsList["countText"];
        this.updateCountText("");

        this.playerCard1 = new TGCard();
        this.playerCard2 = new TGCard();
        this.bankerCard1 = new TGCard();
        this.bankerCard2 = new TGCard();
        this.playerCard3 = new TGCard();
        this.bankerCard3 = new TGCard();
        this.cContainer.addChild(this.playerCard1, this.playerCard2, this.playerCard3, this.bankerCard1, this.bankerCard2, this.bankerCard3);
        this.playerCard1.on("CARD_SHOWN_COMPLETE", this.onP1CardShown.bind(this));
        this.playerCard2.on("CARD_SHOWN_COMPLETE", this.onP2CardShown.bind(this));
        this.playerCard3.on("CARD_SHOWN_COMPLETE", this.onP3CardShown.bind(this));
        this.bankerCard1.on("CARD_SHOWN_COMPLETE", this.onB1CardShown.bind(this));
        this.bankerCard2.on("CARD_SHOWN_COMPLETE", this.onB2CardShown.bind(this));
        this.bankerCard3.on("CARD_SHOWN_COMPLETE", this.onB3CardShown.bind(this));
        this.onAllCardsCleaned();

        // this.newCard = new TGCard();
        // this.cContainer.addChild(this.newCard);
        // this.applyProps(this.newCard, this.cardProps.bankerCard3_1);

        this.resultComp.visible = false;
        this.winnerComp.visible = false;

        this.isCleanedUp = true;
        this.clearTimer();

        //this.startTimer();

    }

    updateCountText (str) {
        if (this.countText) {
            this.countText.text = str;
        }

    }
     updateGameStatus (status) {
        this.statusText.text = CoreLib.Util.getContent(status);
    }
    startTimer () {
        this.totalTime = 15;
        this.currentTime = 0;
        this.doCountDown();
        clearInterval(this.timerId);
        this.timerId = setInterval(this.doCountDown.bind(this), 1000);
    }
    doCountDown () {
        this.currentTime++;
        if (this.currentTime > this.totalTime) {
            this.currentTime = this.totalTime;
        }
        if (this.totalTime - this.currentTime <= 5) {
            this.showTimer();
        }

    }
    showTimer () {
        this.gameTimer.visible = true;
        let perc = ((this.totalTime - this.currentTime) / 5) * 100;
        this.gameTimer.showValue(this.totalTime - this.currentTime);
        this.gameTimer.updatePercentage(perc);
        if (this.currentTime == this.totalTime) {
            CoreLib.EventHandler.dispatchEvent("PLAY_COUNTDOWN_FINALBEEP");
        } else {
            CoreLib.EventHandler.dispatchEvent("PLAY_COUNTDOWN_TIME");
        }
        if (this.currentTime >= this.totalTime) {
            clearInterval(this.timerId);
        } else {

        }
    }
    clearTimer () {

        clearInterval(this.timerId);
        this.gameTimer.showValue("");
        this.gameTimer.visible = false;
    }

    clearAllTimer () {
        clearTimeout(this.removeCardsTimer);
        clearTimeout(this.thirdCardCheckTimer);
        clearTimeout(this.gameResultTimer);
    }

    cleanUpRound () {
        clearTimeout(this.thirdCardCheckTimer);
        clearTimeout(this.gameResultTimer);
        this.playerCard1.closeCard();
        this.playerCard2.closeCard();
        this.playerCard3.closeCard();
        this.bankerCard1.closeCard();
        this.bankerCard2.closeCard();
        this.bankerCard3.closeCard();
        clearTimeout(this.removeCardsTimer);
        this.removeCardsTimer = setTimeout(this.removeCards.bind(this), 500);
    }
    removeCards () {
        if (!this.isCleanedUp) {
            this.doCardAnimation(this.playerCard1, this.cardProps.endCard, 0.1);
            this.doCardAnimation(this.bankerCard1, this.cardProps.endCard, 0.1);
            this.doCardAnimation(this.playerCard2, this.cardProps.endCard, 0.1);
            this.doCardAnimation(this.bankerCard2, this.cardProps.endCard, 0.1);
            this.doCardAnimation(this.playerCard3, this.cardProps.endCard, 0.1);
            this.doCardAnimation(this.bankerCard3, this.cardProps.endCard, 0.1, 0, this.onAllCardsCleaned.bind(this));
        }
        CoreLib.AnimationManager.animateTween(this.resultComp, 0.5, {alpha : 0});
        CoreLib.AnimationManager.animateTween(this.winnerComp, 0.5, {alpha : 0, onComplete : this.onElementsFaded.bind(this)});
        this.clearAllTimer();
        this.isCleanedUp = true;
    }
    onElementsFaded () {
        this.resultComp.visible = false;
        this.winnerComp.visible = false;
        this.resultComp.alpha = 1;
        this.winnerComp.alpha = 1;
    }
    onAllCardsCleaned () {
        this.applyProps(this.playerCard1, this.cardProps.endCard);
        this.applyProps(this.playerCard2, this.cardProps.endCard);
        this.applyProps(this.playerCard3, this.cardProps.endCard);
        this.applyProps(this.bankerCard1, this.cardProps.endCard);
        this.applyProps(this.bankerCard2, this.cardProps.endCard);
        this.applyProps(this.bankerCard3, this.cardProps.endCard);
        this.playerCard1.visible = this.playerCard2.visible = this.playerCard3.visible = false;
        this.bankerCard1.visible = this.bankerCard2.visible = this.bankerCard3.visible = false;
    }
    dealCards (data) {
        CoreLib.EventHandler.dispatchEvent("BCT_CLEAR_PANEL_CARDS");
        this.onAllCardsCleaned();
        this.clearAllTimer();
        this.onElementsFaded();
        this.isCleanedUp = false;
        this.result = data;
        this.applyProps(this.playerCard1, this.cardProps.startCard);
        this.applyProps(this.playerCard2, this.cardProps.startCard);
        this.applyProps(this.playerCard3, this.cardProps.startCard);
        this.applyProps(this.bankerCard1, this.cardProps.startCard);
        this.applyProps(this.bankerCard2, this.cardProps.startCard);
        this.applyProps(this.bankerCard3, this.cardProps.startCard);
        this.startDeal();
    }
    startDeal() {
        this.applyProps(this.playerCard1, this.cardProps.startCard);
        this.doCardAnimation(this.playerCard1, this.cardProps.playerCard1, 0.2, 0, this.onP1Done.bind(this));
    }
    onP1Done () {
        this.showCard(this.playerCard1, this.result.playerCards[0]);
    }
    onP1CardShown () {
        this.applyProps(this.bankerCard1, this.cardProps.startCard);
        CoreLib.EventHandler.dispatchEvent("BCT_CARD_SHOWN", "p1");
        this.playerCard1.visible = true;
        this.doCardAnimation(this.bankerCard1, this.cardProps.bankerCard1, 0.15, 0.1, this.onB1Done.bind(this));
    }
    onB1Done () {
        this.showCard(this.bankerCard1, this.result.dealerCards[0]);
    }
    onB1CardShown () {
        CoreLib.EventHandler.dispatchEvent("BCT_CARD_SHOWN", "b1");
        this.applyProps(this.playerCard2, this.cardProps.startCard);
        this.doCardAnimation(this.playerCard2, this.cardProps.playerCard2, 0.2, 0.1, this.onP2Done.bind(this));
    }
    onP2Done () {
        this.showCard(this.playerCard2, this.result.playerCards[1]);
    }
    onP2CardShown () {
        CoreLib.EventHandler.dispatchEvent("BCT_CARD_SHOWN", "p2");
        this.applyProps(this.bankerCard2, this.cardProps.startCard);
        this.doCardAnimation(this.bankerCard2, this.cardProps.bankerCard2, 0.15, 0.1, this.onB2Done.bind(this));
    }
    onB2Done () {
        this.showCard(this.bankerCard2, this.result.dealerCards[1]);
    }
    onB2CardShown () {
        CoreLib.EventHandler.dispatchEvent("BCT_CARD_SHOWN", "b2");
        clearTimeout(this.thirdCardCheckTimer);
        this.thirdCardCheckTimer = setTimeout(this.checkForThirdCards.bind(this), 1000);

    }
    checkForThirdCards () {
        if (this.result.playerCards.length > 2) {
            this.applyProps(this.playerCard3, this.cardProps.startCard);
            this.doCardAnimation(this.playerCard3, this.cardProps.playerCard3, 0.2, 0.5, this.onP3Done.bind(this));
            CoreLib.EventHandler.dispatchEvent("PLAY_PLAYER_DRAW_CARD_VOICE");
        } else {
            this.dealB3Card();
        }
    }
    onP3Done () {
        this.showCard(this.playerCard3, this.result.playerCards[2]);
    }
    onP3CardShown () {
        CoreLib.EventHandler.dispatchEvent("BCT_CARD_SHOWN", "p3");
        this.dealB3Card();
    }
    dealB3Card () {
        if (this.result.dealerCards.length > 2) {
            this.applyProps(this.bankerCard3, this.cardProps.startCard);
            this.doCardAnimation(this.bankerCard3, this.cardProps.bankerCard3, 0.1, 0.5, this.onB3Done.bind(this));
            CoreLib.EventHandler.dispatchEvent("PLAY_BANKER_DRAW_CARD_VOICE");
        } else {
            this.checkForGameResult();
        }
    }

    onB3Done () {
        this.showCard(this.bankerCard3, this.result.dealerCards[2]);
    }

    onB3CardShown () {
        CoreLib.EventHandler.dispatchEvent("BCT_CARD_SHOWN", "b3");
        this.checkForGameResult();
    }

    checkForGameResult () {
        setTimeout(this.playPlayerTotalSound.bind(this), 1000);
    }


    doCardAnimation (card, props, duration = 0.75, delay = 0, callback = null) {
        card.visible = true;
        CoreLib.EventHandler.dispatchEvent("PLAY_CARD_DISTRIBUTION_SOUND");
        CoreLib.AnimationManager.animateTween(card, duration, {delay : delay, x : props.x, y : props.y, scaleX : props.scaleX, scaleY : props.scaleY, skewX : props.skewX, skewY : props.skewY, rotation : CoreLib.Util.getDefaultValue(CoreLib.Util.getRadians(props.rotation), 0), ease : Linear.easeOut, onComplete : callback});
    }
    showCard(card, value) {
        card.showCard(value);
        card.visible = true;
    }



    applyProps (card, prop) {
        card.x = prop.x;
        card.y = prop.y;
        card.scale.x = prop.scaleX;
        card.scale.y = prop.scaleY;
        card.skew.x = prop.skewX;
        card.skew.y = prop.skewY;
        if (prop.rotation != undefined) {
            card.rotation = CoreLib.Util.getRadians(prop.rotation);
        }
    }


    playPlayerTotalSound () {
        CoreLib.EventHandler.dispatchEvent("PLAY_PLAYER_TOTAL_VOICE", CoreLib.Model.GameConfig.playerHandTotal);
        setTimeout(this.playDealerTotalSound.bind(this), 1500);

    }

    playDealerTotalSound () {
        CoreLib.EventHandler.dispatchEvent("PLAY_BANKER_TOTAL_VOICE", CoreLib.Model.GameConfig.bankerHandTotal);
        clearTimeout(this.gameResultTimer);
        this.gameResultTimer = setTimeout(this.showGameResult.bind(this), 1500);
    }

    storeGameResult (data) {
        this.gameResult = data;
    }
    showGameResult () {
        CoreLib.EventHandler.dispatchEvent("BCT_LAST_CARDS_DEALT");
        CoreLib.EventHandler.dispatchEvent("BCT_SHOW_WINNING_IN_PANEL");
        CoreLib.EventHandler.dispatchEvent(CoreLib.SlotEvents.UPDATE_BALANCE);
        this.winnerComp.visible = true;
        let soundstr = this.getSoundString(this.result);
        CoreLib.EventHandler.dispatchEvent(soundstr);
        if (CoreLib.Model.GameConfig.playedGame) {
            if (this.gameResult.result.bets.tieBet > 0) {
                this.resultComp.visible = true;
                this.resultComp.setText(CoreLib.WrapperService.formatCurrency(CoreLib.Model.GameConfig.bctWinning));
            } else {
                if (this.result.winner != "tie") {
                    this.resultComp.visible = true;
                    this.resultComp.setText(CoreLib.WrapperService.formatCurrency(CoreLib.Model.GameConfig.bctWinning));
                } else {
                }
            }
        }
        this.winnerComp.setText(CoreLib.Util.getContent(this.result.winner + "Text"), this.result.winner);



    }

    getSoundString (result) {
        let str = soundList[result.winner];
        if (result.winner == "dealer" && result.easy6) {
            str = "Banker_and_easy6";
        } else if (result.winner == "player" && result.easy6) {
            str = "Player_and_easy6";
        } else if (result.winner == "dealer" && result.dealerPair) {
            str = "Banker_And_BankerPair_Win";
        } else if (result.winner == "dealer" && result.playerPair) {
            str = "Banker_And_PlayerPair_Win";
        } else if (result.winner == "player" && result.playerPair) {
            str = "Player_And_PlayerPair_Win";
        } else if (result.winner == "player" && result.dealerPair) {
            str = "Player_And_BankerPair_Win";
        }
        return str;
    }

    resizeViewComponents () {
        super.resizeViewComponents();
        if (CoreLib.Model.DeviceConfig.isDesktop) {

        } else {
            if (CoreLib.Model.DeviceConfig.isLandscape) {
                CoreLib.UIUtil.setPosition(this.gameTimer, 26, 480);
                this.gameTimer.scale.set(1.2);
                this.resultComp.scale.set(1);
            } else {
                this.gameTimer.scale.set(1.6);
                CoreLib.UIUtil.setPosition(this.gameTimer, 26, 660);
                this.resultComp.scale.set(1.2);
            }
        }
    }
};
