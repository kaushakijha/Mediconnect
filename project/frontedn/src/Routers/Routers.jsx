import React from "react";
import { Routes, Route } from "react-router-dom";
import Enter from "../components/source/Enter";
import DoctorLogin from "../components/Doctor/DoctorLogin";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import UserRegister from "../components/User/UserRegister";
import DoctorRegister from "../components/Doctor/DoctorRegister";
import UserLogin from "../components/User/UserLogin";
import Services from "../pages/Services";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Enter />} />
      <Route path="/doctorlogin" element={<DoctorLogin />} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/registerdoctor" element={<DoctorRegister />} />
      <Route path="/registeruser" element={<UserRegister />} />
      <Route path="/services" element={<Services />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routers;
