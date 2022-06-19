import React,{useState} from 'react';
import '../Login/Login.css';
import {FaChevronLeft,FaGoogle,FaApple} from 'react-icons/fa';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from  'react-router-dom';


const Register = () => {
 const [userName,setUserName] =useState('');
 const [password,setPassword] = useState('');
 const [confirmPassword,setConfirmPassword] = useState('');
 const [formValid,setFormValid] = useState(false) ;


const submitHandler=(e)=>{
  e.preventDefault();

//checks if passwords match
if(password !== confirmPassword){
  setFormValid(false);
   toast.error("passwords do not match");
  }
  else if(password.length < 5){
    toast.error("Weak password")
  }
  else{
    setFormValid(true)
  }

  if(userName && password && formValid){
    toast.success("WELCOME ", + ` ${userName}`)
       setTimeout(()=>{
        window.location='/index';
    
        },2000);
    }
  else{
   toast.error("please input all fields")
 };
}

   return (
   <section className='register-page'>
    <ToastContainer/>
      <form onSubmit={ submitHandler }> 
      <FaChevronLeft />
       <h1>Register</h1>
        <label>Username</label>
        <input type="text" name='username' value={userName} placeholder='enter username' onChange={(e)=> setUserName(e.target.value)}/>

        <label>Password</label>
        <input type="password" name='password' value={password} placeholder='......'  onChange={(e)=> setPassword(e.target.value)}/>
       
        <label>Confirm Password</label>
        <input type="password" name='password'value={confirmPassword}  placeholder='......'  onChange={(e)=> setConfirmPassword(e.target.value)} />
       
        <button className='form-btn' >Register</button>

        <div className='or'>
          <div className='line'></div><h3>or</h3><div className='line'></div>
         
        </div>
        <div className='socials'>
          <button><FaGoogle/> Register with google</button>
          <button><FaApple/> Register with Apple</button>
        </div>
        <h3>Already have an account ? <Link to="/Login">Login</Link></h3>
        <div className='thick-line'></div>
        
       </form>

    
        </section>

        )
    }



export default Register