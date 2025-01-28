import React from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/HomePage/ServicesSection";
import AboutSection from "../components/HomePage/AboutSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import PricingSection from "../components/HomePage/PricingSection";
import ContactUs from "./ContactUs";
import WorkSection from "../components/HomePage/WorkSection";
import FAQSection from "../components/HomePage/FAQSection";






const Home = () => {

  return (
    <div className="boxed_wrapper ltr">
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <WorkSection></WorkSection>
      <PricingSection></PricingSection>
      <TestimonialSection></TestimonialSection>
      <FAQSection></FAQSection>
      <ContactUs></ContactUs>




    </div>
  );
};

export default Home;
