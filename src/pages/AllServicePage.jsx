import React, { Component } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import Services from '../components/Services/Services';
import TopNavigation from '../components/TopNavigation/TopNavigation';

export class AllServicePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title="All Services" />
        <PageTop pagetitle="All Services" />
        <Services />
        <ContactSection />
        <Footer />
      </>
    );
  }
}

export default AllServicePage;
