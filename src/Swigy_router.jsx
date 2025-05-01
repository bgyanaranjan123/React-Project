import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Swiggy_Home_Section from "./SwiggyHomePage/ComponentCall";
import Partner_router from "./Swiggy_partner/Partner_router";
// import Swigy_corporate_router from "./Corporates/Swigy_corporate_router";
import Swigy_corporates from "./Corporates/Swiggy_AboutPage/Swigy_corporates";
import Business_router from "./Corporates/Swiggy_business/Business_router";
import Delivery_router from "./Corporates/Swiggy_Delivering_Everyone/Delivery_router";
import Investor_router from "./Corporates/Swiggy_investors/investor_router";
import Sustainability_router from "./Corporates/Swiggy_sustainability/Sustainability_router";
import Contact_router from "./Corporates/Swiggy_contact/Contact_router";
import Login from "./Login";
import Error from "./Error";
import './Profile/ProfileNav'
import ProfileNav from "./Profile/ProfileNav";
import Profilerouter from "./Profile/Profilerouter";
function Swigy_router() {
  const routingSwiggy = createBrowserRouter([
    {
      path: "/",
      element: <Profilerouter/>
      // errorElement:<Error/>
    },
    {
      path: "/partner",
      element: <Partner_router />,
      // errorElement:<Error/>

    },
    {
      path: "/swiggy.com",
      element: <Swiggy_Home_Section />,
      // errorElement:<Error/>

    },
    {
      path: "/corporate",
      element: <Swigy_corporates />,
      // errorElement:<Error/>

    },
    {
      path: "/business",
      element: <Business_router />,
      // errorElement:<Error/>

    },
    {
      path: "/delivery",
      element: <Delivery_router />,
      // errorElement:<Error/>

    },
    {
      path: "/investors",
      element: <Investor_router />,
      // errorElement:<Error/>

    },
    {
      path: "/sustainability",
      element: <Sustainability_router />,
      // errorElement:<Error/>

    },
    {
      path: "/contact",
      element: <Contact_router />,
      // errorElement:<Error/>

    },
  ]);

  return (
    <>
      <RouterProvider router={routingSwiggy} />
    </>
  );
}
export default Swigy_router;
