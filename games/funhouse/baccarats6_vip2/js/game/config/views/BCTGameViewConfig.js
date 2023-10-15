import {BCT_BG_CONFIG} from './BCTBGConfig'
import { BCT_PANEL_CONFIG } from './BCTPanelConfig'
import { BCT_CARDSAREA_CONFIG } from './BCTCardsAreaConfig'
import { BCT_CHIPSPANEL_CONFIG } from './BCT_ChipsPanelConfig'
import { BCT_BETBALANCE_CONFIG } from './BCTBetBalanceConfig'
import { ALERT_POPUP_CONFIG } from '../../../../../../../../slot_core/corelib/config/AlertPopupConfig'
import { DESKTOP_BUTTONS_CONFIG } from '../../../../../../../../slot_core/corelib/config/SlotDesktopButtonsConfig'
import { BCT_ROADMAP_CONFIG } from './BCTRoadmapConfig'
import { BCT_BUTTONS_CONFIG } from './BCTButtonsConfig'
import { BCT_SETTINGS_CONFIG } from './BCT_SETTINGS_CONFIG'
import { BCT_MOBILE_SETTINGS_CONFIG } from './BCT_MOBILE_SETTINGS_CONFIG'
export const BCT_GAMEVIEW_CONFIG = {
    name : "BCT_GAMEVIEW_CONFIG",
    Elements : [
        BCT_BG_CONFIG,
        BCT_PANEL_CONFIG,
        BCT_CARDSAREA_CONFIG,
        BCT_BETBALANCE_CONFIG,
        BCT_CHIPSPANEL_CONFIG,
        DESKTOP_BUTTONS_CONFIG,
        BCT_ROADMAP_CONFIG,
        BCT_BUTTONS_CONFIG,
        BCT_SETTINGS_CONFIG,
        BCT_MOBILE_SETTINGS_CONFIG,
        ALERT_POPUP_CONFIG

    ]
}
