"use strict";
const react_1 = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const Main_1 = require('../components/Main');
class monitorContainer extends react_1.Component {
    render() {
        const { actions } = this.props;
        return react_1.default.createElement(Main_1.default, {actions: actions});
    }
}
monitorContainer.propTypes = {
    actions: react_1.PropTypes.object.isRequired
};
function mapStateToProps(state) {
    const props = {};
    return props;
}
function mapDispatchToProps(dispatch) {
    const actions = {};
    const actionMap = { actions: redux_1.bindActionCreators(actions, dispatch) };
    return actionMap;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(monitorContainer);
//# sourceMappingURL=monitorContainer.js.map