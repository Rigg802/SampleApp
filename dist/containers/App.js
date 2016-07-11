"use strict";
/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
const react_1 = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const Main_1 = require('../components/Main');
/* Populated by react-webpack-redux:reducer */
class App extends react_1.Component {
    render() {
        const { actions, monitors } = this.props;
        return react_1.default.createElement(Main_1.default, {actions: actions, monitors: monitors});
    }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
    actions: react_1.PropTypes.object.isRequired,
    monitors: react_1.PropTypes.object.isRequired
};
function mapStateToProps(state) {
    /* Populated by react-webpack-redux:reducer */
    const props = { monitors: state.monitors };
    return props;
}
function mapDispatchToProps(dispatch) {
    /* Populated by react-webpack-redux:action */
    const actions = { addMonitor: require('../actions/monitors/addMonitor.js') };
    const actionMap = { actions: redux_1.bindActionCreators(actions, dispatch) };
    return actionMap;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map