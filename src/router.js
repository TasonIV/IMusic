import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './views/RecommendView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: Recommend,
    },
    {
      path: "/recommend",
      name:"recommend",
      component: Recommend,
      // children: [   //音乐列表 二级路由
      //   {
      //     path: ':id',
      //     name:'musicList',
      //     component: () => import('./components/ShowList/MusicList.vue')
      //   }
      // ]
    },
    {
      path: "/recommend/:id",
      name: "musicList",
      component: () => import('./components/ShowList/MusicList.vue')
    },

    {
      path: '/rank',
      name: 'rank',
      component: () => import('./views/RankView.vue'),
    },

    {
      path: "/rank/:id",
      name: "rankList",
      component: () => import('./components/ShowList/RankList.vue')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('./views/SingerView.vue')
    },
    {
      path: '/singer/:id',
      name: 'singerList',
      component: () => import('./components/ShowList/SingerList.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/SearchView.vue')
    },
    {
      path: '/mylike',
      name: 'mylike',
      component: () => import('./views/MyLikeView.vue')
    },

    {
      path:"/person",
      name:"person",
      component: () => import('./views/PersonView.vue')
    },

    {
      path: "/RankList/:id",
      name: "rankList",
      component: () => import('./components/ShowList/RankList.vue')
    },
    
    {
      path:"/recommendSongPlay",
      name:"recommendSongPlay",
      component: () => import('./components/Play/recommendSongPlay')
    },
    {
      path:"/play",
      name:"Play",
      component: () => import('./components/Play/Play')
    },
  ],

  linkActiveClass: "link-active",  //设置 导航栏的高亮功能 的样式类名
})
