<template>
  <section class="game-container">
    <Timer @timerFinish="gameOver" />
    <div class="cards-container">

      <Card :revealCard="revealCard"/>
      <Card />
      <Card />
    </div>
    <button class="game-btn" @click="startGame">{{newGameBtn}}</button>
    <button class="game-btn" @click="revealCard=!revealCard">flip</button>
  </section>
</template>

<script>
import Timer from "~/components/Timer.vue";
import Card from "~/components/Card.vue";
import HttpService from "../services/HttpService";
import axios from 'axios'

export default {
  data(){
    return{
      gameId:null,
      revealCard:false
    }
  },
  components: {
    Card,
    Timer
  },
  computed:{
    newGameBtn(){
      return this.gameId? 'Restart new game' : 'Start game'
    }
  },
  methods: {
    gameOver() {
      console.log("gameOver");
    },
    async startGame(){
        this.gameId = await axios.post('https://mapi.xchangepro.net/tests/tcm/ofer_baram/', {"data":{"action":"start"}}, { useCredentails: true })
        console.log(this.game);
        this.gameId = await HttpService.post({"data":{"action":"start"}})
        console.log(this.game);
    }
  },
};
</script>