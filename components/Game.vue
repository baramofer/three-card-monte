<template>
  <section class="game-container">
    <Msg v-if="msg" :msg="msg" />
    <div class="round-timer-container">
      <Timer :isTimerOn="disabledCardsClick" />
      <Round :round="round" />
    </div>
    <CardList
      :cards="cards"
      :revealCards="revealCards"
      :action="action"
      :disabledCardsClick="disabledCardsClick"
    />
    <button class="game-btn" @click="createGame" :disabled="action">{{newGameBtn}}</button>
  </section>
</template>

<script>
import Timer from "~/components/Timer.vue";
import Round from "~/components/Round.vue";
import Msg from "~/components/Msg.vue";
import CardList from "~/components/CardList.vue";
import GameSerivce from "../services/GameService";
import UtilsService from "../services/UtilsService";

export default {
  data() {
    return {
      gameId: null,
      revealCards: false,
      cards: ["C", "C", "C"],
      round: 1,
      action: false,
      disabledCardsClick: true,
      msg: null
    };
  },
  components: {
    Timer,
    Round,
    Msg,
    CardList
  },
  computed: {
    newGameBtn() {
      return this.round > 1 && !this.action ? "Restart new game" : "Start game";
    }
  },
  methods: {
    gameOver() {
      this.action = false;
      this.msg = "Game Over, play again?";
    },
    async playRound(cardIdx) {
      this.disabledCardsClick = true;
      const res = await GameSerivce.playRound(cardIdx, this.round);
      this.cards = Object.values(res.cards)[0];
      const status = Object.values(res.status)[0];
      this.revealCards = !this.revealCards;
      if (status === "l") this.gameOver();
      else {
        setTimeout(() => {
          this.disabledCardsClick = false;
          this.round++;
          this.revealCards = !this.revealCards;
          $nuxt.$emit("reset-timer");
        }, 2000);
      }
    },
    async createGame() {
      try {
        this.msg = null;
        this.gameId = await GameSerivce.createGame();
        this.action = true;
        this.revealCards = false;
        this.round = 1;
        this.disabledCardsClick = false;
        $nuxt.$emit("reset-timer");
      } catch (e) {
        console.log(e);
      }
    }
  },
  created() {
    this.$nuxt.$on("timer-finish", () => this.gameOver());
    this.$nuxt.$on("card-clicked", cardIdx => this.playRound(cardIdx));
  }
};
</script>