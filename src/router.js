import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from "./HomePage.vue";
import ExercisePage from "./ExercisePage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/exercise/:exercise', component: ExercisePage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})