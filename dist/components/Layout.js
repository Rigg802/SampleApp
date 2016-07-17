"use strict";
const React = require('react');
const react_1 = require('react');
const Monitor_1 = require('./Monitor');
const faker_1 = require('../api/faker');
class Layout extends react_1.Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        const { actions } = this.props;
        actions.addMonitor("test");
    }
    render() {
        const { actions, monActions } = this.props;
        let { monitors } = this.props;
        if (monitors === undefined) {
            monitors = new Array();
        }
        let monitorData = new faker_1.FakeObjectDataListStore(30);
        return (React.createElement("div", null, React.createElement("p", null, "hello"), React.createElement("button", {onClick: this.onClick.bind(this)}, "Add Monitor"), React.createElement("ul", {className: "monitor-list"}, monitors.map(monitor => React.createElement(Monitor_1.default, {key: monitor.id, monitor: monitor, actions: monActions, monitorData: monitorData})))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
//# sourceMappingURL=Layout.js.map