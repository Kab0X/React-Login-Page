import logokIcon from '../../assets/images/logo.png'

function Logo() {
    return (
        <div className='flex text-5xl gap-3 cursor-pointer'>
            <img src={logokIcon} className='w-14 h-14'/>
            <p>FINOTIC</p>
        </div>
    );
}

export default Logo;