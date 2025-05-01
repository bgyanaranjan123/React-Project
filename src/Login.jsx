import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import ProfileNav from "./Profile/ProfileNav";
function Login(prop) {
  const [number, setNumber] = useState("");
  const { value, right, cond } = prop;
  const [click, setclick] = useState(false)
  const [OTP, setotp] = useState()
  const [profile, setprofile] = useState(false)
  function left() {
    right("-33vw");
    cond(false);
    document.body.style.overflowY = "scroll";
  }

  function check(e) {
    const key = e.key;
    if (!/^\d$/.test(key)) {
      e.preventDefault(); // Only allow digits
    }
  }

  // Handle input change
  function handleChange(e) {
    // Only accept max 10 digits
    const val = e.target.value;
    if (/^\d*$/.test(val) && val.length <= 10) {
      setNumber(val);
    }
  }

  // Check if login is valid
  function handleLogin() {
    if (number.length === 10) {

      setclick(true)

      setTimeout(() => {
        let otp = ""
        let str = "1234056789"
        for (let i = 1; i <= 4; i++) {
          let num = Math.trunc(Math.random() * str.length)
          otp += str[num]
        }
        setotp(otp)
        alert("Otp is " + otp);
      }, 2000)

    } else {
      alert("invalid attempt");
    }
  }

  return (
    <div
      className="login"
      style={{ right: value, transition: "right .5s linear" }}
    >
      <div>
        <i onClick={left}>
          <RxCross2 />
        </i>
        <section>
          <span>
            <h1>Login</h1>
            <p>
              or {click ? "We sent Otp to the number" : <span>Create an account</span>}
            </p>
          </span>
          <img src="homepageImages/loginImg.avif" alt="" />
        </section>

        <span>
          <input
            type="text"
            placeholder="phone number"
            value={number}
            onKeyDown={check}
            onChange={handleChange}
          />
        </span>
        {click && <span>
          <input
            type="number"
            placeholder="Otp"
            value={OTP}
          />
        </span>}
        <span>
          {click ? <button onClick={() => setprofile(true)} >Login</button> : <button onClick={() => handleLogin()}>Get Otp</button>}
        </span>
        {profile && <ProfileNav />}
        <p>
          By clicking on Login, I accept the
          <span>Terms & Conditions & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}




export default Login;