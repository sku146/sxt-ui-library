'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _formComponents = require('./formComponents');

var _formComponents2 = _interopRequireDefault(_formComponents);

var _reduxFormComponents = require('./reduxFormComponents');

var _reduxFormComponents2 = _interopRequireDefault(_reduxFormComponents);

var _simpleComponents = require('./simpleComponents');

var _simpleComponents2 = _interopRequireDefault(_simpleComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = (0, _extends3['default'])({}, _formComponents2['default'], _reduxFormComponents2['default'], _simpleComponents2['default']);
module.exports = exports['default'];