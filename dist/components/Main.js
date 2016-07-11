"use strict";
require('normalize.css/normalize.css!');
require('styles/App.css!');
const React = require('react');
class AppComponent extends React.Component {
    render() {
        return (React.createElement("div", {className: "index"}, React.createElement("div", {className: "notice"}, "hello!")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppComponent;
//# sourceMappingURL=Main.js.map