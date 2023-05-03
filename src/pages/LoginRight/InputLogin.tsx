import React, { useState } from 'react'
import mailIcon from '../../assets/images/mail.svg'
import passwordIcon from '../../assets/images/password.svg'
import eyeIcon from '../../assets/images/eye.svg'

function InputLogin() {
    const [isShowedPasswd, setShowPasswd] = useState(false);
    const [isFocusedLogin, setFocuseLogin] = useState(false);
    const [isFocusedPasswd, setFocusePasswd] = useState(false);

    const handleClick = () => {
        setShowPasswd(!isShowedPasswd);
    }
    
    const changePasswd = () => {
        setShowPasswd(false);
    }

    return (
        <div className="flex flex-col mt-10 w-full">
            <label className={`px-2 w-full rounded-lg flex items-center h-14 text-lg transition ${isFocusedLogin ? 'bg-[#edeeef]' : 'bg-[#f5f7f9]'}`}>
                <img src={mailIcon} className='w-10 h-10 justify-center bg-white rounded-lg'/>
                <input type="mail" placeholder="you@example.com" onFocus={() => setFocuseLogin(true)} onBlur={() => setFocuseLogin(false)} className='bg-transparent w-full ml-2 h-8 items-center focus:outline-none'/>
            </label>
            <label className={`px-2 w-full rounded-lg flex items-center h-14 text-lg mt-4 transition ${isFocusedPasswd ? 'bg-[#edeeef]' : 'bg-[#f5f7f9]'}`}>
                <img src={passwordIcon} className='w-10 h-10 justify-center bg-white rounded-lg'/>
                <input type={isShowedPasswd ? 'text' : 'password'} onChange={changePasswd} onFocus={() => setFocusePasswd(true)} onBlur={() => setFocusePasswd(false)} placeholder="At least 8 characters" className='bg-transparent w-full ml-2 h-8 items-center focus:outline-none'/>
                <img src={eyeIcon} onClick={handleClick} className='w-5 h-5 justify-center ml-2 mr-2 cursor-pointer'/>
            </label>
        </div>
    );
}

export default InputLogin;