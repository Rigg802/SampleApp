"use strict";
const React = require('react');
const react_1 = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const monitorActions_1 = require('../actions/monitorActions');
class layoutContainer extends react_1.Component {
    constructor(props) {
        super(props);
        console.log("in layout container");
    }
    render() {
        const { actions } = this.props;
        return (React.createElement("div", null, React.createElement("p", null, "hello"), React.createElement("button", {onClick: "{actions.addMonitor}"}, "Add Monitor")));
    }
}
function mapStateToProps(state) {
    const props = {
        monitors: state.monitors
    };
    return props;
}
function mapDispatchToProps(dispatch) {
    const actionMap = {
        actions: redux_1.bindActionCreators(monitorActions_1.default, dispatch)
    };
    return actionMap;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(layoutContainer);
//# sourceMappingURL=Layout.js.map