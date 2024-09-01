import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
export default function login({ username,path='/' }) {
  const [formData, setFormdata] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section className="px-5 lg:-x-0 mt-20  ">
        <div className="  w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 bg-blue-50">
          <h3 className="text-black text-[22px] leading-9 font-bold mb-10">
            Hello! <span className="text-blue-500">Welcome </span>Back{" "}
            {username}
          </h3>

          <form className="py-4 md:py-0">
            <div className="mb-5">
              <input
                type="email"
                placeholder="Enter your email "
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                placeholder="Enter your password "
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md cursor-pointer"
                required
              />
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 mb-0 mt-10"
              >
                Login
              </button>
              <hr className=" w-full border-b-2 border-gray-800 mt-3 mb-3 flex items-center" />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 mb-2mt-4"
              >
                Continue with google
              </button>
            </div>
          </form>
          <div className="mt-15">
            Don&apos;t have an account ?
           <Link to={path}><span className="text-blue-500">Register </span></Link> 
          </div>
        </div>
      </section>
    </div>
  );
}
