import React from "react";
import items from "./grocery_delivery.json";
function Delivery() {
  return (
    <>
      <div className="delivery">
        <div id="food_delivery">
          <h1>cities with food delivery</h1>
          <div>
            {items.map((btn) => {
              return <button>order food online in {btn.name}</button>;
            })}
          </div>
        </div>
        <div id="grocery_delivery">
          <h1>cities with grocery delivery</h1>
          <div>
            {items.map((btn) => {
              return <button>order grocery delivery in {btn.name}</button>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Delivery;
