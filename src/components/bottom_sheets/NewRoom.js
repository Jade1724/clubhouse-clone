import React, { useState } from "react";
import style from "../../style/roomDetail.module.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { FaHandPeace, FaHandPaper } from "react-icons/fa";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState(true);
  const [itemsVisible, setItemsVisible] = useState(false);
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
              <IoIosArrowBack className={style.arrow_icon} />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img src="/images/user-image1.jpg" className={style.profile_img} />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            style={{ padding: "0.5em 1em" }}
          >
            {card.members.map((item) => (
              <div key={item.id} className={style.memberContainer}>
                {micMuteVisible ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src="/images/user-image2.jpg" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button onClick={() => {
            props.setSheetVisible(false);
          }}
          >
            <FaHandPeace style={{color: "gold"}}/>
            Leave Quietly
          </button>
          <div>
          <button>
            <AiOutlinePlus />
          </button>
          <button>
            <FaHandPaper style={{color: "gold"}}/>
          </button>
          <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
            {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
          </button>
        </div>
        </div>
        
      </div>
    </>
  );
}
