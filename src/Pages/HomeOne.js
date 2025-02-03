import React from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/HomePage/ServicesSection";
import AboutSection from "../components/HomePage/AboutSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import PricingSection from "../components/HomePage/PricingSection";
import ContactUs from "./ContactUs";
import WorkSection from "../components/HomePage/WorkSection";
import FAQSection from "../components/HomePage/FAQSection";
import BannerOne from "../components/BannerOne";
import ServicesSectionOne from "../components/HomePage/ServicesSectionOne";
import AboutSectionOne from "../components/HomePage/AboutSectionOne";
import TestimonialSectionOne from "../components/HomePage/TestimonialSectionOne";
import FAQSectionOne from "../components/HomePage/FAQSectionOne";
import VideoSectionHomeOne from "../components/HomePage/VideoSectionHomeOne";






const HomeOne = () => {

  return (
    <div className="boxed_wrapper ltr">
      <BannerOne></BannerOne>
      <ServicesSectionOne></ServicesSectionOne>
      <AboutSectionOne></AboutSectionOne>
      <VideoSectionHomeOne></VideoSectionHomeOne>
      <TestimonialSectionOne></TestimonialSectionOne>
      <FAQSectionOne></FAQSectionOne>
     
    </div>
  );
};

export default HomeOne;
