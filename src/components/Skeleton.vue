<template>
  <div class="skeleton animate-pulse"></div>
</template>

<script>
export default {
  name: "Skeleton"
}
</script>

<style scoped>
.skeleton {
  border: 10px solid;
  margin: 10px 10px 10px 10px;
  width: 1500px;
  border-radius: 5px;/* As 4 bordas sólidas com 25px de espessura */
  border-color: lightgray; /* cores: topo, direita, inferior, esquerda */
}
</style>
