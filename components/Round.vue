<template>
  <div class="round-container">
    <img src="../assets/rounds.png" />
    {{round}}/5
  </div>
</template>

<script>
export default {
  props: {'round':Number},
};
</script>