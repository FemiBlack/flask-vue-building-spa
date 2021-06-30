import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

import Home from '@/views/Home.vue';
import ViewHouse from '@/views/ViewHouse.vue';
import Account from '@/views/Account.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/bulma',
    name: 'Bulma',
    component: () => import(/*webpackChunkName: "Bulma"*/'@/views/Bulma.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/*webpackChunkName: "Register"*/'@/views/Register.vue'),
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
    // name: 'RegisterBuilding',
    component: () => import(/*webpackChunkName: "RegisterBuilding"*/ '@/views/RegisterBuilding.vue'),
    children: [
      {
        path: '',
        alias: 'first',
        name: 'FirstStep',
        component: () => import(/*webpackChunkName: "Field One"*/ '@/components/Wizard.vue'),
      },
      {
        path: 'second/:id',
        name: 'SecondStep',
        component: () => import(/*webpackChunkName: "Field Two"*/ '@/components/EditWizard.vue'),
      },
      {
        path: 'third/:id',
        name: 'ThirdStep',
        component: () => import(/*webpackChunkName: "Field Two"*/ '@/components/LastStepWizard.vue'),
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: '/viewhouse/:id',
    name: 'ViewHouse',
    component: ViewHouse,
  },

  //   // beforeEnter: (to, from, next) => {
  //   //   const exists = store.auth.find(
  //   //     destination => destination.slug === to.params.slug
  //   //   );
  //   //   if (exists) {
  //   //     next()
  //   //   }
  //   //   else {
  //   //     next({ name: 'notFound' })
  //   //   }
  //   // },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import(/*webpackChunkName: "NotFound"*/ '../views/NotFound.vue'),
  }
];

const router = new VueRouter({
  mode: 'hash',
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
