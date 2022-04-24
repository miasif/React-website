import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Techonology: 'React', Project: 100 },
        { Techonology: 'Angular', Project: 90 },
        { Techonology: 'Node', Project: 95 },
        { Techonology: 'MongoDB', Project: 85 },
        { Techonology: 'Express', Project: 80 },
        { Techonology: 'Bootstrap', Project: 70 },
        { Techonology: 'HTML', Project: 80 },
        { Techonology: 'CSS', Project: 60 },
        { Techonology: 'Javascript', Project: 100 },
        { Techonology: 'Jquery', Project: 75 },
        { Techonology: 'React Native', Project: 65 },
      ],
    };
  }

  render() {
    var blue = '#051b35';
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="button"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <h1>Barchart</h1>
            </Col>
            <Col
              style={{ width: '100%', height: '300%' }}
              lg={6}
              md={12}
              sm={12}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Techonology" />
                  <Tooltip />
                  <Bar dataKey="Project" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <br></br>
                <br></br>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
