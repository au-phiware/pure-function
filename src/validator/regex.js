import model from './model';

export default (config) => {
  if (
    !config.hasOwnProperty('message')
    || !config.message
    || !config.message.trim()
  ) {
    throw new TypeError('config.message');
  }

  if (
    !config.hasOwnProperty('expression')
    || typeof config.expression !== 'object'
    || !config.expression.toString().startsWith('/')
    || !config.expression.toString().endsWith('/')
  ) {
    throw new TypeError('config.expression');
  }

  const {message, expression} = config;
  const regex = new RegExp(expression);
  return (value) => {
    return model(Boolean(value) ? regex.test(value) : false, message);
  };
};
