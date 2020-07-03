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
const fb = require('../firebaseConfig')

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
    component: Dashboard,
    meta: { requireAuth: true }
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requireAuth: true }
  },

  {
    path: '/grade_point',
    name: 'GradePoint',
    component: Grade,
    meta: { requireAuth: true }
  },

  {
    path: '/transcript',
    name: 'Transcript',
    component: Transcript,
    meta: { requireAuth: true }
  },

  {
    path: '/result',
    name: 'Result',
    component: Result,
    meta: { requireAuth: true }
  },

  {
    path: '/register/student/new', 
    name: 'Registration',
    component: Registration,
    meta: { requireAuth: true }
  },

  {
    path: '/admin/panel',
    name: 'Admin_panel',
    component: AdminPanel,
    meta: { requireAuth: true }
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

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requireAuth && !fb.auth.currentUser) {
    next('/')
  } else {
    next()
  } 
})

export default router
