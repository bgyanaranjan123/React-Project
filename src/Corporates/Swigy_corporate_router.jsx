import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Swigy_corporates from "./Swiggy_AboutPage/Swigy_corporates";
import Business_router from './Swiggy_business/Business_router'
import Business from "./Swiggy_business/Business";
function Swigy_corporate_router() {
  const corporaterouting = createBrowserRouter([
    {
      path: "/",
      element: <Business/>
    },
  ]);


  return (
    <>
      <RouterProvider router={corporaterouting} />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quod possimus ullam illum. Numquam quisquam ratione autem porro magnam quos aliquam labore exercitationem, tenetur in veniam sequi officiis perferendis ipsa.</p>
    </>
  );
}

export default Swigy_corporate_router;
