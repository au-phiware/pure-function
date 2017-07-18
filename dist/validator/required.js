'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = require('./model.js');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  if (!config.hasOwnProperty('message') || !config.message || !config.message.trim()) {
    throw new TypeError('config.message');
  }

  var message = config.message;

  return function (value) {
    return (0, _model2.default)(Boolean(value), message);
  };
};