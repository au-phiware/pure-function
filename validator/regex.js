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
    || !config.expression
    || !config.expression.trim()
  ) {
    throw new TypeError('config.expression');
  }

  const {message, expression} = config;
  const regex = new RegExp(expression);
  return (value) => {
    return model(Boolean(value) ? regex.test(value) : false, message);
  };
};
