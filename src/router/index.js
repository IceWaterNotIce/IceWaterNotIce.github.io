import { createRouter, createWebHistory } from 'vue-router'

import AnswerTransfer from '@/components/AnswerTransfer.vue'

const routes = [
    { path: '/', component: AnswerTransfer },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
