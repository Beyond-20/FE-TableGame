import {coreClassUtil} from "../../../../../../slot_core/corelib/core/CoreClassUtil";
import {slotModel} from "../../../../../../slot_core/corelib/models/SlotModel";
import { BCTPanelComp } from './views/comp/BCTPanelComp';
import { BCTBigRoadComp } from './views/comp/BCTBigRoadComp';
import { BCTBeadPlateComp } from './views/comp/BCTBeadPlateComp';
import { BCTButtonsComp } from './views/comp/BCTButtonsComp';
import { BCTCustomBetBtn } from './views/comp/BCTCustomBetBtn';
import { BCTCardsAreaComp } from './views/comp/BCTCardsAreaComp';
import {MChipPanelComp} from "../../../../../../slot_core/corelib/views/tgcomps/MChipPanelComp";
import {BCTBetBalanceComp} from "../../../../../../slot_core/corelib/views/tgcomps/BCTBetBalanceComp";
import {BetBalanceElement} from "../../../../../../slot_core/corelib/views/tgcomps/BetBalanceElement";
import { BCTGameBetStatusComp } from './views/comp/BCTGameBetStatusComp'
import { BCTResultComp } from './views/comp/BCTResultComp'
import { BCTWarningComp } from './views/comp/BCTWarningComp'
import { BCTRoadmapComp } from './views/comp/BCTRoadmapComp'
import { BCTGameButtonsComp } from './views/comp/BCTGameButtonsComp'
import { BCTLegendComp } from './views/comp/BCTLegendComp'
import { BCTRoadmapBG } from './views/comp/BCTRoadmapBG'
import { BCTWinnerComp } from './views/comp/BCTWinnerComp'
import { BCTBigEyeComp } from '../../../baccarats6/js/game/views/comp/BCTBigEyeComp'
import { BCTSmallRoadComp } from '../../../baccarats6/js/game/views/comp/BCTSmallRoadComp'
import { BCTCockroachPigComp } from '../../../baccarats6/js/game/views/comp/BCTCockroachPigComp'

class GameUtil {
    constructor() {
    }
    getGameClass (string, config) {
        let element = null;
        switch (string) {
            case "BCTPanelComp" :
                element = new BCTPanelComp(config);
                break;
            case "BCTBigRoadComp" :
                element = new BCTBigRoadComp(config);
                break;
            case "BCTBeadPlateComp" :
                element = new BCTBeadPlateComp(config);
                break;
            case "BCTLegendComp" :
                element = new BCTLegendComp(config);
                break;
            case "BCTRoadmapBG" :
                element = new BCTRoadmapBG(config);
                break;
            case "BCTButtonsComp" :
                element = new BCTButtonsComp(config);
                break;
            case "BCTCustomBetBtn" :
                element = new BCTCustomBetBtn(config);
                break;
            case "BCTCardsAreaComp" :
                element = new BCTCardsAreaComp(config);
                break;
            case "MChipPanelComp" :
                element = new MChipPanelComp(config);
                break;
            case "BCTBetBalanceComp" :
                element = new BCTBetBalanceComp(config);
                break;
            case "BetBalanceElement" :
                element = new BetBalanceElement(config);
                break;
            case "BCTGameBetStatusComp" :
                element = new BCTGameBetStatusComp(config);
                break;
            case "BCTResultComp" :
                element = new BCTResultComp(config);
                break;
            case "BCTWarningComp" :
                element = new BCTWarningComp(config);
                break;
            case "BCTRoadmapComp" :
                element = new BCTRoadmapComp(config);
                break;
            case "BCTGameButtonsComp" :
                element = new BCTGameButtonsComp(config);
                break;
            case "BCTWinnerComp" :
                element = new BCTWinnerComp(config);
                break;
            case "BCTBigEyeComp" :
                element = new BCTBigEyeComp(config);
                break;
            case "BCTSmallRoadComp" :
                element = new BCTSmallRoadComp(config);
                break;
            case "BCTCockroachPigComp" :
                element = new BCTCockroachPigComp(config);
                break;
            default :
                break;
        }
        if (!element) {
            element = coreClassUtil.getGameClass(string, config);
        }
        return element;
    }
    getReelView (index) {
        let reelview = slotModel.getReelsView();
        return reelview[index];
    }
}
export const gameUtil = new GameUtil();
