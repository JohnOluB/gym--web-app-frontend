import React, { useState } from "react";
import "./LoginPopup.css";
import cross from "../../assets/cross.png";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup container">
        <div className="login-popup-title">
          <h2>{currState} </h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross}
          />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
