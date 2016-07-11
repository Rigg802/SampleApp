
import * as React from 'react';
import { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import { Dispatch } from 'redux';
import { default as monitorActions } from '../actions/monitorActions';


class App extends Component<void, void> {
  render() {
    const {actions, monitors} = this.props;
    return <Main actions={actions} monitors={monitors}/>;
  }
}

function mapStateToProps(state:any) {
  const props = { 
    monitors: state.monitors 
  };
  return props;
}

function mapDispatchToProps(dispatch:Dispatch<any>) {
  const actionMap = { actions: bindActionCreators(monitorActions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
