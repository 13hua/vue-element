// module.export = {
//   baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
//   outputDir: 'dist', // 打包后的输出目录
//   assetsDir: './static', // 静态资源打包地址
//   lintOnSave: true, // 保存时是不是用eslint-loader来lint代码
//   filenameHashing: true,
//   pages: {
//     index: {
//       entry: './src/main.js', //entry for the pages
//       template: 'public/index.html', //the source template
//       filename: 'index.html', //output as dist/index.html
//       title: '首页'

//     }
//   },

//   // 是否使用包含运行时编译器的Vue核心构建
//   runtimeCompiler: false,

//   //默认情况下babel-loader 忽略其中的所有文件 node_modules
//   transpileDependencies: [],

//   // 生产环境sourdeMap
//   productionSourceMap: false,

//   // cors 相关 https://jakearchibald.com/2017/es-modules-in-browsers/#always-cors
//   // corsUseCredentials: false,
//   // webpack 配置，键值对象时会合并配置，为方法时会改写配置
//   // https://cli.vuejs.org/guide/webpack.html#simple-configuration
//   // configureWebpack: (config) => {
//   //   console.log(config)
//   // },

//   // webpack 链接 API，用于生成和修改 webapck 配置
//   // https://github.com/mozilla-neutrino/webpack-chain
//   chainWebpack: (config) => {
//     // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
//     config.optimization
//       .splitChunks({
//         cacheGroups: {}
//       });

//     // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
//     config.module
//       .rule('eslint')
//       .exclude
//       .add('/Users/maybexia/Downloads/FE/community_built-in/src/lib')
//       .end()
//   },

//   // 配置高于chainWebpack中关于 css loader 的配置
//   css: {
//     // 是否开启支持 foo.module.css 样式
//     modules: false,

//     // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
//     extract: true,

//     // 是否构建样式地图，false 将提高构建速度
//     sourceMap: false,

//     // css预设器配置项
//     loaderOptions: {
//       css: {
//         // options here will be passed to css-loader
//       },

//       postcss: {
//         // options here will be passed to postcss-loader
//       }
//     }
//   },



//   // All options for webpack-dev-server are supported
//   // https://webpack.js.org/configuration/dev-server/
//   devServer: {
//     open: true,
//     host: '127.0.0.1',
//     port: 3000,
//     https: false,
//     hotOnly: false,
//     proxy: null
//   },
//   // 第三方插件配置

// }