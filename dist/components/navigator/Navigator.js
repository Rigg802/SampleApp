"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require('react');
const CANCEL_DISTANCE_ON_SCROLL = 20;
const defaultStyles = {
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    navigator: {
        zIndex: 2,
        position: 'absolute',
        top: 0,
        bottom: 0,
        transition: 'transform .3s ease-out',
        WebkitTransition: '-webkit-transform .3s ease-out',
        willChange: 'transform',
        overflowY: 'auto',
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
        transition: 'left .3s ease-out, right .3s ease-out',
    },
    overlay: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .3s ease-out',
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    dragHandle: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        bottom: 0,
    },
};
class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.overlayClicked = this.overlayClicked.bind(this);
    }
    overlayClicked() {
        if (this.props.open) {
            this.props.onSetOpen(false);
        }
    }
    render() {
        const navigatorStyle = { defaultStyles: .navigtor, this: .props.styles.navigtor };
        const contentStyle = { defaultStyles: .content, this: .props.styles.content };
        const overlayStyle = { defaultStyles: .overlay, this: .props.styles.overlay };
        const rootProps = {
            className: this.props.rootClassName,
            style: { defaultStyles: .root, this: .props.styles.root },
        };
        // Navigator style right/left
        if (this.props.pullRight) {
            navigatorStyle.right = 0;
            navigatorStyle.transform = 'translateX(100%)';
            navigatorStyle.WebkitTransform = 'translateX(100%)';
            if (this.props.shadow) {
                navigatorStyle.boxShadow = '-2px 2px 4px rgba(0, 0, 0, 0.15)';
            }
        }
        else {
            navigatorStyle.left = 0;
            navigatorStyle.transform = 'translateX(-100%)';
            navigatorStyle.WebkitTransform = 'translateX(-100%)';
            if (this.props.shadow) {
                navigatorStyle.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.15)';
            }
        }
        if (this.props.docked) {
            // show navigator
            if (this.state.navigatorWidth !== 0) {
                navigatorStyle.transform = `translateX(0%)`;
                navigatorStyle.WebkitTransform = `translateX(0%)`;
            }
            // make space on the left/right side of the content for the navigator
            if (this.props.pullRight) {
                contentStyle.right = `${this.state.navigatorWidth}px`;
            }
            else {
                contentStyle.left = `${this.state.navigatorWidth}px`;
            }
        }
        else if (this.props.open) {
            // slide open navigator
            navigatorStyle.transform = `translateX(0%)`;
            navigatorStyle.WebkitTransform = `translateX(0%)`;
            // show overlay
            overlayStyle.opacity = 1;
            overlayStyle.visibility = 'visible';
        }
        if (!this.props.transitions) {
            navigatorStyle.transition = 'none';
            navigatorStyle.WebkitTransition = 'none';
            contentStyle.transition = 'none';
            overlayStyle.transition = 'none';
        }
        return (React.createElement("div", __assign({}, rootProps), React.createElement("div", {className: "navigatorClass", style: navigatorStyle, ref: "navigator"}, this.props.navigator), React.createElement("div", {className: this.props.overlayClassName, style: overlayStyle, role: "presentation", tabIndex: "0", onClick: this.overlayClicked}), React.createElement("div", {className: this.props.contentClassName, style: contentStyle}, this.props.children)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navigator;
//# sourceMappingURL=navigator.js.map