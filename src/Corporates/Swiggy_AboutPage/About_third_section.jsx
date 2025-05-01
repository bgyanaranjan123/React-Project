import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function About_third_section() {
  return (
    <>
      <div className="management">
        <section>
          <span>
            <button>managemant team</button>
            <button>board of director</button>
          </span>
          <i>
            <FaArrowRightLong />
          </i>
        </section>
        <section>
          <div>
            <img src="aboutpageImages/person1.webp" alt="" />
            <span>
              <span>
                <h1>nandan reddy</h1>
                <p>whole-time-director</p>
              </span>
              <i>
                <FaArrowRightLong />
              </i>
            </span>
          </div>
          <div>
            <img src="aboutpageImages/person2.webp" alt="" />
            <span>
              <span>
                <h1>rohit capoor</h1>
                <p>CEO-martplace</p>
              </span>
              <i>
                <FaArrowRightLong />
              </i>
            </span>
          </div>
          <div>
            <img src="aboutpageImages/person3.webp" alt="" />
            <span>
              <span>
                <h1>phani kishan</h1>
                <p>chief growth officer</p>
              </span>
              <i>
                <FaArrowRightLong />
              </i>
            </span>
          </div>
          <div>
            <img src="aboutpageImages/person4.webp" alt="" />
            <span>
              <span>
                <h1>sriharsha majety</h1>
                <p>managing direcor & group CEO</p>
              </span>
              <i>
                <FaArrowRightLong />
              </i>
            </span>
          </div>
        </section>
      </div>
      <span>
        <hr />
      </span>
      <div className="blog">
        <h1>Swiggy blog</h1>
        <span>
          <div>
            <img src="aboutpageImages/blog1.png" alt="" />
            <section>
              <p>october 12,2024</p>
              <h1>Bridging cultures through cuisine: The Nasi and Mee Story</h1>
              <button>read more</button>
            </section>
          </div>
          <div>
            <img src="aboutpageImages/blog2.png" alt="" />
            <section>
              <p>october 11,2024</p>
              <h1>
                Hiring from 1x to 10x via Swiggy’s Future Proofing Strategy
              </h1>
              <button>read more</button>
            </section>
          </div>
          <div>
            <img src="aboutpageImages/blog3.png" alt="" />
            <section>
              <p>october 5,2024</p>
              <h1>
                Taking Local Campaigns to the National Stage, ft. Rana Bayas,
                Senior Area Sales Manager at Swiggy
              </h1>
              <button>read more</button>
            </section>
          </div>
        </span>
        <button>explore</button>
      </div>
      <div className="scan">
        <img src="aboutpageImages/scanpage.avif" alt="" />
      </div>

      <div className="googleMap">
        <h1>get in touch with us</h1>
        <span>
          <div>
            <b>Head Office Address:</b>
            <p>Swiggy Limited</p>
            <p>
              No. 55 Sy No 8 to 14 I & J Block – Ground Floor, Embassy Tech
              Village | Outer Ring Road, Devarbisanahalli, Bengaluru – 560103
            </p>
            <b>For help and support:</b>
            <p>Email : support@swiggy.in</p>
          </div>
          <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d422407.8073836822!2d81.79779783786603!3d16.588499700288377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13d0c47c7ad9%3A0x96b90ab7aae4436b!2sSwiggy%20HO!5e0!3m2!1sen!2sus!4v1744391490785!5m2!1sen!2sus"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </span>
      </div>
    </>
  );
}

export default About_third_section;
