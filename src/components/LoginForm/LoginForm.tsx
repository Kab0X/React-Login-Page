import LoginDown from "./LoginDown";
import LoginUp from "./LoginUp";

function LoginForm() {
  return (
    <div className="flex col-span-7 flex-col items-center justify-center bg-white">
      <div className="mx-20 w-full max-w-lg">
        <LoginUp />
        <LoginDown />
      </div>
      <div className="fixed bottom-2 text-gray-400">
        <p>© 2022 ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

export default LoginForm;
