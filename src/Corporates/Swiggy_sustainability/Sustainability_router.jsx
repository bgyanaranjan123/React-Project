import React from "react";
import Swigy_corporate_nav from "../Swigy_corporate_nav";
import Sustainability from "./Sustainability";
import './sustainability.css'
import '../Swiggy_AboutPage/aboutSwigy.css'
import Scan from '../Scan'
import Swiggy_Footer_Section from '../../Swiggy_Footer_Section'
function Sustainability_router() {
  return (
    <>
      <Swigy_corporate_nav/>
      <Sustainability />
      <Scan/>
      <Swiggy_Footer_Section/>
    </>
  );
}

export default Sustainability_router;
