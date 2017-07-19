export default (validate, message) => {
  if (typeof validate !== 'function') {
    throw new TypeError('valid');
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    throw new TypeError('message');
  }

  const valid = validate();
  const actualMessage = (valid ? null : message);
  return {
    valid, message: actualMessage
  };
};
