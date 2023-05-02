import googleIcon from '../../assets/images/google.svg'
import facebookIcon from '../../assets/images/facebook.png'

function SocialLogin() {
    return (
        <div className="flex items-center mt-6">
            <button className='flex border-solid border-gray-200 border-2 rounded-lg justify-center items-center py-3 w-full mr-4 gap-3 transition hover:bg-gray-100'>
                <img src={googleIcon} className='h-6 w-6'/>
                Google
            </button>
            <button className='flex border-solid border-gray-200 border-2 rounded-lg justify-center items-center py-3 w-full ml-4 gap-3 transition hover:bg-gray-100'>
                <img src={facebookIcon} className='h-6 w-6 items-center'/>
                Facebook
            </button>
        </div>
    );
}

export default SocialLogin;