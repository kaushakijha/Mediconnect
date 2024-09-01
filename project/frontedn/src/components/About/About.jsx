import React from 'react'
import aboutImg from "../../assets/about.jpg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <section className='py-9'>
        <div className='container'>
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* ------about img------ */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[450px] z-10 order-2 lg:order-1 ml-10">
                    <img src={aboutImg} alt="" />
                </div>

                {/* -------about content------ */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className='heading'>Top national choice.</h2>
                    <p className='text__para'>
                     We are proud to be recognized as one of the nation’s top
                     healthcare platforms. Our commitment to excellence ensures 
                     superior medical services, seamless appointment scheduling,
                      and access to highly qualified healthcare professionals. 
                      With a focus on accessibility and innovation, we deliver 
                      trustworthy health information and top-tier support, 
                      empowering you to take charge of your health with confidence.        </p>

                    <Link to='/'><button className='btn'>Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About