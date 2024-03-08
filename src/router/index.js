import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '@/components/PageHome.vue'

import PageCurriculumVitae from '@/components/PageCurriculumVitae.vue'

import PageNote from '@/components/PageNote.vue'
import PageNoteList from '@/components/PageNoteList.vue'

import PageTools from '@/components/PageTools.vue'
import AnswerTransfer from '@/components/tools/AnswerTransfer.vue'
import KeyboardKeyLocatorVue from '@/components/tools/KeyboardKeyLocator.vue'
import KeyboardTraining from '@/components/tools/KeyboardTraining.vue'
import TestToolVue from '@/components/tools/TestTool.vue'

import PageTest from '@/components/PageTest.vue'

const routes = [
    { path: '/', component: PageHome },
    { path: '/CurriculumVitae', component: PageCurriculumVitae },

    { path: '/Note/:file', component: PageNote },
    { path: '/NoteList', component: PageNoteList },

    { path: '/tools', component: PageTools },
    { path: '/tools/AnswerTransfer', component: AnswerTransfer },
    { path: '/tools/KeyboardKeyLocator', component: KeyboardKeyLocatorVue },
    { path: '/tools/KeyboardTraining', component: KeyboardTraining },
    { path: '/tools/TestTool', component: TestToolVue },

    { path: '/test', component: PageTest },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
