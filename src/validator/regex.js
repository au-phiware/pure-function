export default (expression) => {
  if (typeof expression !== 'object'
    || !expression.toString().startsWith('/')
    || !expression.toString().endsWith('/')
  ) {
    throw new TypeError('expression');
  }

  const regex = new RegExp(expression);
  return (value) => {
    if (value === undefined || value === null) {
      return false;
    }

    return regex.test(value);
  };
};
