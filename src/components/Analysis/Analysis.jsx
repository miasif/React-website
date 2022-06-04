import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import AppUrl from '../../RestApi/AppUrl';
import RestClient from '../../RestApi/RestClient';
import parse from 'html-react-parser';

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      techdesc: '',
    };
  }
  componentDidMount() {
    RestClient.GetRequest(AppUrl.ChartData).then((result) => {
      this.setState({ data: result });
    });
    RestClient.GetRequest(AppUrl.TechHomeDesc).then((result) => {
      this.setState({ techdesc: result[0]['tech_description'] });
    });
  }

  render() {
    var blue = '#051b35';
    return (
      <Fragment>
        <Container>
          <h1 className="text-center serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="button"></div>
          <Row>
            <Col
              style={{ width: '100', height: '300px' }}
              lg={6}
              md={12}
              sm={12}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Techonology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                {parse(this.state.techdesc)}
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
