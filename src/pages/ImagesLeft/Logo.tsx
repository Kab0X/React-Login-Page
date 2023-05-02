import facebookIcon from '../../assets/images/facebook.png'

function Logo() {
    return (
        <div className='flex text-4xl gap-4 cursor-pointer'>
            <img src={facebookIcon} className='w-10 h-10'/>
            <p>FINOTIC</p>
        </div>
    );
}

export default Logo;