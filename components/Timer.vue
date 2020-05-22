<template>
  <div class="timer-container">
    <img src="../assets/clock.png" alt />
    {{currTimer}}
  </div>
</template>

<script>
export default {
  props: { isTimerOn: Boolean },
  data() {
    return {
      currTimer: 15,
      timerInterval: null
    };
  },
  methods: {
    toggleTimer() {
      if (this.currTimer >= 15 && this.isTimerOn) {
        this.timerInterval = setInterval(() => {
          this.currTimer = this.currTimer - 1;
          if (this.currTimer === 0) {
            clearInterval(this.timerInterval);
            $nuxt.$emit("timer-finish");
          }
        }, 1000);
      } else clearInterval(this.timerInterval);
    },
    resetTimer() {
      this.currTimer = 15;
      this.toggleTimer();
    }
  },
  created() {
    this.$nuxt.$on("toggle-timer", () => this.toggleTimer());
    this.$nuxt.$on("reset-timer", () => this.resetTimer());
  },
  destroyed() {
    clearInterval(this.timerInterval);
  }
};
</script>