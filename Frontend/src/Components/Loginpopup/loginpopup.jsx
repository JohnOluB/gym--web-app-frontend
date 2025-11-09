import React, { useState } from "react";

const LoginPopup = () => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup container">
        <div className="login-popup-title">
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
