import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import hotel from "./resturant.json";
import { FaStar } from "react-icons/fa";
function Swigy_resturants() {
  hotel.map((item) => {
    console.log(item);
  });
  return (
    <>
      <div className="all_resturants">
        <span>
          <h1>Discover best restaurants on Dineout</h1>
          <span>
            <i>
              <FaArrowLeft />
            </i>
            <i>
              <FaArrowRightLong />
            </i>
          </span>
        </span>

        <section>
          {hotel.map((box) => {
            return (
              <div className="box">
                <div
                  id="img"
                  style={{
                    background: `url(${box.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <h2>{box.codeNamw}</h2>
                  <h2>
                    <i>
                      <FaStar />
                    </i>
                    {box.rating}
                  </h2>
                </div>
                <div id="content">
                  <span>
                    <p>{box.name}</p>
                    <p>{box.price}</p>
                  </span>
                  <span>
                    <p>{box.place}</p>
                    <p>{box.km}km</p>
                  </span>
                  <span> 
                    <button>table bookig</button>
                  </span>
                  <span>
                    <button>
                      <img src="homepageImages/percentage.avif" alt="" />
                      <p>{box.flat}</p>
                      <p>+4 more</p>
                    </button>
                  </span>
                  <span>
                    <button>up to 10% off with bank offer</button>
                  </span>
                  <span>
                    <p>get extra ₹100 off using phone pay UPI</p>
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

function Swigy_scan() {
  return (
    <>
      <div className="scan">
        <img src="homepageImages/scanpage.avif" alt="" />
      </div>
    </>
  );
}
export { Swigy_scan };
export default Swigy_resturants;
