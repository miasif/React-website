import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import TremsDescription from '../components/TermsDescription/TermsDescription';

class TermsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms And Condition " />
        <PageTop pagetitle="Terms And Condition" />
        <TremsDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default TermsPage;
