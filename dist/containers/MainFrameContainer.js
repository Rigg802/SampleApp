"use strict";
const React = require('react');
const react_1 = require('react');
const react_redux_1 = require('react-redux');
const NavigatorContainer_1 = require('./NavigatorContainer');
const react_bootstrap_1 = require('react-bootstrap');
function mapStateToProps(rootState) {
    return rootState;
}
let navigatorStyle = {
    margin: "20px"
};
class MainFrameContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_bootstrap_1.Grid, {fluid: true}, React.createElement(react_bootstrap_1.Row, {className: "header"}, React.createElement("h1", null, "Header")), React.createElement(react_bootstrap_1.Row, {className: "main-content"}, React.createElement(react_bootstrap_1.Col, {xsHidden: true}, React.createElement(NavigatorContainer_1.default, null)), React.createElement(react_bootstrap_1.Col, null, this.props.children || (React.createElement("p", null, "Empty")))), React.createElement(react_bootstrap_1.Row, {className: "footer"}, React.createElement("h3", null, "Footer"))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(MainFrameContainer);
//# sourceMappingURL=MainFrameContainer.js.map