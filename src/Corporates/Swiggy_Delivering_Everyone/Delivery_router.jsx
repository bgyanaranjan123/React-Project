import React from 'react'
import Deliver_first_secction from './Deliver_first_secction'
import Swigy_corporate_nav from '../Swigy_corporate_nav'
import Scan from '../Scan'
import Swiggy_Footer_Section from "../../Swiggy_Footer_Section"
function Delivery_router() {
  return (
    <>
    <Swigy_corporate_nav/>
    <Deliver_first_secction/>
    <Scan/>
    <Swiggy_Footer_Section/>
    </>
  )
}

export default Delivery_router