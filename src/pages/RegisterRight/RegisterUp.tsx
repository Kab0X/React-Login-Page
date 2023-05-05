import InputRegister from "./InputRegister";
import InputSubmit from "./InputSubmit";

function RegisterUp() {
    return (
        <div className="flex flex-col w-full">
            <div>
                <p className="text-3xl font-bold">Welcome back!</p>
                <p className="mt-10 text-xl text-gray-600">Start managing your finance faster and better</p>
            </div>
            <InputRegister />
            <InputSubmit />
        </div>
    );
}

export default RegisterUp;