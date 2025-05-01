import React from "react";
import "./investor.css";
import Investor from "./Investor";
import Swigy_corporate_nav from "../Swigy_corporate_nav";
import Scan from '../Scan'
import Swiggy_Footer_Section from '../../Swiggy_Footer_Section'
function Investor_router() {
  return (
    <>
      <Swigy_corporate_nav />
      <Investor />
      <Scan/>
      <Swiggy_Footer_Section/>
    </>
  );
}

export default Investor_router;
