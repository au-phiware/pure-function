export default (valid, type) => {
  if (typeof valid !== 'boolean') {
    throw new TypeError('valid');
  }

  if (type !== null && typeof type !== 'string') {
    throw new TypeError('type');
  }

  return {
    valid, type
  };
};
