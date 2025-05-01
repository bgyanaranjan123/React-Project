import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
function SwigyHome() {
  return (
    <div className="Zomato_First_Section">
      <div className="home_section">
        <div id="head">
          <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
        </div>
        <div id="search_section">
          <span>
            <i>
              <FaLocationDot />
            </i>
            <input type="text" placeholder="Enter Your Delivery Location" />

            <i>
              <FaChevronDown />
            </i>
          </span>
          <span>
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
            />
            <i>
              <TbSearch />
            </i>
          </span>
        </div>
        <div id="vegetables">
          <img src="homepageImages/swigyleftbg.avif" alt="" />
          <img src="homepageImages/swigyrightbg.avif" alt="" />
        </div>
        <div id="advertise_food">
          <span>
            <img src="homepageImages/advertisefood1.avif" alt="" />
            <img src="homepageImages/advertisefood2.avif" alt="" />
            <img src="homepageImages/advertisefood3.avif" alt="" />
            <img src="homepageImages/advertisefood4.avif" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SwigyHome;
