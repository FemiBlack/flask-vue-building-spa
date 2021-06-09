import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
// import Wizard from './Wizard'
import FirstStep from '../components/steps/FirstStep.vue';
import SecondStep from '../components/steps/SecondStep.vue';
import ThirdStep from '../components/steps/ThirdStep.vue';
import FourthStep from '../components/steps/FourthStep.vue';
import StepFormValidation from '../components/steps/StepFormValidation.vue';

import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import ViewHouse from '../views/ViewHouse.vue';
import EditBuilding from '../views/EditBuilding.vue';
// import Login from '../views/Login.vue';
import Account from '../views/Account.vue';
import RegisterBuilding from '../views/RegisterBuilding.vue';

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
    component: Register,
    meta: { guest: true },
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    meta: { requireAuth: true },
  },
  {
    path: '/newbuilding',
    name: 'StepFormValidation',
    component: StepFormValidation,
    meta: { requireAuth: true },
  },
  {
    path: '/registerbuilding',
    name: 'RegisterBuilding',
    component: RegisterBuilding,
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
  },
  {
    path: '/viewhouse/:id',
    name: 'ViewHouse',
    component: ViewHouse,
    // meta: { guest: true },
  },
  {
    path: '/editbuilding/:id',
    name: 'EditBuilding',
    component: EditBuilding,
    meta: { requireAuth: true },
  },
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
    next('/login');
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
