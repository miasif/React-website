import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export class ContactSection extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Quick Connect</h1>

              <Form>
                <Form.Group>
                  <Form.Label>Your Name </Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Your Email </Form.Label>
                  <Form.Control type="email" placeholder="Enter Your email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Message </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Discuss Now</h1>
              <p className="serviceDescription">
                365/28, Mohakhali DOHS, Dhaka-1212, Bangladesh
                <br />
                <FontAwesomeIcon icon={faEnvelope} /> Email:
                miaasif2002@gmail.com
                <br />
                <FontAwesomeIcon icon={faPhone} /> Phone:4545454545
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ContactSection;
