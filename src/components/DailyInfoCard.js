import React from "react";
import style from "../style/dailyInfoCard.module.css";
import data from "../data/dailyCard.json";

export default function DailyInforCard() {
  return (
    <div className={style.dailyCard}>
      {data.map((item) => (
        <div key={item.id}>
          <span className="">{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
