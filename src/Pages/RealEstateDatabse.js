import React from "react";

import ServicesSection from "../components/HomePage/ServicesSection";
import AboutSection from "../components/HomePage/AboutSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import PricingSection from "../components/HomePage/PricingSection";
import ContactUs from "./ContactUs";
import WorkSection from "../components/HomePage/WorkSection";
import FAQSection from "../components/HomePage/FAQSection";
import CallToAction from "../components/HomePage/CallToAction";
import BannerForrealEstate from "../components/BannerForrealEstate";
import ServiceSectionForRealEstate from "../components/HomePage/ServiceSectionForRealEstate";
import AboutSectionForRealEstate from "../components/HomePage/AboutSectionForRealEstate";
import WorkSectionforRealEstate from "./WorkSectionforRealEstate";
import PricingSectionforRealEstate from "../components/HomePage/PricingSectionforRealEstate";
import FAQsSectionForRealEstate from "../components/HomePage/FAQsSectionForRealEstate";
import TestimonialSectionforRealEstate from "../components/HomePage/TestimonialSectionforRealEstate";









const RealEstateDatabse = () => {
  return (
    <div className="boxed_wrapper ltr">
      <BannerForrealEstate></BannerForrealEstate>
      <ServiceSectionForRealEstate></ServiceSectionForRealEstate>
      <AboutSectionForRealEstate></AboutSectionForRealEstate>
      <WorkSectionforRealEstate></WorkSectionforRealEstate>
      <PricingSectionforRealEstate></PricingSectionforRealEstate>
      <FAQsSectionForRealEstate></FAQsSectionForRealEstate>
      <TestimonialSectionforRealEstate></TestimonialSectionforRealEstate>
      <ContactUs></ContactUs>
      <CallToAction></CallToAction>
    </div>
  );
};

export default RealEstateDatabse;
