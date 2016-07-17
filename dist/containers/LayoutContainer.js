"use strict";
const React = require('react');
const react_1 = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const layoutActions_1 = require('../actions/layoutActions');
const monitorActions_1 = require('../actions/monitorActions');
const Layout_1 = require('../components/Layout');
const reducers_1 = require('../reducers');
//It's actually the root reducer state
function mapStateToProps(rootState) {
    const props = {
        monitors: reducers_1.getMonitorsForLayout(rootState)
    };
    return props;
}
function mapDispatchToProps(dispatch) {
    const actionMap = {
        actions: redux_1.bindActionCreators(layoutActions_1.default, dispatch),
        monActions: redux_1.bindActionCreators(monitorActions_1.default, dispatch)
    };
    return actionMap;
}
class LayoutContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { monActions, monitors, actions } = this.props;
        return (React.createElement(Layout_1.default, {actions: actions, monitors: monitors, monActions: monitorActions_1.default}));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
//# sourceMappingURL=LayoutContainer.js.map