import React from "react";
import Contact from "./Contact";
import Swigy_corporate_nav from "../Swigy_corporate_nav";
import "../Swiggy_AboutPage/aboutSwigy.css";
import "./contact.css";
import Scan from "../Scan";
import Swiggy_Footer_Section from "../../Swiggy_Footer_Section";
function Contact_router() {
  return (
    <>
      <Swigy_corporate_nav />
      <Contact />
      <Scan />
      <Swiggy_Footer_Section />
    </>
  );
}

export default Contact_router;
