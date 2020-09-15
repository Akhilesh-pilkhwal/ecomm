import React, { Component } from 'react';
import { Row, Col } from 'antd';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';
import Header from './components/header/header.component';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Row gutter={[24, 16]}>
          <Col span={10} offset={2}>
            <SignIn />
          </Col>
          <Col span={10}>
            <SignUp />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;