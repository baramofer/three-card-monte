<template>
  <div class="main-container">
    <div class="main-title-container">
      <h1 class="title">Three Card Monte</h1>
      <!-- <h2 class="subtitle">Can you bit the bank?</h2> -->
    </div>
    <Game />
  </div>
</template>

<script>
import Game from "~/components/Game.vue";

export default {
  components: {
    Game
  }
};
</script>