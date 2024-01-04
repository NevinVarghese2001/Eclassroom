import React, { useState } from 'react'
import './Login.css';
import google from './assets/Google svg (1).png';
import apple from './assets/Apple svg (1).png';
import facebook from './assets/Facebook svg.png';
import email from './assets/email.png';
import Dashboard from './Dashboard';

function Login() {
    return (
        <div className='container'>
            <div className='left'>
                <div className='form1'>
                <h1 className='head'>Welcome to LMS</h1>
                    <p className='subhead'>Your step to flexibility begins here</p>
                    <div className='inp'>
                        <p className='lb-mail'>Email</p>
                        <input type="email" name="email" className='in-mail'  />
                    </div>
                    <div className='inp2'>
                        <p className='lb-pass'>password</p>
                        <input type="password" className='in-pass' />
                    </div>
                    <p className='frgt'>forgot your password?<a href="" className='click'>click here</a></p>
                    <button id='login-bt' onClick={Dashboard} >continue</button>
                    <div className='logwith'>
                        <div className='line1'></div>
                        <p>or login with</p>
                        <div className='line2'></div>
                         </div>

                    <div className='connect'>
                        <div className='con-icon'><a href=""> <img src={google} alt="" className='google' /></a></div>
                        <div className='con-icon'><a href="" ><img src={apple} alt="" className='apple' /></a></div>
                        <div className='con-icon'><a href=""> <img src={facebook} alt="" className='facebook' /></a></div>
                        <div className='con-icon'><a href="" ><img src={email} alt="" className='email' /></a></div>
                    </div>
                </div>
                    
                
            </div>
            <div className='right'>

            </div>



        </div>
    )
}

export default Login