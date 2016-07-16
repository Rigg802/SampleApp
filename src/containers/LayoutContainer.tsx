import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Reducer } from 'redux';
import { connect } from 'react-redux';
import { LayoutProps, LayoutState, RootReducer } from '../models';
import { default as layoutActions } from '../actions/layoutActions';
import { default as monitorActions } from '../actions/monitorActions';
import { default as Layout } from '../components/Layout';
import { getMonitorsForLayout } from '../reducers';

//It's actually the root reducer state
function mapStateToProps(rootState: RootReducer): any {
  const props = {
      monitors : getMonitorsForLayout(rootState.layout)
  };
  return props;
}

function mapDispatchToProps(dispatch:any) {
  const actionMap:Object = {
    actions: bindActionCreators(layoutActions, dispatch),
    monActions: bindActionCreators(monitorActions, dispatch)
  };
  return actionMap;
}

class LayoutContainer extends Component<LayoutProps, LayoutState> {
  constructor(props:LayoutProps){
    super(props);
  }
  render() {
    const { monActions, monitors, actions } = this.props;
    console.log("Render");
    console.log(this.props);
    console.log(monitors);
    return (
      <Layout actions={actions} monitors={monitors} monActions={monitorActions}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
