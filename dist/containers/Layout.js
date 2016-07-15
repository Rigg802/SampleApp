"use strict";
const React = require('react');
const react_1 = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const layoutActions_1 = require('../actions/layoutActions');
const Layout_1 = require('../components/Layout');
class LayoutContainer extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { actions, monitors } = this.props;
        return (React.createElement(Layout_1.default, {actions: actions, monitors: monitors}));
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
        actions: redux_1.bindActionCreators(layoutActions_1.default, dispatch)
    };
    return actionMap;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
//# sourceMappingURL=Layout.js.map