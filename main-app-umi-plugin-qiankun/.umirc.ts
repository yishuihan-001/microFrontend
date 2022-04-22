import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        {
          path: '/',
          exact: true,
          redirect: '/home',
        },
        {
          path: '/home',
          component: '@/pages/home',
        },
        {
          path: '/sun',
          component: '@/pages/sun',
        },
        {
          path: '/sub-app-umi',
          microApp: 'sub-app-umi'
          // component: '@/pages/micro-umi'
        },
      ]
    },
    // { path: '/sub-app-vue2', microApp: 'sub-app-vue2'},
    // { path: '/sub-app-react', microApp: 'sub-app-react'},
    // { path: '/sub-app-umi', microApp: 'sub-app-umi'},
    // { path: '/sub-app-jq', microApp: 'sub-app-jq'},
  ],
  fastRefresh: {},

  // 开启 qiankun 配置
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        // {
        //   name: 'sub-app-vue2',
        //   entry: '//localhost:8001/',
        // },
        // {
        //   name: 'sub-app-react',
        //   entry: '//localhost:8002',
        // },
        {
          name: 'sub-app-umi',
          entry: '//localhost:8003',
        },
        // {
        //   name: 'sub-app-jq',
        //   entry: '//localhost:8004',
        // },
      ],
      sandbox: { strictStyleIsolation: true },
      prefetch: true,
    },
  },
});
