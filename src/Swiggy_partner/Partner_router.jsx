import React from "react";
import Partner from "./Partner";
import Second_partner from "./Second_partner";
import Swigy_footer_section from "../Swiggy_Footer_Section";
import './partner.css'
function Partner_router() {
  return (
    <>
      <Partner />
      <Second_partner />
      <Swigy_footer_section />
    </>
  );
}

export default Partner_router;
