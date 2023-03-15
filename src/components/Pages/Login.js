import React from 'react'
import NavBar from '../NavBar';
import Footer from '../Footer';
import "../../App.css";

function Login() {

    return (

        <div className="w-full bg-white">
            <NavBar />
            <div className='mb-20'>
                <h1 className='flex justify-center font-bold '>Login</h1>
            </div>
         
            <Footer />
        </div>
    )
    }
    
 export default Login;