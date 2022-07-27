import React from "react";
import { Link } from "react-router-dom";
import exploreStyle from "../style/explore.module.css";
import style from "../style/profile.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { BsAt, BsUpload, BsPlus } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div
            className={`${exploreStyle.head} text-right mb-0`}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="/home">
              <IoIosArrowBack className={exploreStyle.arrow_icon} />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img src="/images/user-image1.jpg" className={style.profile_image} />
        <h4>Haruka Ichinose</h4>
        <p>I wanna be a React master</p>
        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>51</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter />
            Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram />
            Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/user-image2.jpg" />
          <div>
            <p>Joined 14-July-2020</p>
            <p>
              Nomiated by <span></span>Tomohiro Ichinose
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}
