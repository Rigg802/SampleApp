"use strict";
const React = require('react');
const react_1 = require('react');
const react_redux_1 = require('react-redux');
const NavigatorContainer_1 = require('./NavigatorContainer');
function mapStateToProps(rootState) {
    return rootState;
}
class MainFrameContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null, React.createElement(NavigatorContainer_1.default, null), React.createElement("div", {className: "layout-content"}, this.props.children || (React.createElement("p", null, "Empty")))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(MainFrameContainer);
//# sourceMappingURL=MainFrameContainer.js.map