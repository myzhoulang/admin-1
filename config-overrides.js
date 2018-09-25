const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less-modules');
const rewireMobX = require('react-app-rewire-mobx');
const rewireWebpackOutput = require('react-app-rewire-output');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');
const path = require('path');

module.exports = function override (config, env) {
  let alias = (config.resolve.alias || {});
  alias['@ant-design/icons/lib/dist$'] = path.resolve(__dirname, "./src/icon.js");
  config.resolve.alias = alias;

  config = injectBabelPlugin(['import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }, {libraryName: 'bizcharts', libraryDirectory: 'es6'}], config);
  // if ('development' !== env) {
  //   config = rewireWebpackOutput(config, env, {
  //     publicPath: '/admin-1/'
  //   })
  // }
  if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    })
  }

  config = rewireLess(config, env);
  config = rewireLess.withLoaderOptions({
    modifyVars: {"@primary-color": "#2F54EB"}
  })(config, env);

  config = rewireMobX(config, env);


  return config;
};