import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Reducer } from 'redux';
import { connect } from 'react-redux';
import { NavigatorProps, RootReducer } from '../models';
import { Navigator } from '../components/navigator';

function mapStateToProps(rootState: RootReducer): any {
  return rootState;
}

class NavigatorContainer extends Component<NavigatorProps, void> {
  constructor(props: NavigatorProps){
    super(props);
  }
  render() {
  
    return (
      <div>
        <Navigator docked={true} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(NavigatorContainer);
