import React from "react";
import BannerTwo from "../components/BannerTwo";
import AboutSectionTwo from "../components/HomePage/AboutSectionTwo";
import VideoSectionHomeTwo from "../components/HomePage/VideoSectionHomeTwo";
import TestimonialSectionTwo from "../components/HomePage/TestimonialSectionTwo";
import FAQSectionTwo from "../components/HomePage/FAQSectionTwo";
import EditServicesSectionTwo from "./EditServicesSectionTwo";
import ServicesSectionTwo from "../components/HomePage/ServicesSectionTwo";






const HomeTwo = () => {

  return (
    <div className="boxed_wrapper ltr">
      <BannerTwo></BannerTwo>
      <ServicesSectionTwo></ServicesSectionTwo>
      <AboutSectionTwo></AboutSectionTwo>
      <VideoSectionHomeTwo></VideoSectionHomeTwo>
      <TestimonialSectionTwo></TestimonialSectionTwo>
      <FAQSectionTwo></FAQSectionTwo>


    </div>
  );
};

export default HomeTwo;
