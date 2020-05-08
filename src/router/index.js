import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/veevalidate',
    name: 'Veevalidate',
    component: () => import('../views/Veevalidate/index.vue'),
  },
  {
    path: '/vuelidate',
    name: 'Vuelidate',
    component: () => import('../views/Vuelidate/index.vue'),
  },
  {
    path: '/validatorjs',
    name: 'Validatorjs',
    component: () => import('../views/ValidatorJS/index.vue'),
  },
  {
    path: '/validatejs',
    name: 'Validatejs',
    component: () => import('../views/ValidateJS/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
