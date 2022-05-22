import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export class ClientReview extends Component {
  render() {
    var settings = {
      autoPlaySpeed: 500,
      autoPlay: true,
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Fragment>
        <Container fluid={true} className="sliderBack">
          <h1 className="text-center reviewMainTitle p-3">TESTIMONIAL</h1>
          <div className="reviewButton"></div>
          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?t=st=1653201400~exp=1653202000~hmac=47b9f30ca19c097bb7aaea30c32b03870b68768112211db8d2107fc18b9b6113&w=996"
                    alt=""
                  />
                  <h2 className="reviewName">Asif</h2>
                  <p className="reviewDescription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://img.freepik.com/free-photo/portrait-dark-skinned-confident-man-with-curly-afro-hairstyle-has-calm-face-expression_273609-8520.jpg?w=1380&t=st=1653208756~exp=1653209356~hmac=2e91c50b12ab099501bcc4e1ac1990d16c589044ecd9266264df2aee96508cf4"
                    alt=""
                  />
                  <h2 className="reviewName">Saif</h2>
                  <p className="reviewDescription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://img.freepik.com/free-photo/young-african-man-looking-camera-standing-outdoors_325573-784.jpg?w=1380"
                    alt=""
                  />
                  <h2 className="reviewName">Mike</h2>
                  <p className="reviewDescription">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
