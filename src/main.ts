import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import MowglillePage from './views/projects/MowglillePage.vue'

const routes = [
  { 
    path: '/', 
    component: LandingPage,
    meta: {
        transition: 'slide-right'
    }
  },
  { 
    path: '/projects',
    component: ProjectsPage,
    meta: {
        transition: 'slide-left'
    }
 },
 {
    path: '/projects/mowglille',
    component: MowglillePage,
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to, from) => {
  
})

createApp(App).use(router).mount('#app')