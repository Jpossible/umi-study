export default {
  routes: [
    { path: '/', component: './index.js' },
    { path: '/goods', component: './goodslist.js' },
    {
      path: '/list', component: './b.js',
      // Routes: ['./routes/PrivateRoute.js']
    },
    { component: './404.js'}
  ],
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true
      }
    ]
  ]
};
