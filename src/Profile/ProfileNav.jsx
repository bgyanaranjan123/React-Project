import React from 'react'
import "../Profile/profile.css"
import { FaAngleDown } from "react-icons/fa6";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { LuBadgePercent } from "react-icons/lu";
import { MdLiveHelp } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { TbGardenCart } from "react-icons/tb";
function ProfileNav() {
  return (
    <>
      <div className="profilenav">
        <span>
          <img src="homepageImages/logoProfile.jpg" alt="" />
        </span>
        <span>
          <p>other</p>
          <i><FaAngleDown /></i>
        </span>
        <span>
          <a href="">
            <i><IoBagCheckSharp /></i>
            <p>Swiggy corporate</p>
          </a>
          <a href="">
            <i><IoSearchSharp /></i>
            <p>search</p>
          </a>
          <a href="">
            <i><LuBadgePercent /></i>
            <p>offers <sup style={{color:"#FFA700"}}>new</sup></p>
          </a>
          <a href="">
            <i><MdLiveHelp /></i>
            <p>help</p>
          </a>
          <a href="">
            <i><FaUserAstronaut /></i>
            <p>pradyumna</p>
          </a>
          <a href="">
            <i><TbGardenCart /></i>
            <p>cart</p>
          </a>
        </span>
      </div>
    </>
  )
}

export default ProfileNav