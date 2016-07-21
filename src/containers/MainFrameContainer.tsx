import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Reducer } from 'redux';
import { connect } from 'react-redux';
import { MainFrameProps, RootReducer } from '../models';
import { default as NavigatorContainer } from './NavigatorContainer';
import { Grid, Row, Col } from 'react-bootstrap';

function mapStateToProps(rootState: RootReducer): any {
  return rootState;
}


let navigatorStyle = {
  margin: "20px"
};

class MainFrameContainer extends Component<MainFrameProps, void> {
  constructor(props: MainFrameProps){
    super(props);
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row className="header">
          <h1>Header</h1>
        </Row>
        <Row className="main-content">
          <Col componentClass="nav" xsHidden={true} sm={2} md={2} lg={2}>
            <NavigatorContainer/>
          </Col>
          <Col xs={10} sm={8} md={8} lg={10}>
            {
              this.props.children || ( <p>Empty</p> )
            }
          </Col>
        </Row>
        <Row className="footer">
          <h3>Footer</h3>
        </Row>
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(MainFrameContainer);
