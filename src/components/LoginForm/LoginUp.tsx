import InputLogin from "./LoginInputs";
import InputSubmit from "./LoginSubmit";

function LoginUp() {
  return (
    <div className="flex w-full flex-col">
      <div>
        <p className="text-3xl font-bold">Welcome back!</p>
        <p className="mt-10 text-xl text-gray-600">
          Start managing your finance faster and better
        </p>
      </div>
      <InputLogin />
      <p className="mt-4 cursor-pointer text-right font-bold text-blue-500 hover:underline">
        Forgot password?
      </p>
      <InputSubmit />
    </div>
  );
}

export default LoginUp;
