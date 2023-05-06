import googleIcon from "/src/assets/images/google.svg";
import facebookIcon from "/src/assets/images/facebook.png";

function LoginSocials() {
  return (
    <div className="mt-6 flex items-center">
      <button className="mr-4 flex w-full items-center justify-center gap-3 rounded-lg border-2 border-solid border-gray-200 py-3 transition hover:bg-gray-100">
        <img src={googleIcon} className="h-6 w-6" />
        Google
      </button>
      <button className="ml-4 flex w-full items-center justify-center gap-3 rounded-lg border-2 border-solid border-gray-200 py-3 transition hover:bg-gray-100">
        <img src={facebookIcon} className="h-6 w-6 items-center" />
        Facebook
      </button>
    </div>
  );
}

export default LoginSocials;
