import React, { Component } from 'react';
import AllCourses from '../components/AllCourses/AllCourses';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import TopNavigation from '../components/TopNavigation/TopNavigation';

export class AllCoursePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <TopNavigation title="All Courses" />
        <PageTop pagetitle="All Courses" />
        <AllCourses />
        <Footer />
      </>
    );
  }
}

export default AllCoursePage;
