import React from "react";
import homeimg from "../../assets/homeimg.jpg";
import { Link } from "react-router-dom";
export default function Enter() {
  return (
    <div>
      <div className="">
        <section className="px-5 xl:px-0 flex justify-center items-center static ">
          <div className="max-w-[2000px] mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-2  ">
              {/* img */}
              <div className="h-full lg:block bg-blue rounded-l-lg flex items-center justify-center bg-yellow sm:gap-0">
                <figure className="rounded-l-lg mt-2 ">
                  <img
                    src={homeimg}
                    alt="resimg"
                    className="w-svw h-full rounded-l-lg align-middle "
                  />
                </figure>
              </div>
              {/*sigh up form */}

              <div className="block  mt-28 bg-blue-50 sm:mt-2 ">
                <div className="font-bold font-serif lg:text-7xl  sm:text-6xl md:text-6xl justify-center items-center mt-24 ml-32 sm:text-left pt-0 gap-0">
                  MEDICONNECT
                  <hr className="w-3/5 border-b-2 border-gray-800 mt-9" />
                </div>
                <div className="text-base flex justify-center items-center mt-3 mb-5">
                  Mediconnect: Your health, our priority.
                </div>
                <hr className=" ml-16 w-3/4 border-b-2 border-gray-800 mt-9  flex items-center" />
                <div>
                  <Link to="/UserLogin">
                    \
                    <button className="w-3/4 h-16 mt-20 mb-10 bg-blue-600 ml-12 text-lg rounded-lg text-white">
                      LOG IN AS USER
                    </button>
                  </Link>
                  <Link to="/doctorlogin">
                    {" "}
                    <button className="w-3/4  mt-2 h-16 mb-5 bg-blue-600 ml-12 rounded-lg text-white text-lg">
                      LOGIN AS DOCTOR
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
