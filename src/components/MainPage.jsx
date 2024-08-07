import React from "react";
import Courses from "./Courses";
import PopularCourses from "./PopularCourses";
import ApprodablePackages from "./ApprodablePackages";
import MostPopularCourses from "./MostPopularCourses";
import FAQ from "./FAQ";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Home from "./Home";

const MainPage = () => {
  return (
    <>
      <Home />
      <div className="d-block d-sm-none" style={{ margin: "20vh" }}></div>
      <Courses />
      <div className="d-block d-sm-none" style={{ margin: "40vh" }}></div>
      <PopularCourses />
      <ApprodablePackages />
      <div className="d-block d-sm-none" style={{ margin: "130vh" }}></div>
      <MostPopularCourses />
      <div className="d-block d-sm-none" style={{ margin: "195vh" }}></div>
      <FAQ numberOfFAQs={9} />
      <div className="d-block d-sm-none" style={{ margin: "110vh" }}></div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainPage;
