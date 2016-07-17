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
const react_1 = require('react');
const fixed_data_table_1 = require('fixed-data-table');
require('fixed-data-table/dist/fixed-data-table.css');
class Monitor extends react_1.Component {
    constructor(props) {
        super(props);
    }
    _onColumnResizeEndCallback(newColumnWidth, columnKey) {
        // this.setState(({columnWidths}) => ({
        //   columnWidths: {
        //     ...columnWidths,
        //     [columnKey]: newColumnWidth,
        //   }
        // }));
    }
    render() {
        const { actions, monitor, monitorData } = this.props;
        const TextCell = (content) => {
            const { rowIndex, columnKey, data } = content;
            return (React.createElement(fixed_data_table_1.Cell, __assign({}, data), data.getObjectAt(rowIndex)[columnKey]));
        };
        let columnWidths = {
            firstName: 240,
            lastName: 150,
            sentence: 140,
            companyName: 60,
        };
        return (React.createElement("div", null, React.createElement("h2", null, "Monitor #", monitor.id), monitor.name, React.createElement(fixed_data_table_1.Table, __assign({rowHeight: 30, headerHeight: 50, rowsCount: monitorData.getSize(), onColumnResizeEndCallback: this._onColumnResizeEndCallback, isColumnResizing: false, width: 1000, height: 500}, this.props.monitorData), React.createElement(fixed_data_table_1.Column, {columnKey: "firstName", header: React.createElement(fixed_data_table_1.Cell, null, "First Name"), cell: React.createElement(TextCell, {data: monitorData}), fixed: true, width: columnWidths.firstName, isResizable: true}), React.createElement(fixed_data_table_1.Column, {columnKey: "lastName", header: React.createElement(fixed_data_table_1.Cell, null, "Last Name"), cell: React.createElement(TextCell, {data: monitorData}), width: columnWidths.lastName, isResizable: true, minWidth: 70, maxWidth: 170}), React.createElement(fixed_data_table_1.Column, {columnKey: "companyName", header: React.createElement(fixed_data_table_1.Cell, null, "Company"), cell: React.createElement(TextCell, {data: monitorData}), width: columnWidths.companyName, isResizable: true}), React.createElement(fixed_data_table_1.Column, {columnKey: "sentence", header: React.createElement(fixed_data_table_1.Cell, null, "Sentence"), cell: React.createElement(TextCell, {data: monitorData}), width: columnWidths.sentence, isResizable: true}))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Monitor;
//# sourceMappingURL=Monitor.js.map