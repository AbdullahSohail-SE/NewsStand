import userStore from '../store/users/index'

const routes = [{
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
      path: '',
      component: () => import('pages/Index.vue')
    },
    {
      name:"categories",
      path: '/categories/:type',
      component: () => import('pages/Categories.vue'),
    }
  ],
  beforeEnter(to,from,next){
    if(userStore.state.currentUser)
    {
      
      next();
      
    }
    else
    next('/users/signIn');
  }
},
{
  path:'/users',
  component:() => import('layouts/users'),
  children:[
    {
      path:'signIn',
      component:() => import ('pages/signIn')
    },
    {
      path:'signUp',
      component:() => import ('pages/signUp')
    }
  ]
}


]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
