"use strict";
const React = require('react');
const react_1 = require('react');
const react_redux_1 = require('react-redux');
const navigator_1 = require('../components/navigator');
function mapStateToProps(rootState) {
    return rootState;
}
class NavigatorContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", null, React.createElement(navigator_1.Navigator, {docked: true})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(NavigatorContainer);
//# sourceMappingURL=NavigatorContainer.js.map