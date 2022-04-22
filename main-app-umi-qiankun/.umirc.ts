import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/login',
      component: '@/pages/login'
    },
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          exact: true,
          redirect: '/main/first',
        },
        {
          path: '/main/first',
          component: '@/pages/first',
        },
        {
          path: '/main/second',
          component: '@/pages/second',
        },
      ]
    },
  ],
  fastRefresh: {},
});
