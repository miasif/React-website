import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5 text-center">
              <h2 className="footerName text-center">Follow Us</h2>
              <div className="socialContainer">
                <a
                  className="facebook social"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a
                  className="youtube social"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a
                  className="twitter social"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Address</h2>
              <p className="footerDesc">
                365/28, Mohakhali DOHS, Dhaka-1212, Bangladesh
                <br />
                <FontAwesomeIcon icon={faEnvelope} /> Email:
                miaasif2002@gmail.com
                <br />
                <FontAwesomeIcon icon={faPhone} /> Phone:4545454545
              </p>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName">Information</h2>
              <Link className="footerLink" to="/about">
                About Me
              </Link>
              <br></br>
              <Link className="footerLink" to="/about">
                Company Profile
              </Link>
              <br></br>
              <Link className="footerLink" to="/contact">
                Contact Us
              </Link>
              <br></br>
              <br />
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5 text-justify">
              <h2 className="footerName ">Policy</h2>
              <Link to="/refund" className="footerLink">
                Refund Policy
              </Link>
              <br />
              <Link to="/terms" className="footerLink">
                Terms And Condition
              </Link>
              <br />
              <Link className="footerLink" to="/privacy">
                Privacy And Policy
              </Link>
              <br></br>
              <br />
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="text-center footerBottom">
          <a
            className="copyRightLink"
            href="https://www.facebook.com/miaasif2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            ©Copyright 2022 ASIF,All Rights Reserved
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
