import React from "react";
import style from "../style/explore.module.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

export default function SubHeader({ pageTitle }) {
  return (
    <div className={style.head}>
      <Link to="/home">
        <IoIosArrowBack className={style.exploreSvg}/>
      </Link>
      <h3>{pageTitle}</h3>
    </div>
  );
}
