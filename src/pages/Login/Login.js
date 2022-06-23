import React,{useEffect, useState} from 'react';
import './Login.css';
import {FaChevronLeft,FaGoogle,FaApple} from 'react-icons/fa';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';


const Login = () => {
const [formValid,setFormValid] =useState(false)
const [form,setForm] = useState({
    username: "",
    password: "",
 });

 const handleChange=(e)=>{
  setForm({
      ...form,
     [e.target.name] : e.target.value })
 
 };
const url= "https://todo22a.herokuapp.com/api/v1/user/login";

const submitHandler=(e)=>{
  e.preventDefault();
  if(form.username !== "" &&
     form.password !== "" ){
         setFormValid(true);
         toast.success(`welcome back  ${form.username}`);
         setTimeout(()=>{
         window.location ="/index" ;
          },2000);
          fetch(url, {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(form)
           }).then(()=> console.log("user Logged in"));

        }
         else{
            setFormValid(false);
            toast.error("please input all fields")
           
           }

    }


  return (
   <section className='login-page'>
      <ToastContainer/>
      <form onSubmit={submitHandler}> 
         <FaChevronLeft />
           <h1>Login</h1>
            <label>Username</label>
            <input type="text" name='username' placeholder='enter username' onChange={handleChange}/>
    
            <label>Password</label>
            <input type="password" name='password' placeholder='.....' onChange={handleChange} />
            <button className='form-btn'>Login</button>
    
            <div className='or'>
              <div className='line'></div><h3>or</h3><div className='line'></div>
             
             </div>
             <div className='socials'>
              <button><FaGoogle/> Login with google</button>
              <button><FaApple/> Login with Apple</button>
             </div>
            <h4>Dont have an account ? <Link to="/Register">Register</Link></h4>
            <div className='thick-line'></div>
        
      </form>

    
    </section>

      )
}




export default Login