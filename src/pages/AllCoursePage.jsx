import React, { Component } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

export class AllCoursePage extends Component {
  render() {
    return (
      <>
        <TopNavigation />
        <PageTop pagetitle="All Courses" />
        <AllCourses />
        <Footer />
      </>
    );
  }
}

export default AllCoursePage;
