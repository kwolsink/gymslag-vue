<script setup>
import {Button} from "primevue";
import {router} from "./router.js";

function route(exercise) {
  router.push(`/exercise/${exercise}`)
}


</script>

<template>
  <div class="container">
    <div class="quadrant top-left">
      <Button class="exercise"  severity=“info” variant="outlined" @click="route('Bench')"><h2>Bench</h2></Button>
    </div>
    <div class="quadrant top-right">
      <Button class="exercise" severity=“warn” variant="outlined" @click="route('Squat')"><h2>Squat</h2></Button>
    </div>
    <div class="quadrant bottom-left">
      <Button class="exercise" severity=“danger” variant="outlined" @click="route('Overhead press')"><h2>Overhead press</h2></Button>
    </div>
    <div class="quadrant bottom-right">
      <Button class="exercise" severity=“help” variant="outlined" @click="route('Deadlift')"><h2>Deadlift</h2></Button>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.quadrant {
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-left { grid-area: 1 / 1; }
.top-right { grid-area: 1 / 2; }
.bottom-left { grid-area: 2 / 1; }
.bottom-right { grid-area: 2 / 2; }

.exercise {
  width: 300px;
  height: 150px;
  font-style: italic;
  margin: 1em;
}


</style>