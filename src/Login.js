import React, { useState } from 'react'
import './Login.css';
import google from './assets/Google svg (1).png';
import apple from './assets/Apple svg (1).png';
import facebook from './assets/Facebook svg.png';
import email from './assets/email.png';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <div className='container'>
            <div className='left'>
                <div className='form1'>
                <h1 className='head'>Welcome to LMS</h1>
                    <p className='subhead'>Your step to flexibility begins here</p>
                    <div className='inp'>
                        <p className='lb-mail'>Email address</p>
                        <input type="email" name="email" className='in-mail'  />
                    </div>
                    <div className='inp2'>
                        <div><p className='lb-pass'>Password</p></div>
                        <div>
                            <input type="password" className='in-pass' />
                            </div>
                    </div>
                    <p className='frgt'>Forgot your password?<a href="" className='click'>click here</a></p>
                    <Link to={`/Dashboard/`}><button id='login-bt' >continue</button></Link>
                    <div className='logwith'>
                        <div className='line1'></div>
                        <div className='logwith-p'><p>or login with</p></div>
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