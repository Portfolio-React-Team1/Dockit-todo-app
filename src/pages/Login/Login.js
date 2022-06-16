import React,{useState,useEffect} from 'react';
import './Login.css';
import {FaChevronLeft,FaGoogle,FaApple} from 'react-icons/fa';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Link from 'react-router-dom'

const Login = () => {
const [formValid,setFormValid] =useState(false)
const [form,setForm] =useState({
  username: "",
  password: ""
});

const submitHandler=(e)=>{
  e.preventDefault();
  if(form.username !== "" && form.password !==""){
    setFormValid(true);

   }
   else{
    setFormValid(false);
     toast.error("please input all fields");
   }


   // direct to the homepage if form is valid
   if(formValid){
    toast.success("welcome back");
    setTimeout(()=>{
      windows.location ="/"
    },2000)
   }
  
}

  return (
   <section className='login-page'>
    <ToastContainer/>
      <form onSubmit={submitHandler}> 
      <FaChevronLeft />
       <h1>Login</h1>
        <label>Username</label>
        <input type="text" name='username' placeholder='enter username'/>

        <label>Password</label>
        <input type="password" name='username' placeholder='......'/>
        <button className='form-btn'>Login</button>

        <div className='or'>
          <div className='line'></div><h3>or</h3><div className='line'></div>
         
        </div>
        <div className='socials'>
          <button><FaGoogle/> Login with google</button>
          <button><FaApple/> Login with Apple</button>
        </div>
        <h3>Dont have an account ? <a href="#">Login</a></h3>
        <div className='thick-line'></div>
        
      </form>

    
    </section>

      )
}


export default Login