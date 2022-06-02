import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';

class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subTitle: '',
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.HomeTopTitle).then((result) => {
      this.setState({
        title: result[0].home_title,
        subTitle: result[0].home_subtitle,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="topTitle">{this.state.title}</h1>
                  <h4 className="topSubTitle">{this.state.subTitle}</h4>
                  <Button variant="primary">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
