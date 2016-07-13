"use strict";
const React = require('react');
const react_1 = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const monitorActions_1 = require('../actions/monitorActions');
class monitorContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions } = this.props;
        const { monitor } = this.props;
        return (React.createElement("div", null, React.createElement("h1", null, "Monitor #", monitor.id), monitor.name));
    }
}
function mapDispatchToProps(dispatch) {
    const actionMap = {
        actions: redux_1.bindActionCreators(monitorActions_1.default, dispatch)
    };
    return actionMap;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(monitorContainer);
//# sourceMappingURL=Monitor.js.map