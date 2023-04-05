module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli', 'mocha'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
      {pattern: './src/*.spec.ts', watched: false}
    ],
    preprocessors: {'./src/*.spec.ts': ['angular-cli']}
    ,
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly

    :
      './coverage/coverage.lcov'
    }
  },
  angularCli: {
    config: './angular-cli.json',
      environment: 'dev'
  })}
}
