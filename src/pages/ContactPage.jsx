import React, { Component } from 'react';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

export class ContactPage extends Component {
  render() {
    return (
      <>
        <TopNavigation />
        <PageTop pagetitle="Contact Us" />
        <ContactSection />
        <Footer />
      </>
    );
  }
}

export default ContactPage;
