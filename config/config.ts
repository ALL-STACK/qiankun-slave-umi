import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {}
  },
  dynamicImport: {
    loading: '@/layouts/PageLoading/index',
  },
  nodeModulesTransform: {
    type: 'all',
  },
  routes: [
    { path: '/', title: '应用一',  component: '@/pages/index' },
    { 
      path: '/service',
      name: 'service',
      routes: [
        {
          name: 'list',
          path: '/service/list',
          title: '服务列表',
          component: '@/pages/App1/One/index',
        },
        {
          name: 'list',
          path: '/service/detail',
          title: '服务详情',
          component: '@/pages/App1/Two/index',
        },
      ]
    }
  ],
  targets: {
    ie: 11,
  },
  // mfsu: {},  // 开启后ie浏览器不兼容
  fastRefresh: {},
});
