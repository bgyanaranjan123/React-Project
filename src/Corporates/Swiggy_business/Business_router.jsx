import React from "react";
import "./business.css";
import Swigy_corporate_nav from "../Swigy_corporate_nav";
import Business from "./Business";
import Swiggy_Footer_Section from "../../Swiggy_Footer_Section";
function Business_router() {
  return (
    <>
      <Swigy_corporate_nav />
      <Business />
      <Swiggy_Footer_Section />
    </>
  );
}

export default Business_router;
