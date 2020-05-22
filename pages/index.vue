<template>
  <div class="main-container">
    <div class="main-title-container">
      <h1 class="title">Three Card Monte</h1>
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