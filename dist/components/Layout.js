"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require('react');
const react_1 = require('react');
const Monitor_1 = require('./Monitor');
class Layout extends react_1.Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        const { actions } = this.props;
        actions.addMonitor("test");
        actions.removeMonitor(1);
    }
    render() {
        const { monitors, actions } = this.props;
        return (React.createElement("div", null, React.createElement("p", null, "hello"), React.createElement("button", {onClick: this.onClick.bind(this)}, "Add Monitor"), React.createElement("ul", {className: "monitor-list"}, monitors.map(monitor => React.createElement(Monitor_1.default, __assign({key: monitor.id, monitor: monitor}, actions))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
//# sourceMappingURL=Layout.js.map