import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp.vue'
import SignUpForm from '../components/SignUpForm.vue'
import NextSection from '../components/NextSection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp,
    children: [
      {
        path: '/',
        component: SignUpForm
      },
      {
        path: '/next_section',
        component: NextSection
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
