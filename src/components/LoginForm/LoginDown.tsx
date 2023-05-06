import { Link } from "react-router-dom";

import LoginDivider from "./LoginDivider";
import LoginSocials from "./LoginSocials";

function LoginDown() {
  return (
    <div>
      <LoginDivider />
      <LoginSocials />
      <div className="mt-10 flex justify-center gap-2">
        <p className="text-gray-400">Don't you have an account?</p>
        <Link
          to="/register"
          className="cursor-pointer font-bold text-blue-400 hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginDown;
