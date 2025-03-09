<script setup>

</script>

<template>
  <div class="container">
    <h1><slot></slot></h1>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

</style>