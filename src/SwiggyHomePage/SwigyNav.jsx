import React, { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import "../../src/SwiggyHomePage/homeSectionSwiggy.css";
import Login from "../Login";

function SwiggyNav() {
  const [log, setLogin] = useState(false);
  const [right, setRight] = useState("-33vw");

  function moveRight() {
    setRight("0vw");
    console.log("right");
    setLogin(true);
    document.body.style.overflow = "hidden"
  }

  function moveLeft() {
    setRight("-33vw");
    console.log("left");
    setLogin(false);
  }

  return (
    <>
      <div className="nav_bar">
        <img src="homepageImages/swigyLogo.png" alt="Swiggy Logo" />
        <span>
          <NavLink to="/corporate">Swiggy Corporates</NavLink>
          <NavLink to="/partner">Partners with us</NavLink>
          <NavLink to="/getapp">
            <span>
              Get the app
              <i>
                <MdOutlineArrowOutward />
              </i>
            </span>
          </NavLink>
          <NavLink onClick={log ? moveLeft : moveRight}>Sign In</NavLink>
        </span>
      </div>

      <Login value={right} right={setRight} cond={setLogin} />
    </>
  );
}
export default SwiggyNav;
