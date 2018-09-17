const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less-modules');
const rewireMobX = require('react-app-rewire-mobx');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], config);

  config = rewireLess(config, env);
  config = rewireLess.withLoaderOptions({
    modifyVars: {"@primary-color": "#2F54EB" }
  })(config, env);

  config = rewireMobX(config,env);
  return config;
};