<template>
  <div class="card-container" @click="cardClicked">
    <div class="flip-card" :class="{revealCards}">
      <div class="flip-card-inner" :class="{revealCards}">
        <div class="flip-card-front" :class="{revealCards}">
          <img src="../assets/card.jpg" />
        </div>
        <div class="flip-card-back">{{card}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { revealCards: Boolean, card: String },
  methods: {
    cardClicked() {
      $nuxt.$emit("toggle-timer");
      $nuxt.$emit("card-clicked", this.$vnode.key + 1);
      // this.$emit("cardClicked", this.$vnode.key + 1);
    }
  }
};
</script>