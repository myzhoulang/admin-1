const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less-modules');
const rewireMobX = require('react-app-rewire-mobx');
const rewireWebpackOutput = require('react-app-rewire-output');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, {libraryName: 'bizcharts', libraryDirectory: 'es6'}], config);
  if ('development' !== env) {
    config = rewireWebpackOutput(config, env, {
      publicPath: '/admin-1/'
    })
  }

  config = rewireLess(config, env);
  config = rewireLess.withLoaderOptions({
    modifyVars: {"@primary-color": "#2F54EB" }
  })(config, env);

  config = rewireMobX(config,env);
  return config;
};