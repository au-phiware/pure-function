const ENV = process.env.BABEL_ENV;
console.log(ENV);
module.exports = {
  presets: [
    [
      'env', {
        modules: ENV === 'es' ? false : 'commonjs'
      }
    ]
  ]
};
