"use strict";
const containers_1 = require('./containers');
const React = require('react');
const react_dom_1 = require('react-dom');
const react_redux_1 = require('react-redux');
const stores_1 = require('./stores');
const react_router_1 = require('react-router');
const react_router_redux_1 = require('react-router-redux');
const store = stores_1.default();
// Create an enhanced history that syncs navigation events with the store
const history = react_router_redux_1.syncHistoryWithStore(react_router_1.browserHistory, store);
// <Route path="foo" component={Foo}/>
react_dom_1.render(React.createElement(react_redux_1.Provider, {store: store}, React.createElement(react_router_1.Router, {history: history}, React.createElement(react_router_1.Route, {path: "/", component: containers_1.MainFrameContainer}, React.createElement(react_router_1.Route, {path: "layout/:id", component: containers_1.LayoutContainer})))), document.getElementById('app'));
//# sourceMappingURL=index.js.map