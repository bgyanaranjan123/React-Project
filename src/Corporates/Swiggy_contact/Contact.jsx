import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiSurroundedEye } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "./contact.css";
function Contact() {
  return (
    <>
      <div className="contact">
        <section>
          <div id="left_section">
            <h1>Customer Support</h1>
            <p>
              Email: <span>support@swiggy.in</span>
            </p>
            <h2>find us on</h2>
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
            <h2>Corporate Office</h2>
            <p>
              No. 55, Sy No. 8-14, Ground Floor, I&J Block, Embassy TechVillage,
              Outer Ring Road, Devarbisanahalli, Bengaluru 560 103, Karnataka,
              India, Corporate Identity Number: U74110KA2013PLC096530
              Registration Number: 096530
            </p>
            <button>Get directions</button>
          </div>
          <div id="right_section">
            <form action="">
              <h2>get in touch</h2>
              <span>
                <input type="text" placeholder="Enter your name" />
              </span>
              <span>
                <input type="text" placeholder="Enter Email address" />
              </span>
              <span>
                <textarea
                  name=""
                  id=""
                  placeholder="Enter message"
                  rows={4}
                ></textarea>
              </span>
              <span>
                <button>submit</button>
              </span>
              <span>
                <p>
                  By contacting us you agree to the
                  <span>Terms and Conditions</span> and
                  <span>Privacy Policy</span>
                </p>
              </span>
            </form>
          </div>
        </section>
        <img src="aboutpageImages/con1.webp" alt="" id="i1" />
        <img src="aboutpageImages/con2.webp" alt="" id="i2" />
      </div>

      <div className="detail">
        <section>
          <div id="left_part">
            <div>
              <h2>Investors/Shareholders</h2>
              <b>Abhishek Agarwal</b>
              <p>Vice President, Investor Relations</p>
              <b>
                Email: <span> ir@swiggy.in</span>
              </b>
            </div>
            <div>
              <h2>Registrar and Share Transfer Agent</h2>
              <p>
                Link Intime India Private Limited Registrar and Share Transfer
                Agent 543/A, 7th Main, 3rd Cross S L Bhyrappa Road,
                Hanumanthnagar Bengaluru, Karnataka 560019
              </p>
              <b>
                Email: <span>https://www.linkintime.co.in/</span>
              </b>
            </div>
          </div>
          <div id="right_part">
            <div>
              <h2>Public Relations and Media</h2>
              <b>Sanjana Shetty (Swiggy Instamart)</b>
              <b>
                Email: <span> sanjana.shetty1@swiggy.in</span>
              </b>
            </div>
            <div>
              <b>Akanksha Jain (Swiggy Food and Swiggy Dineout)</b>
              <b>akanksha. <span>j@swiggy.in</span></b>
            </div>
            <div>
              <b>All media queries can also be addressed</b>
              <b>
                
                to <span>pr@swiggy.in</span>
              </b>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
