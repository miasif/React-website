import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class AboutDescription extends Component {
  render() {
    return (
      <>
        <Container className="mt-5">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="serviceName">Who I Am</h1>
              <hr />
              <p className="serviceDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <br></br>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br></br>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <br></br>
              <br></br>
              <h1 className="serviceName">Our Mission</h1>
              <hr />
              <p className="serviceDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <br></br>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br></br>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <br></br>
              <br></br>
              <h1 className="serviceName">Our Vision</h1>
              <hr />
              <p className="serviceDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <br></br>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br></br>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AboutDescription;
