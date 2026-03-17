import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'
import Project from './project.vue'
import contact from './contact.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/project', component:  Project},
  {path: '/contact', component:  contact}
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})