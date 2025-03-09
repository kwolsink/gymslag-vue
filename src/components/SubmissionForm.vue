<script setup>
import {Select, InputNumber, FloatLabel, DatePicker, Button, Card} from "primevue";
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
  <Card>
    <template #title>Voeg een sessie toe</template>
    <template #content>
      <div class="form">
        <div class="row">
          <Select class="w-100" v-model="selected" :options="lifters" placeholder="Naam"></Select>
        </div>
        <div class="row h-row">
          <div class="p-r">
            <FloatLabel>
              <InputNumber v-model="weightKg" inputId="weight"></InputNumber>
              <label for="weight">Gewicht (in KG)</label>
            </FloatLabel>
          </div>
          <div>
            <FloatLabel>
              <InputNumber v-model="reps" inputId="reps"></InputNumber>
              <label for="reps">Reps</label>
            </FloatLabel>
          </div>
        </div>
        <div class="row">
          <FloatLabel>
            <DatePicker v-model="date" inputId="date"></DatePicker>
            <label for="date">Datum</label>
          </FloatLabel>
        </div>
        <div class="row">
          <Button type="submit" label="Submit" @click="handleSubmission()"></Button>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
}

.row {
  margin: 1em;
}

.h-row {
  display: flex;
  flex-direction: row;
}

.w-100 {
  width: 100%;
}

.p-r {
  padding-right: 1em;
}



</style>