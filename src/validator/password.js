import regex from './regex';
//
export default (config) => {
  if (!config) {
    throw new TypeError('config');
  }

  if (
    !config.hasOwnProperty('minLength')
    || !Number.isInteger(config.minLength)
    || config.minLength < 1
  ) {
    throw new TypeError('config.minLength');
  }

  if (config.maxLength && !Number.isInteger(config.maxLength)) {
    throw new TypeError('config.maxLength');
  }

  if (config.maxLength && config.minLength > config.maxLength) {
    throw new SyntaxError(
      'config.maxLength must be greater than or equal to config.minLength'
    );
  }

  const {minLength, maxLength} = config;
  /* eslint max-len: ["error", 160] */
  const pattern = `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{${minLength},${maxLength ? maxLength : ''}}`;
  const validate = regex({expression: new RegExp(pattern)});
  return (value) => {
    return validate(value);
  };
};
