import RegisterDown from "./RegisterRight/RegisterDown";
import RegisterUp from "./RegisterRight/RegisterUp";

function RegisterRight() {
    return (
        <div className="basis-7/12 bg-white items-center flex justify-center flex-col">
            <div className="w-full max-w-lg mx-20">
                <RegisterUp />
                <RegisterDown />
            </div>
            <div className="text-gray-400 fixed bottom-2">
                <p>© 2022 ALL RIGHTS RESERVED</p>
            </div>
        </div>
    );
}

export default RegisterRight;