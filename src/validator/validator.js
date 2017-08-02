export default (config) => {
  if (!config || typeof config !== 'object') {
    throw new TypeError('config');
  }

  if (
    !config.hasOwnProperty('validate')
    || !config.validate
    || typeof config.validate !== 'function'
  ) {
    throw new TypeError('config.validate');
  }

  if (
    !config.hasOwnProperty('message')
    || !config.message
    || typeof config.message !== 'string'
  ) {
    throw new TypeError('config.message');
  }

  return (value) => {
    const valid = config.validate(value);
    return {
      valid,
      message: (valid ? null : config.message)
    };
  };
};
