"use strict";
const React = require('react');
const react_1 = require('react');
const react_router_1 = require('react-router');
const defaultStyles = {
    background: -color, 'red': 
};
class Navigator extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let layouts;
        if (this.props.layouts === undefined) {
            layouts = [
                {
                    id: 0,
                    name: 'hola'
                },
                {
                    id: 1,
                    name: 'muchacho'
                }
            ];
        }
        else {
            layouts = this.props.layouts;
        }
        return (React.createElement("div", {style: defaultStyles}, React.createElement(react_router_1.Link, {to: "/"}, "◀︎ Back"), React.createElement("ul", null, layouts.map((layout, index) => (React.createElement("li", {key: index}, React.createElement(react_router_1.Link, {to: `/layout/${index}`}, layout.name)))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navigator;
//# sourceMappingURL=navigator.js.map