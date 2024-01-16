import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';
const VerifyEmail = () => {
    const [otp, setOtp] = useState("");
    const {loading, signupData} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    useEffect(()=>{
     if(!signupData){
        navigate("/signup");
     }
    }, [])
    const handleOnSubmit = (e) =>{
        e.preventDefault(); 
        const {
             accountType,
             firstName,
             lastName,
             email,
             password,           
             confirmPassword,
        } = signupData;
       dispatch(signUp(accountType, firstName, lastName, email, password, confirmPassword, otp, navigate));
    }
  return (
    <div className='text-white flex justify-center items-center mt-[150px]'>
        {
            loading
            ? (
                <div> Loading...</div>
            )
            : (
              <div>
                 <h1>Verify Email</h1>
                 <p>An Verify Code has been sent to you</p>
                <form onSubmit={handleOnSubmit}>
                   <OTPInput
                     value={otp}
                     onChange={setOtp}
                     numInputs={6}
                     renderSeparator={<span>-</span>}
                     renderInput={(props) => (<input {...props}
                      className='bg-color-600 text-black'
                     />) }
                   />  
                 <button type='submit'>Verify and Register</button>  
                </form>
               <div> 
                <div>
                    <Link to="/login">
                        <p>Back to Login</p>
                    </Link>
                </div>
                <button onClick={()=>{dispatch(sendOtp(signupData.email, navigate))}}>Resend it</button>
            </div>
       </div>
            )
        }
    </div>
  )
}

export default VerifyEmail