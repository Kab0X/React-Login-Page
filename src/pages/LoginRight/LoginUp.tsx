import InputLogin from "./InputLogin";
import InputSubmit from "./InputSubmit";

function LoginUp() {
    return (
        <div className="flex flex-col w-full">
            <div>
                <p className="text-3xl font-bold">Welcome back!</p>
                <p className="mt-8 text-xl text-gray-600">Start managing your finance faster and better</p>
            </div>
            <InputLogin />
            <p className="text-blue-500 font-bold mt-2 text-right cursor-pointer hover:underline">Forgot password?</p>
            <InputSubmit />
        </div>
    );
}

export default LoginUp;