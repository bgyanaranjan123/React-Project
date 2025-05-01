import React from "react";
import SwigyNav from "./SwigyNav";
import SwigyHome from "./SwigyHome";
import Swigy_snacks from "./Swigy_snacks";
import Swigy_resturants, { Swigy_scan } from "./Swigy_resturants";
import Delivery from "./Delivery";
import "../SwiggyHomePage/homeSectionSwiggy.css";
import Swigy_footer_section from "../Swiggy_Footer_Section";
function Swiggy_Home_Section() {
  return (
    <>
      <SwigyNav />
      <SwigyHome />
      <Swigy_snacks />
      <Swigy_resturants />
      <Swigy_scan />
      <Delivery />
      <Swigy_footer_section />
    </>
  );
}

export default Swiggy_Home_Section;
