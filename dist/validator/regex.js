'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  if (!config.hasOwnProperty('message') || !config.message || !config.message.trim()) {
    throw new TypeError('config.message');
  }

  if (!config.hasOwnProperty('expression') || _typeof(config.expression) !== 'object' || !config.expression.toString().startsWith('/') || !config.expression.toString().endsWith('/')) {
    throw new TypeError('config.expression');
  }

  var message = config.message,
      expression = config.expression;

  var regex = new RegExp(expression);
  return function (value) {
    return (0, _model2.default)(Boolean(value) ? regex.test(value) : false, message);
  };
};