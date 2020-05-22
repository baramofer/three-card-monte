import HttpService from "../services/HttpService";
import UtilsService from "../services/UtilsService";

const GAME_ID_KEY = 'game_id';

const createGame = async () => {
    const createGameApi = await HttpService.post({ data: { action: "start" } })
    const gameId = createGameApi.data.game_id
    UtilsService.saveToStorage(GAME_ID_KEY, gameId);
    return gameId;
};

const playRound = async (card, round) => {
    const game_id = UtilsService.loadFromStorage(GAME_ID_KEY);
    const playRoundApi = await HttpService.post({
        data: {
            action: "play",
            game_id,
            round,
            card,
        }
    })
    return playRoundApi.data;
}

export default {
    createGame,
    playRound
}