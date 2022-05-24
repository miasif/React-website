import React, { Component } from 'react';
import AllProjects from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

export class PortfolioPage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Our Portfolio" />
        <PageTop pagetitle="Our Portfolio" />
        <AllProjects />
        <Footer />
      </>
    );
  }
}

export default PortfolioPage;
