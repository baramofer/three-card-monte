<template>
  <div class="card-container" @click="cardClicked">
    <div class="flip-card" :class="{revealCard:revealCard}">
      <div class="flip-card-inner" :class="{revealCard:revealCard}">
        <div class="flip-card-front" :class="{revealCard:revealCard}">
          <img src="../assets/card.jpg" />
        </div>
        <div class="flip-card-back">{{type}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{'revealCard': Boolean, 'type':String},
  data(){
    return{
    }
  },
  methods: {
    cardClicked() {
      console.log(this.type);
      
    }
  }
};
</script>