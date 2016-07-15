"use strict";
const React = require('react');
const react_1 = require('react');
class Monitor extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        const { monitor } = this.props;
        return (React.createElement("div", null, React.createElement("h1", null, "Monitor #", monitor.id), monitor.name));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Monitor;
//# sourceMappingURL=Monitor.js.map