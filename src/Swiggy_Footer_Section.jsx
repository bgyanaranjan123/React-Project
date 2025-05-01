import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../src/footer.css'
function Swigy_footer_section() {
  return (
    <>
      <div className="footer">
        <div id="top">
          <section>
            <img src="homepageImages/bottomlogo.svg" alt="" />
            <p>© 2025 Swiggy Limited</p>
          </section>
          <section>
            <b>Company</b>
            <a href="">about us</a>
            <a href="">swiggy corporates</a>
            <a href="">careers</a>
            <a href="">team</a>
            <a href="">swiggy instamart</a>
            <a href="">swiggy one</a>
            <a href="">swiggy dineout</a>
            <a href="">swiggy genis</a>
            <a href="">minis</a>
            <a href="">pyng</a>
          </section>
          <section>
            <section>
              <b>contact</b>
              <a href="">help & support</a>
              <a href="">partner with us</a>
              <a href="">ride with us</a>
              <a href=""></a>
              <a href=""></a>
            </section>
            <section>
              <b>legal</b>
              <a href="">term & conditions</a>
              <a href="">cookie policy</a>
              <a href="">privacy policy</a>
            </section>
          </section>
          <section>
            <b>Available in</b>
            <a href="">bangalore</a>
            <a href="">gurgaon</a>
            <a href="">hyderabad</a>
            <a href="">delhi</a>
            <a href="">mumbai</a>
            <a href="">pune</a>
            <a href=""></a>
            <button>
              685 cities
              <i>
                <FaAngleDown />
              </i>
            </button>
          </section>
          <section>
            <section>
              <b>life at swiggy</b>
              <a href="">Explore with swiggy</a>
              <a href=""> swiggy news</a>
              <a href="">snackables</a>
            </section>
            <section>
              <b>social links</b>
              <span>
                <i>
                  <FaLinkedin />
                </i>
                <i>
                  <FaInstagram />
                </i>
                <i>
                  <FaFacebook />
                </i>
                <i>
                  <GiSurroundedEye />
                </i>
                <i>
                  <FaTwitter />
                </i>
              </span>
            </section>
          </section>
        </div>
        <span>
          <hr />
        </span>
        <div id="bottom">
          <span>
            <h1>For better experience, download the Swiggy app now</h1>
            <button>
              <img src="homepageImages/play.avif" alt="" />
            </button>
            <button>
              <img src="homepageImages/play1.avif" alt="" />
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Swigy_footer_section;
