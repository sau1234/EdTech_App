import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/operations/authAPI';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
const UpdatePassword = () => {
   const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const {loading} = useSelector(state => state.auth)
    const [formData, setFormData] = useState({
        password:"",
        confirmPassword: "",
});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const {password, confirmPassword} = formData; 

  const handleOnChange = (e) =>{
    setFormData((prevData) =>({
        ...prevData,
        [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) =>{
     e.preventDefault();
     const token = location.pathname.split("/").at(-1);
     dispatch(resetPassword(password, confirmPassword, token, navigate))
  }
  return (
    <div>
        {
          loading ? (
            <div> Loading... </div>
          ) : (
            <div>
                <h1>Choose New Password</h1>
                <p>Almost Done</p>
                <form onSubmit={handleOnSubmit} >
                    <label>
                        <p>New Password</p>
                        <input
                          required
                          type = {showPassword ? "text" : "password"}
                          name="password"
                          value={password}
                          onChange = {handleOnChange}
                          placeholder='enter new Password'
                         />
                        <span onClick={setShowPassword((prev) => !prev)}>
                        {
                            showPassword 
                            ? (<AiFillEyeInvisible fontSize={24}/>)
                            : (<AiFillEye fontSize={24} /> )
                        }
                    </span>
                    </label>

                    <label>
                        <p>Confirm New Password</p>
                        <input
                          required
                          type = {showConfirmPassword ? "text" : "confirmPassword"}
                          name="ConfirmPassword"
                          value={confirmPassword}
                          onChange = {handleOnChange}
                          placeholder='Enter confirm password'
                        />
                      <span onClick={setShowConfirmPassword((prev) => !prev)}>
                        {
                            showConfirmPassword 
                            ? (<AiFillEyeInvisible fontSize={24}/>)
                            : (<AiFillEye fontSize={24} /> )
                        }
                      </span>
                 </label>
                    
                    <button type='submit'>
                       <p>Reset Password</p>
                    </button>
                </form>
                <div>
                    <Link to="/login">
                        <p>Back to Login</p>
                    </Link>
                </div>
            </div>
          )
        
        }
        </div>
  )
}

export default UpdatePassword