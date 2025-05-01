import React from "react";
import "./delivery.css";
function Deliver_first_secction() {
  return (
    <>
      <div className="delivery_first_section">
        <h1>Delivering for everyone</h1>
        <p>
          Multiple benefits across the ecosystem for consumers, partners and
          riders
        </p>
        <span>
          <div>
            <img src="aboutpageImages/delivery1.webp" alt="" />
            <p>Swiggy One</p>
          </div>
          <div>
            <img src="aboutpageImages/delivery2.webp" alt="" />
            <p>HDFC Bank Credit Card</p>
          </div>
          <div>
            <img src="aboutpageImages/delivery3.webp" alt="" />
            <p>Ride with Swiggy</p>
          </div>
          <div>
            <img src="aboutpageImages/delivery4.webp" alt="" />
            <p>partner programme</p>
          </div>
          <div>
            <img src="aboutpageImages/delivery5.webp" alt="" />
            <p>Flavour Meets Fame</p>
          </div>
        </span>
      </div>
      <div className="swiggyOne">
        <section>
          <img src="aboutpageImages/swigyOne.webp" alt="" />
          <span>
            <h2>Swiggy One</h2>
            <p>
              Swiggy One is our membership programme, accessible across
              offerings, that offers members discounts and promotions on our
              platform, including free delivery on select orders. Users can
              become Swiggy One members by paying a membership fee.
            </p>
            <button>know more</button>
          </span>
        </section>
      </div>

      <div className="hdfc">
        <section>
          <span>
            <h2>HDFC Bank Credit Card</h2>
            <p>
              Get ready to experience the awesome world of cashback and benefits
              with the Swiggy HDFC Bank Credit Card!
            </p>
            <button>Apply now</button>
          </span>
          <img src="aboutpageImages/creditCard.webp" alt="" />
        </section>
      </div>

      <div className="ride">
        <section>
          <span>
            <h2>Ride with Swiggy</h2>
            <p>
              Join our platform and earn regular payouts with exciting bonuses
              and incentives, along with other benefits
            </p>
            <button>Apply now</button>
          </span>
          <img src="aboutpageImages/rideswiggy.png" alt="" />
        </section>
      </div>
      <span>
        <hr />
      </span>
      <div className="partner">
        <section>
          <img src="aboutpageImages/partner.png" alt="" />
          <span>
            <h2>swiggy resturant partner programme</h2>
            <p>
              Our unified app approach enables our partner base to benefit from
              a larger user base across offerings, flexible and larger logistics
              and delivery network, and tools to expand their businesses.
            </p>
            <button>Partner with us</button>
          </span>
        </section>
      </div>
      <span>
        <hr />
      </span>
      <div className="flavour">
        <section>
          <span>
            <h2>Flavour Meets Fame</h2>
            <p>
            If you ever wanted to thank your favourite restaurants and wondered how, here’s your chance to express your love by casting a vote for them.
            </p>
            <button>know more</button>
          </span>
          <img src="aboutpageImages/award.png" alt="" />
        </section>
      </div>
    </>
  );
}

export default Deliver_first_secction;
