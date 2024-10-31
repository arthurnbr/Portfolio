import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import LandingPage from './views/LandingPage.vue'
import ProjectsPage from './views/ProjectsPage.vue'


const routes = [
  { path: '/', 
    component: LandingPage,
    meta: {
        transition: 'slide-fade'
    }
  },
  { path: '/projects',
    component: ProjectsPage,
    meta: {
        transition: 'slide-fade'
    }
 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.afterEach((to: any, from: any) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-fade' : 'slide-left'
  })

createApp(App).use(router).mount('#app')
