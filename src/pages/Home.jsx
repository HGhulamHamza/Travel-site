import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trips from "../pages/Trips"
import About from "../pages/About"
import Contact from "./Contact";
import TermsAndConditions from "./TermsAndConditions";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Trips />
      <About />
       <TermsAndConditions/>
  <Contact />
 
    </>
  );
};

export default Home;
