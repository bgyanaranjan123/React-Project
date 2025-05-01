import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Investor() {
  return (
    <>
      <div className="investor">
        <h1>INVESTOR RELATIONS</h1>
        <section>
          <span>
            <h1>Earnings Release Q3 FY2025</h1>
            <span>
              <button>view press release</button>
              <button>for more details</button>
            </span>
          </span>
          <img src="aboutpageImages/machine.png" alt="" />
        </section>
      </div>
      <div className="corporate">
        <h1>Corporate Announcements</h1>
        <section>
          <span>
            <div>
              <b>Swiggy Launches One BLCK, An Invite-Only Premium Membership</b>
              <p>january 6,2025</p>
              <i>
                <FaArrowRightLong />
              </i>
            </div>
            <div>
              <b>
                Swiggy launches ‘Bolt’—Delivering Your Favorite Food in Just 10
                Minutes
              </b>
              <p>october 5,2024</p>
              <i>
                <FaArrowRightLong />
              </i>
            </div>
            <div>
              <b>
                Swiggy Instamart brings the convenience of quick commerce to 43
                cities across India
              </b>
              <p>septmber 24,2024</p>
              <i>
                <FaArrowRightLong />
              </i>
            </div>
          </span>
        </section>
      </div>

      <div className="rupee">
        <section>
          <span>
            <h1>Subscribe for investor alerts</h1>
            <span>
              <input type="text" placeholder="Enter your mail" />
              <button>subscribe</button>
            </span>
          </span>
          <img src="aboutpageImages/rupee.webp" alt="" />
        </section>
      </div>

      <div className="queries">
        <section>
          <h1>For Investor Related Queries</h1>
          <span>
            <hr />
          </span>
          <span>
            <b>Abhishek Agarwal</b>
            <p>Vice President</p>
            <p> Investor Relations</p>
            <b>
              Email: <span style={{ color: "#ff5200" }}>ir@swiggy.in</span>
            </b>
            <p>
              For order and service related queries, please email only on
              <span style={{ color: "#ff5200" }}>support@swiggy.in</span>
            </p>
          </span>
        </section>
      </div>
    </>
  );
}

export default Investor;
