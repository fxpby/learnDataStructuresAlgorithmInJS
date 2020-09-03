/*
 * @Author: fxpby
 * @Date: 2020-09-01 20:34:42
 * @LastEditTime: 2020-09-02 10:52:29
 * @LastEditors: fxpby
 * @Description: 
 */
const path = require('path')
// const dev = process.env.WEBPACK_DEV_SERVER
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // mode: dev ? 'development' : 'production',
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options:{
              importLoaders: 2,
              modules: true
            }
          }
        , 'less-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // name:原始名称， hash:MD5算法， ext:后缀
              // name: '[name]_[hash].[ext]'
              // outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
            'file-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]_[hash].[ext]',
              // outputPath: 'images/',
              limit: 102400 // 100KB
            }
          },
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_moudles/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"), // 打包后的文件地址
    compress: true, // 是否使用gzip压缩
    port: 9000, // 端口号
    open: true, // 新窗口打开网页
    hot: true // 开启热更新
    // hotOnly: true // 热模块替换，不会在构建失败时将页面刷新作为后备
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "测试title",
      template: './index.html',
      filename:'index.html'
      // minify: {
      //   // 压缩html文件
      //   removeComments: true, // 移除html中的注释
      //   collapseWhitespace: true, // 删除空白符与换行符
      //   minifyCSS: true // 压缩内联css
      // }
    }),
    // 每次部署时清空 dist 目录
    new CleanWebpackPlugin(),
    new webpack.NamedModulesPlugin(), // 更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin
  ],
  // source-map
  // development devtool:'cheap-module-eval-source-map'
  // production  devtool:'cheap-module-source-map'
  // devtool: dev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map'
  devtool: 'cheap-module-eval-source-map'
}