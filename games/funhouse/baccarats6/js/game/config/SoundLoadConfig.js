export const GAME_SOUND_CONFIG = {
    basePath: 'gameassets/',
    commonSoundPath : "../common/",
    properties : {
        VOLUME: 1,
        MUTE: false,
        FADE_TIME: 1000,
    },
    soundFiles: [
        {name : "This Is Jazz", type : "game", soundType : "ambient", loop : true, playEvents:["PLAY_BCT_BGMUSIC"], volume : 0.2},
        {name : "Card Flip", type : "game", loop : false, playEvents:["PLAY_CARD_FLIP_SOUND"], volume : 1},
        {name : "Card from the Deck 2", type : "game", loop : false, playEvents:["PLAY_CARD_DISTRIBUTION_SOUND"], volume : 1},
        {name : "Chips Bet 02", type : "game", loop : false, playEvents:["PLAY_CHIP_PLACEMENT_SOUND"], volume : 1},
        {name : "Place_Your_Bet_Please", type : "game", loop : false, playEvents:["PLAY_PLACE_BET_VOICE"], volume : 1},
        {name : "NoMoreBets_Please", type : "game", loop : false, playEvents:["PLAY_NOMORE_BETS_VOICE"], volume : 1},
        {name : "Player_Have_0", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 0, volume : 1},
        {name : "Player_Have_1", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 1, volume : 1},
        {name : "Player_Have_2", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 2, volume : 1},
        {name : "Player_Have_3", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 3, volume : 1},
        {name : "Player_Have_4", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 4, volume : 1},
        {name : "Player_Have_5", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 5, volume : 1},
        {name : "Player_Have_6", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 6, volume : 1},
        {name : "Player_Have_7", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 7, volume : 1},
        {name : "Player_Have_8", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 8, volume : 1},
        {name : "Player_Have_9", type : "game", loop : false, playEvents:["PLAY_PLAYER_TOTAL_VOICE"], matchParam : 9, volume : 1},
        {name : "Banker_Have_0", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 0, volume : 1},
        {name : "Banker_Have_1", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 1, volume : 1},
        {name : "Banker_Have_2", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 2, volume : 1},
        {name : "Banker_Have_3", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 3, volume : 1},
        {name : "Banker_Have_4", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 4, volume : 1},
        {name : "Banker_Have_5", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 5, volume : 1},
        {name : "Banker_Have_6", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 6, volume : 1},
        {name : "Banker_Have_7", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 7, volume : 1},
        {name : "Banker_Have_8", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 8, volume : 1},
        {name : "Banker_Have_9", type : "game", loop : false, playEvents:["PLAY_BANKER_TOTAL_VOICE"], matchParam : 9, volume : 1},
        {name : "Banker_draw_card", type : "game", loop : false, playEvents:["PLAY_BANKER_DRAW_CARD_VOICE"], volume : 1},
        {name : "Player_draw_card", type : "game", loop : false, playEvents:["PLAY_PLAYER_DRAW_CARD_VOICE"], volume : 1},
        {name : "5 4 3 2 1", type : "game", loop : false, playEvents:["PLAY_COUNTDOWN_TIME"], volume : 1},
        {name : "Sound_Effect_Countdown_2", type : "game", loop : false, playEvents:["PLAY_COUNTDOWN_FINALBEEP"], volume : 1},
        {name : "Banker_And_PlayerPair_Win", type : "game", loop : false, playEvents:["Banker_And_PlayerPair_Win"], volume : 1},
        {name : "Banker_And_BankerPair_Win", type : "game", loop : false, playEvents:["Banker_And_BankerPair_Win"], volume : 1},
        {name : "Banker_Win", type : "game", loop : false, playEvents:["Banker_Win"], volume : 1},
        {name : "Player_Win", type : "game", loop : false, playEvents:["Player_Win"], volume : 1},
        {name : "Banker_and_super6", type : "game", loop : false, playEvents:["Banker_and_super6"], volume : 1},
        {name : "Player_And_BankerPair_Win", type : "game", loop : false, playEvents:["Player_And_BankerPair_Win"], volume : 1},
        {name : "Player_And_PlayerPair_Win", type : "game", loop : false, playEvents:["Player_And_PlayerPair_Win"], volume : 1},
        {name : "tie", type : "game", loop : false, playEvents:["Tie_Win"], volume : 1},


    ]
};
