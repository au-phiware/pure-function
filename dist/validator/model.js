'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (valid, message) {
  if (typeof valid !== 'boolean') {
    throw new TypeError('valid');
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    throw new TypeError('message');
  }

  var actualMessage = valid ? null : message;
  return {
    valid: valid, message: actualMessage
  };
};