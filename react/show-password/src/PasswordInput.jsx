import React from "react";
import "./index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function PasswordInput() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="container">
      <div className="input-wrapper">
        <input type={visible ? "text" : "password"} maxLength={20} />
        <button className="icon-button" onClick={() => setVisible(!visible)}>
          <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
