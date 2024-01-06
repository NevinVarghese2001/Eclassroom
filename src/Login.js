import React, { useState } from 'react'
import './Login.css';
import google from './assets/Google svg (1).png';
import apple from './assets/Apple svg (1).png';
import facebook from './assets/Facebook svg.png';
import email from './assets/email.png';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';


const Login = () =>{
         
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        
      });

      const [errors, setErrors] = useState({
        email: '',
        password: '',
        
      });

      const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

      const validatePassword = (password) => {
        // Define your password regex validation logic here
        // Example: password should be at least 8 characters long
        return password.length >= 8;
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


        // Validation checks based on regex
    if (name === 'email') {
        const isValidEmail = validateEmail(value);
        setErrors({ ...errors, email: isValidEmail ? '' : 'Invalid email address' });
      } else if (name === 'password') {
        const isValidPassword = validatePassword(value);
        setErrors({ ...errors, password: isValidPassword ? '' : 'Password must be at least 8 characters' });
      }
      // Add more validations for other fields if needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check for any remaining errors before submitting
        // If errors exist, prevent form submission or handle accordingly
        const isFormValid = Object.values(errors).every((error) => error === '');
        if (isFormValid) {
          // Submit the form or trigger further actions
          console.log('Form is valid. Ready to submit:', formData);
        } else {
          console.log('Form contains errors. Please fix them.');
        }
      };








    return (
        <div className='container'>
            <div className='left'>
                <div className='form1'>
                <h1 className='head'>Welcome to LMS</h1>
                    <p className='subhead'>Your step to flexibility begins here</p>
                   <form onSubmit={handleSubmit}>
                        <div className='inp'>
                            <p className='lb-mail'>Email address</p>
                            <input type="email" name="email" className='in-mail' value={formData.email}
        onChange={handleInputChange}  />

                              <div className='email-error'>{errors.email && <span>{errors.email}</span>}</div>
                        </div>
                        <div className='inp2'>
                            <div><p className='lb-pass'>Password</p></div>
                            <div>
                                <input type="password" name='password' className='in-pass' value={formData.password}
        onChange={handleInputChange}/>
                                </div>
                               <div className='password-error'> {errors.password && <span>{errors.password}</span>}</div>  
                        </div>
                   
                    <p className='frgt'>Forgot your password?<a href="" className='click'>click here</a></p>
                    <Link to={`/Dashboard/`}><button id='login-bt' type="submit" >continue</button></Link>
                    </form>
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