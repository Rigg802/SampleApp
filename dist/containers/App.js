"use strict";
const React = require('react');
const react_1 = require('react');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const Main_1 = require('../components/Main');
const monitorActions_1 = require('../actions/monitorActions');
class App extends react_1.Component {
    render() {
        const { actions, monitors } = this.props;
        return React.createElement(Main_1.default, {actions: actions, monitors: monitors});
    }
}
function mapStateToProps(state) {
    const props = {
        monitors: state.monitors
    };
    return props;
}
function mapDispatchToProps(dispatch) {
    const actionMap = { actions: redux_1.bindActionCreators(monitorActions_1.default, dispatch) };
    return actionMap;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=App.js.map