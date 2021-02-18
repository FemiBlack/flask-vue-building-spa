import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store';
// import Wizard from './Wizard'
import FirstStep from '../components/steps/FirstStep'
import SecondStep from '../components/steps/SecondStep'
import ThirdStep from '../components/steps/ThirdStep'
import FourthStep from '../components/steps/FourthStep'

import Home from '../views/Home'
import Register from '../views/Register'
import Login from '../views/Login'
import Account from '../views/Account'
import RegisterBuilding from '../views/RegisterBuilding'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {guest: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {guest: true}
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: {requireAuth: true}
  },
  {
    path: '/registerbuilding',
    name: 'RegisterBuilding',
    component: RegisterBuilding,
    children: [
      {
        path: '/first',
        name: 'FirstStep',
        component: FirstStep
      },
      {
        path: '/second',
        name: 'SecondStep',
        component: SecondStep
      },
      {
        path: '/third',
        name: 'ThirdStep',
        component: ThirdStep
      },
      {
        path: '/fourth',
        name: 'FourthStep',
        component: FourthStep
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        next()
        return
      }
      next('/login')
    } else {
      next()
    }
})
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isAuthenticated) {
        next("/account");
        return;
      }
      next();
    } else {
      next();
    }
});

export default router;
