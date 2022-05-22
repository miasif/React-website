import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="text-center serviceMainTitle">MY COURSES</h1>
          <div className="button"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-photo/beautiful-student-girl-learning-online-outdoor_496169-2823.jpg?t=st=1653194362~exp=1653194962~hmac=bb834fe0906b8e9d75134f4eb97c3bf67e261c6668cedc8f31fc61e79c092d51&w=996"
                    alt=""
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 9</h5>
                  <p className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>

                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-photo/beautiful-student-girl-learning-online-outdoor_496169-2823.jpg?t=st=1653194362~exp=1653194962~hmac=bb834fe0906b8e9d75134f4eb97c3bf67e261c6668cedc8f31fc61e79c092d51&w=996"
                    alt=""
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 9</h5>
                  <p className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-photo/beautiful-student-girl-learning-online-outdoor_496169-2823.jpg?t=st=1653194362~exp=1653194962~hmac=bb834fe0906b8e9d75134f4eb97c3bf67e261c6668cedc8f31fc61e79c092d51&w=996"
                    alt=""
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 9</h5>
                  <p className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>

                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-photo/beautiful-student-girl-learning-online-outdoor_496169-2823.jpg?t=st=1653194362~exp=1653194962~hmac=bb834fe0906b8e9d75134f4eb97c3bf67e261c6668cedc8f31fc61e79c092d51&w=996"
                    alt=""
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="serviceName">Laravel 9</h5>
                  <p className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
