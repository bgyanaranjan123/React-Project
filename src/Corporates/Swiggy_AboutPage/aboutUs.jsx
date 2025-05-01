import React from "react";

function AboutUs() {
  return (
    <div className="about_us">
      <section>
        <h1>About us</h1>
        <p>
          Swiggy is a new-age consumer-first organization offering an
          easy-to-use convenience platform, accessible through a unified app.
        </p>
      </section>
      <span>
        <img src="aboutpageImages/leftarrow.webp" alt="" />
        {/* <img src="aboutpageImages/rightarrow.webp" alt="" /> */}
      </span>
      <section>
        <div id="top">
          <img src="aboutpageImages/aboutimg2.webp" alt="" />
          <img src="aboutpageImages/aboutimg1.webp" alt="" />
          <img src="aboutpageImages/aboutimg3.webp" alt="" />
        </div>
        <div id="bottom">
          <img src="aboutpageImages/aboutimg4.webp" alt="" />
          <img src="aboutpageImages/logo.webp" alt="" />
          <img src="aboutpageImages/aboutimg5.webp" alt="" />
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
