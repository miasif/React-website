import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

export class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">RRCENT PROJECTS</h1>
          <div className="button"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?t=st=1653128926~exp=1653129526~hmac=20644b076c6dbb37694a1313864de1a053a21f481200610e1dda7f76166c9dd9&w=1380"
                />
                <Card.Body>
                  <Card.Title className="serviceName">
                    Project Name One
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Vist Webite</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?t=st=1653115558~exp=1653116158~hmac=d0a5d1abd5c886017bcef580dde5fb932869ce55159080f26cf49699c5a845aa&w=1380"
                />
                <Card.Body>
                  <Card.Title className="serviceName">
                    Project Name Two
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Vist Webite</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/kids-online-lessons_52683-36818.jpg?t=st=1653115558~exp=1653116158~hmac=a0931d353d976ca2394729df1c75832283aaa78ba5cdefca84c1c6fe130d67b2&w=1380"
                />
                <Card.Body>
                  <Card.Title className="serviceName">
                    Project Name Three
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Vist Webite</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;
