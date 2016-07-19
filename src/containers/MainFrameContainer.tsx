import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Reducer } from 'redux';
import { connect } from 'react-redux';
import { MainFrameProps, RootReducer } from '../models';
import { default as NavigatorContainer } from './NavigatorContainer';

function mapStateToProps(rootState: RootReducer): any {
  return rootState;
}

class MainFrameContainer extends Component<MainFrameProps, void> {
  constructor(props: MainFrameProps){
    super(props);
  }
  render() {
   console.log("children?");
   console.log(this.props.children);
    return (
      <div>
        <NavigatorContainer/>
        <div className="layout-content">
          {
            this.props.children || ( <p>Empty</p> )
          }
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MainFrameContainer);
