import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import home from '../components/HomeContainer.vue'
import member from '../components/MemberContainer.vue'
import search from '../components/SearchContainer.vue'
import shopcar from '../components/ShopCarContainer.vue'
var router = new Router({
  routes: [
    {path:'/',redirect: './home'},
    {
      path: '/home',
      component: home
    },
    {
      path: '/member',
      component: member,
    },
    {
      path: '/search',
      component: search,
    },
    {
      path: '/shopcar',
      component: shopcar,
    }
   
  ],
  linkActiveClass: 'mui-active'
});
export default router;