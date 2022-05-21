import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY COURSES</h1>
          <div className="button"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}></Col>

                <Col lg={6} md={6} sm={12}></Col>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
