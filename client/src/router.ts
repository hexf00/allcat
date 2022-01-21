import VueRouter from 'vue-router'

const router = new VueRouter({
  routes: [
    { path: '/', component: () => import('@/views/Index') },
    { path: '/config', component: () => import('@/views/Config') },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'config' && localStorage.getItem('host') === null) {
    next({ name: 'config' })
  } else {
    next()
  }
})

export default router