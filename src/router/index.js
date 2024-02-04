import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '@/components/PageHome.vue'

import PageNote from '@/components/PageNote.vue'

import PageToolBox from '@/components/PageToolBox.vue'
import AnswerTransfer from '@/components/toolbox/AnswerTransfer.vue'
import KeyboardKeyLocatorVue from '@/components/toolbox/KeyboardKeyLocator.vue'
import TestToolVue from '@/components/toolbox/TestTool.vue'

import PageTest from '@/components/PageTest.vue'

const routes = [
    { path: '/', component: PageHome },

    { path: '/Note', component: PageNote },

    { path: '/toolbox', component: PageToolBox },
    { path: '/toolbox/AnswerTransfer', component: AnswerTransfer },
    { path: '/toolbox/KeyboardKeyLocator', component: KeyboardKeyLocatorVue },
    { path: '/toolbox/TestTool', component: TestToolVue },

    { path: '/Test', component: PageTest },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
