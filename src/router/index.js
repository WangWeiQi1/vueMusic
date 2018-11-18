import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//路由异步加载
const Recommend = ((resolve) => {
  import('components/recommend/recommend').then((module)=>{
    resolve(module);
  })
})
const Singer = ((resolve) => {
  import('components/singer/singer').then((module)=>{
    resolve(module);
  })
})
const Rank = ((resolve) => {
  import('components/rank/rank').then((module)=>{
    resolve(module);
  })
})
const Search = ((resolve) => {
  import('components/search/search').then((module)=>{
    resolve(module);
  })
})
const SingerDetail = ((resolve) => {
  import('components/singer-detail/singer-detail').then((module)=>{
    resolve(module);
  })
})
const Disc = ((resolve) => {
  import('components/disc/disc').then((module)=>{
    resolve(module);
  })
})
const TopList = ((resolve) => {
  import('components/top-list/top-list').then((module)=>{
    resolve(module);
  })
})
const UserCenter = ((resolve) => {
  import('components/user-center/user-center').then((module)=>{
    resolve(module);
  })
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend',
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      children:[
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      children:[
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer,
      children:[
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
