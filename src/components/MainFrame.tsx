import * as React from 'react';
import { Component } from 'react';

import { MainFrameProps, MainFrameState } from '../models';

class MainFrame extends Component<MainFrameProps, MainFrameState> {
  constructor(props:MainFrameProps){
    super(props);
  }
  render() {
    const { activeLayout } = this.props;
    return (
      <div>

      </div>
    );
  }
}