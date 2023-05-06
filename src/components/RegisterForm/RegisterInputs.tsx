import React, { useState } from "react";
import mailIcon from "/src/assets/images/mail.svg";
import passwordIcon from "/src/assets/images/password.svg";
import userIcon from "/src/assets/images/user.svg";

function RegisterInputs() {
  const [isFocusedName, setFocuseName] = useState(false);
  const [isFocusedLogin, setFocuseLogin] = useState(false);
  const [isFocusedPasswd, setFocusePasswd] = useState(false);

  return (
    <div className="mt-10 flex w-full flex-col">
      <label
        className={`flex h-14 w-full items-center rounded-lg px-2 text-lg transition ${
          isFocusedName ? "bg-[#edeeef]" : "bg-[#f5f7f9]"
        }`}
      >
        <img
          src={userIcon}
          className="h-10 w-10 justify-center rounded-lg bg-white"
        />
        <input
          type="mail"
          placeholder="first name and last name"
          onFocus={() => setFocuseName(true)}
          onBlur={() => setFocuseName(false)}
          className="ml-2 h-8 w-full items-center bg-transparent focus:outline-none"
        />
      </label>
      <label
        className={`mt-4 flex h-14 w-full items-center rounded-lg px-2 text-lg transition ${
          isFocusedLogin ? "bg-[#edeeef]" : "bg-[#f5f7f9]"
        }`}
      >
        <img
          src={mailIcon}
          className="h-10 w-10 justify-center rounded-lg bg-white"
        />
        <input
          type="mail"
          placeholder="e-mail"
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
          type="password"
          onFocus={() => setFocusePasswd(true)}
          onBlur={() => setFocusePasswd(false)}
          placeholder="password"
          className="ml-2 h-8 w-full items-center bg-transparent focus:outline-none"
        />
      </label>
    </div>
  );
}

export default RegisterInputs;
