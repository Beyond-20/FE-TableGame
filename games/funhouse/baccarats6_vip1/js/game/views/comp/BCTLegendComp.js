import { LibView } from "../../../../../../../../slot_core/corelib/pixiwrapper/LibView"
import { CoreLib } from "../../../../../../../../slot_core/corelib/core/CoreLib"
import { BCTBeadPlateElement } from './BCTBeadPlateElement'

export class BCTLegendComp extends LibView {
    constructor(config) {
        super(config);
        this.totalNumberText = this.elementsList["totalNumberText"];
        this.bankerText = this.elementsList["bankerText"];
        this.playerText = this.elementsList["playerText"];
        this.tieText = this.elementsList["tieText"];
        this.bankerpairText = this.elementsList["bankerpairText"];
        this.playerpairText = this.elementsList["playerpairText"];

        this.bankerIcon = this.elementsList["bankerIcon"];
        this.playerIcon = this.elementsList["playerIcon"];
        this.tieIcon = this.elementsList["tieIcon"];
        this.bankerpairIcon = this.elementsList["bankerpairIcon"];
        this.playerpairIcon = this.elementsList["playerpairIcon"];
        if (CoreLib.Model.DeviceConfig.isDesktop) {
            this.bankerIcon.scale.set(0.67);
            this.playerIcon.scale.set(0.67);
            this.tieIcon.scale.set(0.67);
            this.playerpairIcon.scale.set(0.67);
            this.bankerpairIcon.scale.set(0.67);
        }


    }

    updateResult(arr) {
        let countIndexWin = {};
        countIndexWin.playerPair = 0;
        countIndexWin.dealerPair = 0;

        if (arr) {
            arr.forEach((element) => {
                countIndexWin[element.winner] = (countIndexWin[element.winner] || 0) + 1;
                if (element.playerPair) {
                    countIndexWin.playerPair++;
                }
                if (element.dealerPair) {
                    countIndexWin.dealerPair++;
                }
            })
        }
        this.totalNumberText.text = "#" + arr.length;
        this.bankerText.text = countIndexWin.dealer;
        this.playerText.text = countIndexWin.player;
        this.tieText.text = countIndexWin.tie;
        this.bankerpairText.text = countIndexWin.dealerPair;
        this.playerpairText.text = countIndexWin.playerPair;

    }




};
