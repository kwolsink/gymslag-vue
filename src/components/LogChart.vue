<script setup>
import Chart from 'chart.js/auto'
import 'chartjs-adapter-luxon'
import {nextTick, watch} from "vue"
import {calculateOneRepMax} from "../model/functions.js"

const props = defineProps({
  logEntries: Array
})

watch(() => props.logEntries, async (logEntries) => {
  await nextTick()
  render(logEntries)
}, {deep: true});


function toChartData(logEntries) {
  const entriesByName = logEntries.reduce((map, entry) => {
    if (!map.has(entry.name)) {
      map.set(entry.name, []);
    }
    map.get(entry.name).push(entry);
    return map;
  }, new Map());

  console.log([...entriesByName])

  const datasets = [...entriesByName].map((entry) => {

    return {
      label: entry[0],
      data: entry[1].map((entry) => {
        return {
          x: entry.date,
          y: calculateOneRepMax(entry.weightKg, entry.reps)
        }
      })
    }
  })

  return {
    // labels: getLastMonths(),
    datasets: datasets
  }

}

function getLastMonths(count = 7) {
  const now = new Date();
  return Array.from({length: count}, (_, i) => new Date(now.getFullYear(), now.getMonth() - i, 1));
}

let chart;

function render(logEntries) {
  if (chart !== undefined) {
    chart.destroy()
  }
  if (logEntries.length !== 0) {
    const ctx = document.getElementById("log-entries")
    chart = new Chart(ctx, {
      type: "line",
      data: toChartData(logEntries),
      options: {
        scales: {
          x: {
            type: 'time'
          }
        }
      }
    })
  }
}


</script>

<template>
  <canvas v-if="logEntries.length > 0" id="log-entries"></canvas>
  <p v-else>Nog geen data</p>
</template>

<style scoped>
p {
  font-style: italic;
}
</style>