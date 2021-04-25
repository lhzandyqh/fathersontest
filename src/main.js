import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from '@/routers'
import echarts from 'echarts'

const router = new VueRouter({
  mode: 'hash',
  routes: routers
})
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
