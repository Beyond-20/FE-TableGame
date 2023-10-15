export const BCT_BETBALANCE_CONFIG = {
    name :"betBalanceComp", type : "Comp", class : "BCTBetBalanceComp", y : 1320,
        Elements : [
            {name : "guideRect", type : "Sprite", image : "betpanelbg"},
            {name : "guideRectM", type : "Graphics", width : 2560, height : 120, color : 0x775937, alpha : 1},
            {name : "panelbg", type : "Sprite", image : "panelbg", mobileImage : "buttonsbgMobile", height : 120},
            {name : "balanceComp", type : "Comp", class : "BetBalanceElement",
                Elements : [
                    {name : "titleText", type : "Text", content : "balanceCaps", style : "gameFont1Style", fontSize : 30, mFontSize : 48, anchor : {x : 0.5, y : 0}},
                    {name : "valueText", type : "Text", contentText : "$ 20000.00", style : "gameFont1Style", fontSize : 30, mFontSize : 48, anchor : {x : 0.5, y : 0}}
                ]
            },
            {name : "stakeComp", type : "Comp", class : "BetBalanceElement", x : 2330, y : 10,
                Elements : [
                    {name : "titleText", type : "Text", content : "totalBetsCaps", style : "gameFont1Style", fontSize : 30, mFontSize : 48, anchor : {x : 0.5, y : 0}},
                    {name : "valueText", type : "Text", contentText : "$ 20.00", style : "gameFont1Style", fontSize : 30, mFontSize : 48, anchor : {x : 0.5, y : 0}}
                ]
            },
        ],
        layoutData : {

        }

}
