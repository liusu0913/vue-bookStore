// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // 测试器环境
    browsers: ['PhantomJS'],
    // 测试使用的框架
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    // 测试结果存储位置
    reporters: ['spec', 'coverage'],
    // 测试入口
    files: ['./index.js'],
    // 对指定文件进行预处理
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    // webpack打包规则
    webpack: webpackConfig,
    // 使用了什么中间件
    webpackMiddleware: {
      noInfo: true
    },
    // 覆盖率
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
