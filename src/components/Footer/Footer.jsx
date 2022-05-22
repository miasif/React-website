import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12}>
              <h2 className="footerName text-center">Follow Us</h2>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {' '}
              <h2>Address</h2>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {' '}
              <h2>Information</h2>
            </Col>
            <Col lg={3} md={6} sm={12}>
              {' '}
              <h2>Policy</h2>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
