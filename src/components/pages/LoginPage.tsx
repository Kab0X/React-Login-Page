import { useState } from "react";

import Gallery from "../Gallery/Gallery";
import LoginForm from "../LoginForm/LoginForm";

function LoginPage() {
  return (
    <div className="grid grid-cols-12 h-screen w-full">
      <Gallery />
      <LoginForm />
    </div>
  );
}

export default LoginPage;
