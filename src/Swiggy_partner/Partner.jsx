import React from "react";
import { TbChartLine } from "react-icons/tb";
import { MdSmsFailed } from "react-icons/md";
function Partner() {
  return (
    <div className="partner_first_section">
      <div id="left_part">
        <img src="homepageImages/s_logo.png" alt="" />
        <p>PARTNER WITH SWIGGY!</p>
        <i>
          <TbChartLine />
        </i>
        <h1>Reach customers far away from you</h1>
      </div>
      <div id="right_part">
        <form action="" method="dialog">
          <h2>get started</h2>
          <span>
            <p>Enter a mobile number or restaurant ID to continue</p>
            <i>
              <MdSmsFailed />
            </i>
          </span>
          <span>
            <input type="text" placeholder="Enter resturant id / mobile number" />
          </span>
          <span>
            <button>continue</button>
          </span>
          <p>
            By logging in, I agree to Swiggy’s
            <span> terms & conditions</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Partner;
