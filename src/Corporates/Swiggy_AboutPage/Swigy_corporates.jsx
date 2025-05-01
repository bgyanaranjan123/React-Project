import React from "react";
import Swigy_corporate_nav from "../Swigy_corporate_nav";
import "../Swiggy_AboutPage/aboutSwigy.css";
import AboutUs from "./aboutUs";
import About_second_section, { Know_us } from "./About_second_section";
import About_third_section from "./About_third_section";
import Swigy_footer_section from "../../Swiggy_Footer_Section";
function Swigy_corporates() {
  return (
    <>
      <Swigy_corporate_nav />
      <AboutUs />
      <About_second_section />
      <Know_us />
      <About_third_section />
      <Swigy_footer_section />
    </>
  );
}

export default Swigy_corporates;
