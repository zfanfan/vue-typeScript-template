import { RouteConfig } from 'vue-router'

import Index from '@/layout/index.vue'
import Home from '@/layout/home.vue'
import Child from '@/layout/child.vue'

// 基础页面路由
export const baseRoutes: RouteConfig[] = [{
  path: '/index',
  name: 'index',
  meta: {
    title: '首页'
  },
  component: () => import('@/views/Home.vue')
}, {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录页'
  },
  component: () => import('@/views/Admin.vue')
}, {
  path: '/register',
  name: 'register',
  meta: {
    title: '注册页'
  },
  component: () => import('@/views/Admin.vue')
}]

// 大屏端页面路由
export const indexRoutes: RouteConfig[] = [{
  path: '/indexRoutes',
  name: 'indexRoutes',
  redirect: '/indexRoutes/Admin1',
  component: Index,
  children: [{
    path: 'Admin1',
    name: 'Admin1',
    meta: {
      title: '大屏端1'
    },
    component: () => import('@/views/Admin.vue')
  }, {
    path: 'Home1',
    name: 'Home1',
    meta: {
      title: '大屏端2'
    },
    component: () => import('@/views/Home.vue')
  }]
}]

// 后台管理系统页面路由
export const homeRoutes: RouteConfig[] = [{
  path: '/homeRoutes',
  name: 'homeRoutes',
  redirect: '/homeRoutes/Admin2',
  component: Home,
  children: [{
    path: 'Admin2',
    name: 'Admin2',
    meta: {
      title: '后台管理系统1'
    },
    component: () => import('@/views/Admin.vue')
  }, {
    path: 'Home2',
    name: 'Home2',
    meta: {
      title: '后台管理系统2'
    },
    component: () => import('@/views/Home.vue')
  }]
}]

// 其他系统页面路由
export const childRoutes: RouteConfig[] = [{
  path: '/childRoutes',
  name: 'childRoutes',
  redirect: '/childRoutes/Admin3',
  component: Child,
  children: [{
    path: 'Admin3',
    name: 'Admin3',
    meta: {
      title: '其他系统1'
    },
    component: () => import('@/views/Admin.vue')
  }, {
    path: 'Home3',
    name: 'Home3',
    meta: {
      title: '其他系统2'
    },
    component: () => import('@/views/Home.vue')
  }]
}]
