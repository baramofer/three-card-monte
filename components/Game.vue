<template>
  <section class="game-container">
    <Timer @timerFinish="gameOver" />

    <div class="cards-container">
      <Card v-for="(card, idx) in cards"
                  :key="idx"
                  :type="card.type"
                  :revealCard="revealCard" />
    </div>
    <button class="game-btn" @click="createGame">{{newGameBtn}}</button>
    <button class="game-btn" @click="revealCard=!revealCard">flip</button>
  </section>
</template>

<script>
import Timer from "~/components/Timer.vue";
import Card from "~/components/Card.vue";
import HttpService from "../services/HttpService";
import UtilsService from "../services/UtilsService";

export default {
  data() {
    return {
      gameId: null,
      revealCard: false,
      cards: [1,2,3],
      round: 1
    };
  },
  components: {
    Card,
    Timer
  },
  computed: {
    newGameBtn() {
      return this.gameId ? "Restart new game" : "Start game";
    }
  },
  methods: {
    gameOver() {
      console.log("gameOver");
    },
    async playRound(cardNum) {
      this.cards = await HttpService.post({
        data: {
          action: "play",
          game_id: this.gameId,
          round: this.round,
          card: this.cardNum
        }
      });
      console.log(this.cards);
    },
    async createGame() {
      const createGameApi = await HttpService.post({ data: { action: "start" } });
      this.gameId = createGameApi.data.game_id;
      if(this.gameId) playRound()
      console.log(this.gameId, 'game has started');
    }
  }
};
</script>