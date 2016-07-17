import * as React from 'react';
import { Component } from 'react';
import { MonitorState, MonitorProps } from '../models';
import { Table, Column, Cell } from 'fixed-data-table';
import 'fixed-data-table/dist/fixed-data-table.css';

class Monitor extends Component<MonitorProps, MonitorState> {
  constructor(props:MonitorProps){
    super(props);
  }
  _onColumnResizeEndCallback(newColumnWidth: number, columnKey: string) {
    // this.setState(({columnWidths}) => ({
    //   columnWidths: {
    //     ...columnWidths,
    //     [columnKey]: newColumnWidth,
    //   }
    // }));
  }
  render() {
    const { actions, monitor, monitorData } = this.props;
    const TextCell = (content:any) => {
      const { rowIndex, columnKey, data } = content;
      return (<Cell {...data}>
        {data.getObjectAt(rowIndex)[columnKey]}
      </Cell>);
    };

    let columnWidths = {
        firstName: 240,
        lastName: 150,
        sentence: 140,
        companyName: 60,
      };

    return (
      <div>
        <h2>Monitor #{monitor.id}</h2>
        {monitor.name}
        <Table
        rowHeight={30}
        headerHeight={50}
        rowsCount={monitorData.getSize()}
        onColumnResizeEndCallback={this._onColumnResizeEndCallback}
        isColumnResizing={false}
        width={1000}
        height={500}
        {...this.props.monitorData}>
        <Column
          columnKey="firstName"
          header={<Cell>First Name</Cell>}
          cell={<TextCell data={monitorData} />}
          fixed={true}
          width={columnWidths.firstName}
          isResizable={true}
        />
        <Column
          columnKey="lastName"
          header={<Cell>Last Name</Cell>}
          cell={<TextCell data={monitorData} />}
          width={columnWidths.lastName}
          isResizable={true}
          minWidth={70}
          maxWidth={170}
        />
                <Column
          columnKey="companyName"
          header={<Cell>Company</Cell>}
          cell={<TextCell data={monitorData} />}
          width={columnWidths.companyName}
          isResizable={true}
        />
        <Column
          columnKey="sentence"
          header={<Cell>Sentence</Cell>}
          cell={<TextCell data={monitorData} />}
          width={columnWidths.sentence}
          isResizable={true}
        />
      </Table>
      </div>
    );
  }
}

export default Monitor;