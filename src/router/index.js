import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Slides from '@/components/Slides'
import Axios from '@/components/Axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/slides',
      name: 'Slides',
      component: Slides
    }, {
      path: '/axios',
      name: 'Axios',
      component: Axios
    }
  ]
})
