'use strict';

var _email = require('./email');

var _email2 = _interopRequireDefault(_email);

var _regex = require('./regex');

var _regex2 = _interopRequireDefault(_regex);

var _required = require('./required');

var _required2 = _interopRequireDefault(_required);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { email: _email2.default, regex: _regex2.default, required: _required2.default };