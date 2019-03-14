import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/views/layout/Layout';

Vue.use(Router);

export const routes = [
  {
    path: '/',
    component: Layout,
    meta: {
      title: 'Dashboard',
      icon: 'icon-dashbord'
    },
    children: [
      {
        path: '',
        name: 'Layout',
        component: () => import('@/views/home/home'),
        meta: {
          title: 'Dashboard',
          icon: 'icon-dashbord'
        }
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      title: 'Home',
      icon: 'icon-list'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/home'),
        meta: {
          title: 'Home',
          icon: ''
        }
      },
      {
        path: 'about',
        component: () => import('@/views/about/about'),
        meta: {
          title: 'About',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    meta: {
      title: 'About',
      icon: 'icon-profile'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/home'),
        meta: {
          title: 'Home',
          icon: ''
        }
      },
      {
        path: 'about',
        component: () => import('@/views/about/about'),
        meta: {
          title: 'About',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/icons',
    component: Layout,
    meta: {
      title: 'Icons',
      icon: 'icon-user'
    },
    children: [
      {
        path: '',
        name: 'icons',
        component: () => import('@/views/icons/icons'),
        meta: {
          title: 'Icons',
          icon: 'icon-user'
        }
      }
    ]
  },
  {
    path: '/components',
    component: Layout,
    meta: {
      title: 'Components',
      icon: 'icon-table'
    },
    children: [
      {
        path: '',
        name: 'components',
        component: () => import('@/views/components/components'),
        meta: {
          title: 'Components',
          icon: 'icon-table'
        }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    meta: {
      title: 'Form',
      icon: 'icon-form'
    },
    children: [
      {
        path: '',
        name: 'form',
        component: () => import('@/views/form/form'),
        meta: {
          title: 'Form',
          icon: 'icon-form'
        }
      }
    ]
  },
  {
    path: '/404',
    component: Layout,
    meta: {
      title: '404',
      icon: 'icon-warn'
    },
    children: [
      {
        path: '',
        name: '404',
        component: () => import('@/views/404/404'),
        meta: {
          title: '404',
          icon: 'icon-warn'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login'),
    meta: {
      title: 'login',
      icon: 'icon-login'
    }
  }
];

export default new Router({
  routes
});
