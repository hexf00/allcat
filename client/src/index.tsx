import 'xe-utils'
import 'vxe-table/lib/style.css'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import '@/themes/element-ui/element-ui'
import router from './router'

new Vue({
  router,
  render: (h) => <router-view />,
}).$mount('#app')
