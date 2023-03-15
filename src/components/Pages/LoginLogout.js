import React from 'react';

import Img2 from '../../images/login.jpg'

export default function Login2(){
    return(
        <div className='w-full h-screen flex'>
           <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
               <div className='w-full h-[550px] hidden md:block'>
               <img className='w-full h-full' src={Img2} alt="/" />
                </div>
                <div className='p-4 flex flex-col justify-around'>
                    <form>
                        <h2 className='text-4xl font-bold text-center mb-8'>Bad Bananas</h2>
                        <div>
                            <input className='border p-2 mr-2' type="text" placeholder='username'/>
                            <input className='border p-2' type="password" placeholder='password'/>
                        </div>
                        <button className='w-full py-2 my-4 bg-amber-400 hover:bg-amber-500'>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )

}