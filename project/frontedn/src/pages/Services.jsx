import React from "react";
import ServiceList from "../components/Services/ServiceList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Services = () => {
  return (
    <div className="container">
      <Header />
      <div className="xl:w-[1000px] mx-auto mt-7">
        <h2 className="heading text-center">Our Services</h2>
        <p className="text__para text-center">
          We offer a wide range of healthcare services to support your
          well-being. Connect with experienced doctors, access reliable health
          information, and schedule appointments effortlessly. Whether for
          preventive care, specialist consultations, or personalized advice,
          we're here to guide you to better health.
        </p>
        <ServiceList />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
