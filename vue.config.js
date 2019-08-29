'use strict'
const path = require('path')
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 8080

// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']

const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [
      // 'https://cdn.jsdelivr.net/npm/element-ui@2.11.1/lib/theme-chalk/index.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.3/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js',
      'https://cdn.jsdelivr.net/npm/moment@2.24.0/moment.min.js'
      // 'https://cdn.jsdelivr.net/npm/element-ui@2.11.1/lib/element-ui.common.min.js',
      // 'https://cdn.jsdelivr.net/npm/vue-i18n@8.14.0/dist/vue-i18n.common.min.js',
      // 'https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js',
      // 'https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js',
      // 'https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js'
    ]
  }
}

// cdn预加载使用
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'moment': 'moment'
  // 'element-ui':'ELEMENT'
}

module.exports = {

  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  // lintOnSave: process.env.NODE_ENV === 'development',
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map

  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://easy-mock.com/mock/5d54d6654aae71144f26188a/',
        changeOrigin: true, // 是否跨域
        secure: false,
        ws: false,
        pathRewrite: {
          '^/(.*)': '/$1'
        }
      }
    }
    // after: require('./mock/mock-server.js') // 运行mock-server服务模拟数据
  },

  configureWebpack: (config) => {
    // 在webpack的name字段中提供应用程序的标题
    // 可以在index.html中访问它来注入正确的标题。
    config.name = '我的网站！'
    // 删除console插件
    const plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false // 去掉注释
          },
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ['console.log']// 移除console
          }
        }

      })
    ]

    const ProvidePlugin = [
      new webpack.ProvidePlugin({
        '_': 'lodash',
        'axios': 'axios',
        'moment': 'moment'
      })
    ]

    Object.assign(config, {
      resolve: {
        alias: {
          '@': resolve('src'),
          '@c': resolve('src/components'),
          'assets': resolve('src/assets')
        }
      }
    })
    config.plugins = [...config.plugins, ...ProvidePlugin]
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...

      // 只有打包生产环境才需要将console删除
      config.plugins = [...config.plugins, ...plugins]

      config.externals = externals
      // 2. 构建时开启gzip，降低服务器压缩对CPU资源的占用，服务器也要相应开启gzip
      productionGzip && config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 8192,
          minRatio: 0.8
        })
      )
    } else {
      // 为开发环境修改配置...

    }
  },
  chainWebpack(config) {
    /**
         * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
         * vue inspect --plugins 查询插件 使用pages会有多个html实例
         */
    config
      .plugin('html')
      .tap(args => {
        if (process.env.NODE_ENV === 'production') {
          args[0].cdn = cdn.build
        }
        if (process.env.NODE_ENV === 'development') {
          args[0].cdn = cdn.dev
        }
        return args
      })
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              // “运行时”必须与runtimeChunk名称相同。默认是“运行时
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // 将elementUI拆分成一个包
                  priority: 20, // 重量需要大于libs和app，否则将被打包成libs或app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
