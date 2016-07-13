"use strict";
const React = require('react');
const react_dom_1 = require('react-dom');
const react_redux_1 = require('react-redux');
const stores_1 = require('./stores');
const Layout_1 = require('./containers/Layout');
const store = stores_1.default();
react_dom_1.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(Layout_1.default, null)), document.getElementById('app'));
//# sourceMappingURL=index.js.map