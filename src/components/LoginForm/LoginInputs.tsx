import React, { useState } from "react";
import mailIcon from "/src/assets/images/mail.svg";
import passwordIcon from "/src/assets/images/password.svg";
import eyeIcon from "/src/assets/images/eye.svg";

function LoginInputs() {
  const [isShowedPasswd, setShowPasswd] = useState(false);
  const [isFocusedLogin, setFocuseLogin] = useState(false);
  const [isFocusedPasswd, setFocusePasswd] = useState(false);

  const handleClick = () => {
    setShowPasswd(!isShowedPasswd);
  };

  const changePasswd = () => {
    setShowPasswd(false);
  };

  return (
    <div className="mt-10 flex w-full flex-col">
      <label
        className={`flex h-14 w-full items-center rounded-lg px-2 text-lg transition ${
          isFocusedLogin ? "bg-[#edeeef]" : "bg-[#f5f7f9]"
        }`}
      >
        <img
          src={mailIcon}
          className="h-10 w-10 justify-center rounded-lg bg-white"
        />
        <input
          type="mail"
          placeholder="you@example.com"
          onFocus={() => setFocuseLogin(true)}
          onBlur={() => setFocuseLogin(false)}
          className="ml-2 h-8 w-full items-center bg-transparent focus:outline-none"
        />
      </label>
      <label
        className={`mt-4 flex h-14 w-full items-center rounded-lg px-2 text-lg transition ${
          isFocusedPasswd ? "bg-[#edeeef]" : "bg-[#f5f7f9]"
        }`}
      >
        <img
          src={passwordIcon}
          className="h-10 w-10 justify-center rounded-lg bg-white"
        />
        <input
          type={isShowedPasswd ? "text" : "password"}
          onChange={changePasswd}
          onFocus={() => setFocusePasswd(true)}
          onBlur={() => setFocusePasswd(false)}
          placeholder="At least 8 characters"
          className="ml-2 h-8 w-full items-center bg-transparent focus:outline-none"
        />
        <img
          src={eyeIcon}
          onClick={handleClick}
          className="ml-2 mr-2 h-5 w-5 cursor-pointer justify-center"
        />
      </label>
    </div>
  );
}

export default LoginInputs;
