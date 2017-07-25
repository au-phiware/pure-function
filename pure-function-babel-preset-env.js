const ENV = process.env.BABEL_ENV;

module.exports = {
  presets: [
    [
      'env', {
        modules: ENV === 'es' ? false : 'commonjs'
      }
    ]
  ]
};
