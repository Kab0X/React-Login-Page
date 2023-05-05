import { Link } from "react-router-dom";
import LineOr from "../LoginRight/LineOr";
import SocialLogin from "../LoginRight/SocialLogin";

function RegisterDown() {
    return (
        <div>
            <LineOr />
            <SocialLogin />
            <div className="flex justify-center mt-10 gap-2">
                <p className="text-gray-400">Already have an account?</p>
                <Link to="/" className="text-blue-400 font-bold cursor-pointer hover:underline">Log In</Link>
            </div>
        </div>
    );
}

export default RegisterDown;