import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile } from "react-icons/ai";
import { BsMicMuteFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(false);
  const card = props.cardDetail;

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <a
              href="#"
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <IoIosArrowBack className={style.arrow_icon}/>
            </a>
            <span>Hallway</span>
            <div>
                <AiOutlineFile />
                <img src="/images/user-image1.jpg" className={style.profile_img}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
