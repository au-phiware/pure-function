export default (valid, message) => {
  if (typeof valid !== 'boolean') {
    throw new TypeError('valid');
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    throw new TypeError('message');
  }

  const actualMessage = (valid ? null : message);
  return {
    valid, message: actualMessage
  };
};
