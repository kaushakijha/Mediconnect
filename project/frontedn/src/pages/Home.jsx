import faqimg from "../assets/faq-img.png";
import React from "react";
import stadoc from "../assets/stadoc.jpg";
import heroImg01 from "../assets/hero-img01.jpg";
import icons01 from "../assets/icon01.png";
import icons02 from "../assets/icon02.png";
import icons03 from "../assets/icon03.png";
import featureImg from "../assets/feature-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Faqlist from "../components/Faq/Faqlist";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      {/* ------hero section------ */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[90px] items-center justify-between">
            {/* -------hero content-------- */}
            <div className="text-center lg:text-left width-">
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[60] md:text-[50px] md:leading-[70px]">
                  MEDICONNECT
                </h1>
                <h2 className="text-[36px] leading-[46px] text-headingColor font-[60] md:text-[30px] md:leading-[60px]">
                  Connecting You to Better Health.
                </h2>

                <p className="text__para mt-4">
                  "Connecting You to Better Health" reflects our mission to make
                  healthcare simple and accessible. Our portal lets users
                  connect with healthcare professionals, schedule appointments,
                  and access reliable health information—all in one place. We
                  provide the tools you need to take control of your well-being,
                  bridging the gap between you and better health.
                </p>
                {/* Search Bar for Doctors by Disease */}
                <div className="relative mt-4 flex gap-0">
                  <input
                    type="text"
                    placeholder="Search doctors for a particular disease..."
                    className="w-3/4 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryColor focus:border-transparent pr-[80px] gap-0"
                  />
                  <button
                    className=" right-0 top-0 bottom-0 bg-primaryColor text-white py-2 px-2 rounded-md border border-transparent ml-0 gap-0"
                    onClick={() => alert("Search functionality coming soon!")}
                  >
                    Search
                  </button>
                </div>
                <button className="btn mt-4">Request an Appointment</button>
              </div>

              {/* -------hero counter------ */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="text-center lg:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    5+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] mx-auto lg:mx-0"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] mx-auto lg:mx-0"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] mx-auto lg:mx-0"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* -------hero image------- */}
          </div>
        </div>
      </section>

      {/* --------------hero section end--------- */}
      <section>
        <div className="container mx-auto px-4">
          <div className="lg:w-[1000px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              "Your Trusted Partner for Expert Medical Advice and Premium
              Healthcare Services."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icons01} alt="Icon 1" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Find qualified doctors and book your appointments with ease.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icons02} alt="Icon 2" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Locate clinics easily for your healthcare needs.
                </p>
                <Link
                  to="/locations"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icons03} alt="Icon 3" />
              </div>
              <div className="mt-[30px] text-center">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700]">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4">
                  Book appointments online for quick access to healthcare.
                </p>
                <Link
                  to="/appointments"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------about section-------- */}
      <About />
      {/* ----------about section end------- */}

      {/* ------------feature section---- */}
      <section className="mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* --------feature content---------- */}
            <div className="xl:w-[670px] text-center lg:text-left">
              <h2 className="heading">
                Get Virtual Treatment <br /> Anytime
              </h2>
              <ul className="pl-4 mt-4">
                <li className="text__para">
                  1. Schedule for appointment directly
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn mt-4">Learn More</button>
              </Link>
            </div>

            {/* ------feature img----------- */}
            <div className="mt-8 lg:mt-0 ">
              <img
                src={featureImg}
                alt="Feature"
                className="w-full object-cover h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* {faq section} */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-[50px] lg:gap-0">
            <div className="w-full lg:w-1/2 hidden lg:block">
              <img
                src={faqimg}
                alt="FAQ"
                className="w-3/5  h-3/5 object-cover ml-10"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="heading">
                Most Asked Questions by Our Beloved Family:
              </h2>
              <Faqlist />
            </div>
          </div>
        </div>
      </section>

      {/* {testimonial section} */}
      <section>
        <div className="container mx-auto px-4">
          <div className="xl:w-[405px] mx-auto text-center">
            <h2 className="heading">What Our Users Say</h2>
            <p className="text__para mt-2">
              World-class care for everyone. Our Health Portal offers unmatched
              expert health care.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
