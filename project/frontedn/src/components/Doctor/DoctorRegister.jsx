import React, { useState } from "react";
import doctoregister2 from "../../assets/doctoregister2.avif";
import doctoregister from "../../assets/doctoregister.jpeg";
import doctoregister3 from "../../assets/doctoregister3.jpg";
import avatarimg from "../../assets/avatarimg.webp";
import sighupuser from "../../assets/signupuser.jpg";
import { Link } from "react-router-dom";
export default function DoctorRegister() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    // You can do something with the selected image here, e.g., upload it to a server
  };
  return (
    <div>
      <section className="px-5 xl:px-0 object-cover  bg-gradient-to-r from-blue-200 to-blue-100">
        <div className="max-w-[1170px] mx-auto bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
            {/* img */}
            <div className="h-full lg:block bg-white rounded-l-lg flex items-center justify-center bg-yellow ">
              <figure className="rounded-l-lg mt-40 object-cover ml-10 ">
                <img
                  src={doctoregister3}
                  alt="resimg"
                  className="w-full rounded-l-lg align-middle "
                />
              </figure>
            </div>
            {/*sigh up form */}
            <div className="rounded-l-lg lg:pl-16 py-10 mr-10">
              <h3 className="text-black mt-1 text-[22px] leading-9 font-bold mb-10 ">
                Create an <span className="text-blue-600">account</span>
              </h3>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Enter your name "
                    name="Full Name"
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Enter your email "
                    name="email"
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Enter your password "
                    name="password"
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    placeholder="Enter your phone number "
                    name="phone"
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                    required
                  />
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter your qualification "
                      name="education"
                      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="specializations"
                      placeholder="Enter your specializations "
                      name="specializations"
                      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      placeholder="Years of experience "
                      name="experience"
                      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Address "
                      name="address"
                      className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                      required
                    />
                  </div>
                  <div className="mb-5 flex items-center gap-4">
                    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-600">
                      <img
                        src={avatarimg}
                        alt="avatar"
                        className="w-full rounded-full"
                      />
                    </figure>
                    <div className="relative w-[160px] h-[50px]">
                      <input
                        type="file"
                        name="photo"
                        id="doctorFile"
                        accept=".jpg,.jpeg,.png,.pdf"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleImageChange}
                      />
                      <label
                        htmlFor="doctorFile"
                        className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-blue-900 text-white font-semibold rounded-lg truncate cursor-pointer"
                      >
                        Upload photo
                      </label>{" "}
                       
                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 mb-0 mt-10"
                    >
                      Create account
                    </button>
                    <hr className=" w-full border-b-2 border-gray-800 mt-3 mb-3 flex items-center" />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 mb-2mt-4"
                    >
                      Continue with google
                    </button>
                  </div>
                  <div className="mt-15 flex justify-center items-center">
                    Already have an account ?
                    <Link to="/doctorlogin">
                      <span className="text-blue-500">Log in </span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
