import 'xe-utils'
import 'vxe-table/lib/style.css'

import Vue from 'vue'

import '@/themes/element-ui/element-ui'

import App from './views/App'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
