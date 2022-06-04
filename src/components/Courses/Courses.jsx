import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

export class Courses extends Component {
  constructor() {
    super();
    this.state = {
      myData: [],
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.CourseHome).then((result) => {
      this.setState({
        myData: result,
      });
    });
  }

  render() {
    const myList = this.state.myData;

    const myView = myList.map((myList) => {
      return (
        <Col lg={6} md={6} sm={12}>
          <Row>
            <Col lg={6} md={6} sm={12} className="p-2">
              <img className="courseImg" src={myList.small_img} alt="" />
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h5 className="serviceName">{myList.short_title}</h5>
              <p className="serviceDescription">{myList.short_description}</p>
              <Link className="courseViewMore float-left" to="/coursedetails">
                View Details
              </Link>
            </Col>
          </Row>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container>
          <h1 className="text-center serviceMainTitle">MY COURSES</h1>
          <div className="button"></div>
          <Row>{myView}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
