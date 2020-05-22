<template>
  <div class="cards-container" :class="{opacity:!action, disabledCardsClick}">
    <Card v-for="(card, idx) in cards" :key="idx" :card="card" :revealCards="revealCards" />
  </div>
</template>

<script>
import Card from "~/components/Card.vue";

export default {
  props: { cards:Array, revealCards: Boolean, action:Boolean, disabledCardsClick:Boolean },
  components:{
    Card
  }
};
</script>