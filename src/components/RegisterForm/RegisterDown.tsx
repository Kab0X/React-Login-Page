import { Link } from "react-router-dom";
import LoginDivider from "../LoginForm/LoginDivider";
import LoginSocials from "../LoginForm/LoginSocials";

function RegisterDown() {
  return (
    <div>
      <LoginDivider />
      <LoginSocials />
      <div className="mt-10 flex justify-center gap-2">
        <p className="text-gray-400">Already have an account?</p>
        <Link
          to="/"
          className="cursor-pointer font-bold text-blue-400 hover:underline"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}

export default RegisterDown;
