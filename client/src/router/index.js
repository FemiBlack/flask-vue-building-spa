import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import FirstStep from '../components/steps/FirstStep.vue';
import SecondStep from '../components/steps/SecondStep.vue';
import ThirdStep from '../components/steps/ThirdStep.vue';
import FourthStep from '../components/steps/FourthStep.vue';

import Home from '../views/Home.vue';
import ViewHouse from '../views/ViewHouse.vue';
import Account from '../views/Account.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   {
    //     path: '/login',
    //     name: 'Login',
    //     component: Login,
    //     meta: { guest: true },
    //   },
    // ],
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/*webpackChunkName: "Register"*/'../views/Register.vue'),
    meta: { guest: true },
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { requiresAuth: true },
  },
  {
    path: '/registerbuilding',
    name: 'RegisterBuilding',
    component: () => import(/*webpackChunkName: "RegisterBuilding"*/ '../views/RegisterBuilding.vue'),
    children: [
      {
        path: '/first',
        name: 'FirstStep',
        component: FirstStep,
      },
      {
        path: '/second',
        name: 'SecondStep',
        component: SecondStep,
      },
      {
        path: '/third',
        name: 'ThirdStep',
        component: ThirdStep,
      },
      {
        path: '/fourth',
        name: 'FourthStep',
        component: FourthStep,
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/viewhouse/:id',
    name: 'ViewHouse',
    component: ViewHouse,
  },
  {
    path: '/editbuilding/:id',
    name: 'EditBuilding',
    component: () => import(/*webpackChunkName: "EditBuilding"*/ '../views/EditBuilding.vue'),
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if (exists){
        next()
      }
      else {
        next({name: 'notFound'})
      }
    },
  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () =>import(/*webpackChunkName: "NotFound"*/ '../views/NotFound.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/');
  } else {
    next();
  }
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next('/account');
      return;
    }
    next();
  } else {
    next();
  }
});

export default router;
