import React from "react";
import style from '../style/home.module.css';
import Header from "../components/Header";
import DailyInforCard from "../components/DailyInfoCard";
import RoomInfoCard from "../components/RoomInfoCard";

export default function Home() {
  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DailyInforCard />
        <RoomInfoCard />
      </div>
    </>
  );
}
