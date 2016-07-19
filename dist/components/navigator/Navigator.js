"use strict";
const React = require('react');
const react_1 = require('react');
const react_router_1 = require('react-router');
const defaultStyles = {};
class Navigator extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { layouts } = this.props;
        if (layouts === undefined) {
            layouts = {};
            {
                id: 0,
                    name;
                'hola';
            }
            {
                id: 1,
                    name;
                'muchacho';
            }
        }
    }
}
React.createElement("div", null, React.createElement(react_router_1.Link, {to: "/"}, "◀︎ Back"), React.createElement("ul", null, layouts.map((name, index) => (React.createElement("li", {key: index}, React.createElement(react_router_1.Link, {to: `/layout/${name}`}, name))))));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navigator;
//# sourceMappingURL=navigator.js.map