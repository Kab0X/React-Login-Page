import React, { useState } from 'react'
import mailIcon from '../../assets/images/mail.svg'
import passwordIcon from '../../assets/images/password.svg'
import userIcon from '../../assets/images/user.svg'

function InputRegister() {
    const [isFocusedName, setFocuseName] = useState(false);
    const [isFocusedLogin, setFocuseLogin] = useState(false);
    const [isFocusedPasswd, setFocusePasswd] = useState(false);

    return (
        <div className="flex flex-col mt-10 w-full">
            <label className={`px-2 w-full rounded-lg flex items-center h-14 text-lg transition ${isFocusedName ? 'bg-[#edeeef]' : 'bg-[#f5f7f9]'}`}>
                <img src={userIcon} className='w-10 h-10 justify-center bg-white rounded-lg'/>
                <input type="mail" placeholder="first name and last name" onFocus={() => setFocuseName(true)} onBlur={() => setFocuseName(false)} className='bg-transparent w-full ml-2 h-8 items-center focus:outline-none'/>
            </label>
            <label className={`px-2 w-full rounded-lg flex items-center h-14 text-lg mt-4 transition ${isFocusedLogin ? 'bg-[#edeeef]' : 'bg-[#f5f7f9]'}`}>
                <img src={mailIcon} className='w-10 h-10 justify-center bg-white rounded-lg'/>
                <input type="mail" placeholder="e-mail" onFocus={() => setFocuseLogin(true)} onBlur={() => setFocuseLogin(false)} className='bg-transparent w-full ml-2 h-8 items-center focus:outline-none'/>
            </label>
            <label className={`px-2 w-full rounded-lg flex items-center h-14 text-lg mt-4 transition ${isFocusedPasswd ? 'bg-[#edeeef]' : 'bg-[#f5f7f9]'}`}>
                <img src={passwordIcon} className='w-10 h-10 justify-center bg-white rounded-lg'/>
                <input type='password' onFocus={() => setFocusePasswd(true)} onBlur={() => setFocusePasswd(false)} placeholder="password" className='bg-transparent w-full ml-2 h-8 items-center focus:outline-none'/>
            </label>
        </div>
    );
}

export default InputRegister;