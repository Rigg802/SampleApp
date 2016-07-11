import 'normalize.css/normalize.css!';
import 'styles/App.css!';
import * as React from 'react';

class AppComponent extends React.Component<void,void> {
  render() {
    return (
      <div className="index">
        <div className="notice">hello!</div>
      </div>
    );
  }
}

export default AppComponent;
