import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '@/components/PageHome.vue'

import PageCurriculumVitae from '@/components/PageCurriculumVitae.vue'

import PageNote from '@/components/PageNote.vue'
import PageNoteList from '@/components/PageNoteList.vue'

import PagetoolBox from '@/components/PageToolbox.vue'
import AnswerTransfer from '@/components/toolbox/AnswerTransfer.vue'
import KeyboardKeyLocatorVue from '@/components/toolbox/KeyboardKeyLocator.vue'
import TestToolVue from '@/components/toolbox/TestTool.vue'

import PageTest from '@/components/PageTest.vue'

const routes = [
    { path: '/', component: PageHome },
    { path: '/CurriculumVitae', component: PageCurriculumVitae },

    { path: '/Note/:file', component: PageNote},
    { path: '/NoteList', component: PageNoteList },

    { path: '/toolbox', component: PagetoolBox },
    { path: '/toolbox/AnswerTransfer', component: AnswerTransfer },
    { path: '/toolbox/KeyboardKeyLocator', component: KeyboardKeyLocatorVue },
    { path: '/toolbox/TestTool', component: TestToolVue },

    { path: '/test', component: PageTest },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
