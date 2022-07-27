import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <FiSearch />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <HiOutlineMailOpen />
        </Link>
        <Link exact to="/upcoming">
          <BiCalendar />
        </Link>
        <Link exact to="/activity">
          <IoIosNotificationsOutline />
        </Link>
        <Link exact to="/profile">
          <img src="images/profile-image.jpg" alt="Profile Image" />
        </Link>
      </div>
    </div>
  );
}
