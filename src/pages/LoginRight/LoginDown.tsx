import LineOr from "./LineOr";
import SocialLogin from "./SocialLogin";

function LoginDown() {
    return (
        <div>
            <LineOr />
            <SocialLogin />
            <div className="flex justify-center mt-10 gap-2">
                <p className="text-gray-400">Don't you have an account?</p>
                <p className="text-blue-400 font-bold cursor-pointer hover:underline">Sign Up</p>
            </div>
        </div>
    );
}

export default LoginDown;