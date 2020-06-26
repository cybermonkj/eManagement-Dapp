import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Grade from '../views/Grades.vue'
import Profile from '../views/Profile.vue'
import Result from '../views/Results.vue'
import Registration from '../views/Registration.vue'
import Transcript from '../views/StudentTranscript.vue'
import AdminPanel from '../views/AdminPanel.vue'
import About from '../views/About.vue'
import SignUp from '../components/core/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/grade_point',
    name: 'GradePoint',
    component: Grade
  },

  {
    path: '/transcript',
    name: 'Transcript',
    component: Transcript
  },

  {
    path: '/result',
    name: 'Result',
    component: Result
  },

  {
    path: '/register/student/new', 
    name: 'Registration',
    component: Registration
  },

  {
    path: '/admin/panel',
    name: 'Admin_panel',
    component: AdminPanel
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/create/new/staff',
    name: 'Signup',
    component: SignUp
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
