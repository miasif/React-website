class AppUrl {
  static BaseUrl = 'http://127.0.0.1:8000/api';
  //Home Page Etc Route
  static HomeTopTitle = this.BaseUrl + '/home/title';
  static TechHomeDesc = this.BaseUrl + '/home/tech';
  static TotalHomeDetails = this.BaseUrl + '/home/total';
  static HomeVideo = this.BaseUrl + '/home/video';
  //Project Route
  static ProjectDetails = this.BaseUrl + '/project-details';
  static ProjectAll = this.BaseUrl + '/project-all';
  static ProjectHome = this.BaseUrl + '/project-home';
  //Service Route
  static Service = this.BaseUrl + '/service';
  //Information Route
  static Information = this.BaseUrl + '/information';
  //Footers Route
  static Footer = this.BaseUrl + '/footer';
  //Courses Route
  static CourseDetails = this.BaseUrl + '/courses-details';
  static CourseAll = this.BaseUrl + '/courses-all';
  static CourseHome = this.BaseUrl + '/courses-home';
  //Contact Form Route
  static Constact = this.BaseUrl + '/constactSend';
  //Client Review Route
  static ClientReview = this.BaseUrl + '/clientReview';
  //Chart Route
  static ChartData = this.BaseUrl + '/chartdata';
}

export default AppUrl;
