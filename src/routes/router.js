import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    { 
      path: '/', 
      component: () => import(/* webpackChunkName: "CardMovie" */'../components/CardMovie')
    },
    { 
      path: '/movie/:id', 
      component: () => import(/* webpackChunkName: "CardMovieDetail" */'../components/CardMovieDetail'),
      name: 'CardMovieDetail',
      props: true
    },
  ]
  
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router