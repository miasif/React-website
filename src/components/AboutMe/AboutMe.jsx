import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import face from '../../asset/image/face.png';
import { init } from 'ityped';

export class AboutMe extends Component {
  componentDidMount() {
    const myElement = document.querySelector('#myElement');
    init(myElement, {
      showCursor: false,
      strings: ['WEB DEVELOPER!', 'PROGRAMMER!'],
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">ABOUT ME</h1>
          <div className="button"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeImg">
                <img className="aboutImg" src={face} alt="" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeBody">
                <h2 className="aboutMeDetails">Hi There, I'm</h2>
                <h2 className="aboutMeTitle">Asif</h2>
                <h3 className="aboutMeDetails">
                  Work as <span id="myElement">Developer</span>{' '}
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
