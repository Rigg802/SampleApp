import 'normalize.css/normalize.css!';
import 'styles/App.css!';
import * as React from 'react';
import { AppComponentProps } from '../models/AppComponentModels';

class AppComponent extends React.Component<AppComponentProps,void> {
  render() {
    return (
      <div className="index">
        <div className="notice">hello!</div>
      </div>
    );
  }
}

export default AppComponent;
