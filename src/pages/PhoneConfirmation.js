import React, { useState } from "react";
import style from '../style/phoneConfirmation.module.css';
import { Link } from 'react-router-dom';

export default function PhoneConfirmation() {
    const [value, setValue] = useState();
    return (
        <div className={style.phoneConfirmationContainer}>
            <h1>Enter your phone number</h1>
            <p>By entering your number, you're agreeing to our {" "}
                <span>Terms of Service and Privacy Policy. </span>
                Thanks!
            </p>
        </div>
    )
}
