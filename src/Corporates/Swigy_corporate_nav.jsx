import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router";
function Swigy_corporate_nav() {
  return (
    <>
      <div className="nav">
        <NavLink to="/swiggy.com" activeclassname="active">
          <img src="aboutpageImages/corporateSwiggyLogo.webp" alt="" />
        </NavLink>
        <span>
          <NavLink to="/corporate">about swiggy</NavLink>
          <NavLink to="/business">our businesses</NavLink>
          <NavLink to="/delivery">delivering for everyone</NavLink>
          {/* <NavLink>newsroom</NavLink> */}
          <NavLink to="/investors">
            investors relations
            <i>
              <FaCaretDown />
            </i>
          </NavLink>
          <NavLink to="/sustainability">sustainability</NavLink>
          <NavLink to="/contact">contact us</NavLink>
        </span>
      </div>
    </>
  );
}

export default Swigy_corporate_nav;
