import React, { useState } from "react";
import signupimage from "../../assets/image.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [address, setAddress] = useState("");
  const [disease, setDisease] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here
    console.log({
      firstName,
      lastName,
      age,
      gender,
      bloodGroup,
      weight,
      height,
      address,
      disease,
    });
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-100">
      <div className="flex flex-col md:flex-row w-3/4 h-2/6 max-w-6xl max bg-white shadow-lg rounded-lg overflow-hidden ">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto flex justify-center items-center bg-white">
          <img src={signupimage} alt="Healthcare" className=" h-auto w-full" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
              User Sign Up
            </h2>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium">
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium">
                Blood Group
              </label>
              <select
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-medium">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700 text-sm font-medium">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium">
                Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium">
                Already Suffering From Any Disease
              </label>
              <textarea
                value={disease}
                onChange={(e) => setDisease(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="mb-6 flex flex-col items-center">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
            <hr className="border-b-2 border-gray-800 my-4" />

            <div className="mb-6 text-center">
              <button className="px-6 py-2 text-white bg-blue-400 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                Continue with Google
              </button>
            </div>

            <div className="text-center">
              Already have an account?{" "}
              <Link to="/userlogin">
                <span className="text-blue-500">Log in</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
