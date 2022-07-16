import React, { useState } from "react";
import style from "../style/phoneConfirmation.module.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneConfirmationContainer}>
      <Link exact to="/" className={style.backBtn}>
        <IoIosArrowBack />
      </Link>
      <h1>Enter your phone number</h1>
      <PhoneInput international defaultCountry="US" value={value} onChange={setValue} />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Service and Privacy Policy. </span>
        Thanks!
      </p>
      <Link
        exact
        to="/code_confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next <IoIosArrowForward className="ms-1"/>
      </Link>
    </div>
  );
}
