import React, { useState } from "react";
import style from "../style/explore.module.css";
import { DownOutlined, FireOutLined } from "@ant-design/icons";
import data from "../data/explore.json";

export default function Explore() {
  const { people, conversation } = data;

  return (
    <div className={style.exploreContainer}>
      <h6> PEOPLE TO FOLLOW</h6>
      <div className={style.peopleContainer}>
        {people.map((item) => (
          <div>
            <div className="d-flex align-items-center">
              <img src="/images/user-image1.jpg" alt="" />
              <div className="ms-2">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
            <button>Follow</button>
          </div>
        ))}
        <button className={style.showMore}>
            Show more people <DownOutlined />
        </button>
      </div>
    </div>
  );
}
