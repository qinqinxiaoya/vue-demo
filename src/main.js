//入口文件
import Vue from 'vue';
//导入mint-ui包
import {Header,Swipe, SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引用mui样式
import './assets/mui/css/mui.min.css';
import './assets/mui/css/icons-extra.css';
//导入app根组件
import app from './App.vue';
//引入路由包
import Router from 'vue-router';
Vue.use(Router);
//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

//导入路由模块
import router from './router/index.js';


var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router//将路由模块挂载到实例对象上
});