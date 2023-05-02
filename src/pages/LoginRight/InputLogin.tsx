import React from 'react'
import mailIcon from '../../assets/images/mail.svg'
import passwordIcon from '../../assets/images/password.svg'
import eyeIcon from '../../assets/images/eye.svg'

function InputLogin() {
    return (
        <div className="flex flex-col mt-10 w-full">
            <label className="bg-gray-100 px-2 w-full rounded-lg flex items-center h-14 text-lg">
                <img src={mailIcon} className='w-10 h-10 justify-center bg-white rounded-lg'/>
                <input type="mail" placeholder="you@example.com" className='bg-transparent w-full ml-2 h-8 items-center focus:outline-none'/>
            </label>
            <label className="bg-gray-100 px-2 w-full rounded-lg flex items-center h-14 text-lg mt-4">
                <img src={passwordIcon} className='w-10 h-10 justify-center bg-white rounded-lg'/>
                <input type="password" placeholder="At least 8 characters" className='bg-transparent w-full ml-2 h-8 items-center focus:outline-none'/>
                <img src={eyeIcon} className='w-5 h-5 justify-center ml-2 mr-2 cursor-pointer'/>
            </label>
        </div>
    );
}

export default InputLogin;