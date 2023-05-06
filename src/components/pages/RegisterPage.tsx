import { useState } from "react";

import Gallery from "../Gallery/Gallery";
import RegisterForm from "../RegisterForm/RegisterForm";

function RegisterPage() {
  return (
    <div className="grid grid-cols-12 h-screen w-full">
      <Gallery />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
