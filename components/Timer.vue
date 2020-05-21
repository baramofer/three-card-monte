<template>
  <div class="timer-container">
      {{currTimer}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            currTimer:15,
            timerInterval:null
        }
    },
    methods:{
        startTimer(){
             this.timerInterval = setInterval(() => {
                this.currTimer = this.currTimer - 1
                if(this.currTimer===0) finishTimer()
                }, 1000);
        },
        resetTimer(){
            clearInterval(this.timerInterval)
            this.currTimer = 15
        },
        timerFinish(){
            clearInterval(this.timerInterval)
            this.$emit('timerFinish')
        }
    },
    destroyed(){
        clearInterval(this.timerInterval)
    }
}
</script>