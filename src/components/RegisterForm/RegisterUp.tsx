import RegisterInputs from "./RegisterInputs";
import RegisterSubmit from "./RegisterSubmit";

function RegisterUp() {
  return (
    <div className="flex w-full flex-col">
      <div>
        <p className="text-3xl font-bold">Welcome back!</p>
        <p className="mt-10 text-xl text-gray-600">
          Start managing your finance faster and better
        </p>
      </div>
      <RegisterInputs />
      <RegisterSubmit />
    </div>
  );
}

export default RegisterUp;
