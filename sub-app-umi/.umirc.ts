import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/list', component: '@/pages/list' },
    { path: '/detail', component: '@/pages/detail' },
  ],
  fastRefresh: {},

  // 开启 qiankun 配置
  qiankun: {
    slave: {},
  },
});
