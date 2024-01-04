import React, { useState } from 'react'
import './Login.css';

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
                    <p className='frgt'>forgot your password? <a href="">click here</a></p>
                    <button id='login-bt'>continue</button>
                    <div className='logwith'>
                        <div className='line1'></div>
                        <p>or login with</p>
                        <div className='line2'></div>
                         </div>

                    <div>
                        <a href=""> <img src="" alt="" /></a>
                        <a href="" ><img src="" alt="" /></a>
                        <a href=""> <img src="" alt="" /></a>
                        <a href="" ><img src="" alt="" /></a>
                    </div>
                </div>
                    
                
            </div>
            <div className='right'>

            </div>



        </div>
    )
}

export default Login