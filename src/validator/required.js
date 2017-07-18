import model from './model.js';

export default (config) => {
  if (
    !config.hasOwnProperty('message')
    || !config.message
    || !config.message.trim()
  ) {
    throw new TypeError('config.message');
  }

  const {message} = config;
  return (value) => {
    return model(Boolean(value), message);
  };
};
