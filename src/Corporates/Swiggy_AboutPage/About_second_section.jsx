import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function About_second_section() {
  return (
    <>
      <div className="vdo">
        <h1>IPO Delivered - November 2024</h1>
        <section>
          <video
            src="aboutpageImages/vdoSwiggy.mp4"
            autoPlay
            muted
            controls
          ></video>
        </section>
      </div>
    </>
  );
}

function Know_us() {
  return (
    <>
      <div className="know_us">
        <h1>get to know us</h1>
        <span>
          <div>
            <h2>
              Mission
              <i>
                <FaArrowRightLong />
              </i>
            </h2>
            <span>
              <hr />
            </span>
            <h2>vision</h2>
            <span>
              <hr />
            </span>
            <h2>values</h2>
          </div>
          <p>
            Our mission is to elevate the quality of life of the urban consumer
            by offering unparalleled convenience. Convenience is what makes us
            tick. It’s what makes us get out of bed and say, “Let’s do this.
          </p>
          <img src="aboutpageImages/deliveryBoy.png" alt="" />
        </span>
      </div>
      <span>
        <hr />
      </span>
      <div className="industry">
        <h1>industry pioneer</h1>
        <span>
          <p>
            Being among the first few entrants, Swiggy has successfully
            pioneered the hyperlocal commerce industry in India, launching Food
            Delivery in 2014 and Quick Commerce in 2020. Due to the pioneering
            status of Swiggy, it is well-recognised as a leader in innovation in
            hyperlocal commerce and as a brand synonymous with the categories it
            is present in.
          </p>
          <div>
            <img src="aboutpageImages/industry.webp" alt="" />
          </div>
        </span>
      </div>
      <div className="rate">
        <section>
          <span>
            <h1>3 Billion+</h1>
            <p>orders delivered</p>
          </span>
          <hr />
          <span>
            <h1>220k+</h1>
            <p>restaurant partner</p>
          </span>
          <hr />
          <span>
            <h1>520k+</h1>
            <p>delivery partners</p>
          </span>
          <hr />
          <span>
            <h1>680+</h1>
            <p>cities in India</p>
          </span>
        </section>
      </div>
    </>
  );
}
export { Know_us };
export default About_second_section;
