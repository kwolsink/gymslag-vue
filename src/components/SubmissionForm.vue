<script setup>
import {Select, InputNumber, FloatLabel, DatePicker, Button} from "primevue";
import {ref} from "vue";


const emit = defineEmits(["submit"])

const selected = ref()
const lifters = [
    "Kasper",
    "Dieter",
    "Jerra",
    "Jos",
    "Patrick",
    "Ben",
    "Berend",
    "Chris",
    "Connie",
    "Bergschijt",
    "Entes",
    "Kreupel",
    "Mark",
    "Mico",
    "Rogier",
    "Rutger",
    "Sander"
]

const weightKg = ref()
const reps = ref()
const date = ref()

function handleSubmission() {
  const entry = {
    name: selected.value,
    reps: reps.value,
    weightKg: weightKg.value,
    date: date.value
  }
  selected.value = undefined
  reps.value = undefined
  weightKg.value = undefined
  date.value = undefined

  emit('submit', entry)
}

</script>

<template>
  <form @submit.prevent>
    <div>
      <Select v-model="selected" :options="lifters" placeholder="Naam"></Select>
    </div>
    <div class="h-row">
      <FloatLabel>
        <InputNumber v-model="weightKg" inputId="weight"></InputNumber>
        <label for="weight">Gewicht (in KG)</label>
      </FloatLabel>
      <FloatLabel>
        <InputNumber v-model="reps" inputId="reps"></InputNumber>
        <label for="reps">Reps</label>
      </FloatLabel>
    </div>
    <div>
      <FloatLabel>
        <DatePicker v-model="date" inputId="date"></DatePicker>
        <label for="date">Datum</label>
      </FloatLabel>
    </div>
    <div>
      <Button type="submit" label="Submit" @click="handleSubmission()"></Button>
    </div>
  </form>
</template>

<style scoped>

.h-row {
  display: flex;
  flex-direction: row;
}

</style>