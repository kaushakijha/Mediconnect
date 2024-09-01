import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/source/Login";
import Enter from "./components/source/Enter";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
