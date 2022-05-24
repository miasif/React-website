import React, { Component } from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import Analysis from '../components/Analysis/Analysis';
import ClientReview from '../components/ClientReview/ClientReview';
import Courses from '../components/Courses/Courses';
import RecentProject from '../components/RecentProject/RecentProject';
import Services from '../components/Services/Services';
import Summary from '../components/Summary/Summary';
import TopBanner from '../components/Topbanner/TopBanner';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import Video from '../components/Video/Video';
import Footer from '../components/Footer/Footer';
import Welcome from '../components/Welcome/Welcome';

export class HomePage extends Component {
  render() {
    return (
      <>
        <TopNavigation title="Tempest" />
        <TopBanner />
        <Welcome />
        <Services />
        <Analysis />
        <Summary />
        <RecentProject />
        <Courses />
        <Video />
        <ClientReview />
        <AboutMe />
        <Footer />
      </>
    );
  }
}

export default HomePage;
