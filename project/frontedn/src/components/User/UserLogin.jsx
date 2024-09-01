import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="w-full h-screen bg-gradient-to-r from-blue-200 to-blue-100 flex justify-center items-center px-4 md:px-0">
        <div className="w-full max-w-md lg:max-w-lg h-auto p-6 md:p-10 bg-blue-50 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Hello! <span className="text-blue-500">Welcome </span>Back Champ!
          </h1>

          <form className="space-y-6">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none text-black placeholder:text-gray-600 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg rounded-lg px-4 py-3 mb-4"
            >
              Login
            </button>

            <hr className="border-b-2 border-gray-800 my-4" />

            <button
              type="button"
              className="w-full bg-blue-600 text-white text-lg rounded-lg px-4 py-3"
            >
              Continue with Google
            </button>
          </form>

          <div className="mt-6 text-center text-lg">
            <h3>
              Don&apos;t have an account?{" "}
              <Link to="/registeruser">
                <span className="text-blue-500">Register</span>
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
