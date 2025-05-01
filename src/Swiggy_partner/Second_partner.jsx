import React from "react";

function Second_partner() {
  return (
    <>
      <div className="second">
        <div id="left">
          <p>In just 3 easy steps</p>
          <h2>Get your restaurant delivery-ready in 24hrs!</h2>
          <div>
            {/* <ul> */}
            <li>
              <b>step 1</b>
              <p>Install the Swiggy Owner App</p>
            </li>
           <span><hr /></span>
            <li>
              <b>step 2</b>
              <p>Login/Register using your phone number</p>
            </li>
            <span><hr /></span>

            <li>
              <b>step 3</b>
              <p>Enter restaurant details</p>
            </li>
            {/* </ul> */}
          </div>
        </div>
        <div id="right">
          <p>For an easy form filling process,</p>
          <b>you can keep these documents handy.</b>
          <span>
            <hr />
          </span>
          <div>
            <li>
              FSSAI License copy <span>Apply Here</span>
            </li>
            <li>Your Restaurant menu</li>
            <li>Bank details</li>
            <li>
              GSTIN
              <span> Apply Here</span>
            </li>
            <li>PAN card copy</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second_partner;
