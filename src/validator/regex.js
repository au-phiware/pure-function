export default (config) => {
  if (!config) {
    throw new TypeError('config');
  }

  if (!config.hasOwnProperty('expression')
    || typeof config.expression !== 'object'
    || !config.expression.toString().startsWith('/')
    || !config.expression.toString().endsWith('/')
  ) {
    throw new TypeError('config.expression');
  }

  const regex = new RegExp(config.expression);
  return (value) => {
    if (value === undefined || value === null) {
      return false;
    }

    return regex.test(value);
  };
};
