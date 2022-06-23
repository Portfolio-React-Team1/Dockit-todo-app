import React,{useState} from 'react';
import '../Login/Login.css';
import {FaChevronLeft,FaGoogle,FaApple} from 'react-icons/fa';
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from  'react-router-dom';


const Register = () => {
 const [formValid,setFormValid] = useState(false) ;
 const [form,setForm]= useState({
  username:"",
  password:"",
  confirmPassword: ""
   });

const handleChange=(e)=>{
  setForm({
    ...form ,[e.target.name]: e.target.value })

};

const submitHandler=(e)=>{
     e.preventDefault();
     if( form.username !== "" &&
         form.password !== "" && 
         form.confirmPassword !== ""
     ){ 
          setFormValid(true);
          sessionStorage.setItem("userDetails", JSON.stringify({...form}))
          toast.success(`Welcome to DockIt  ${form.username}`);
          setTimeout(()=>{
                window.location="/index";
               },2000 );

        }else if(form.password !== form.confirmPassword){
           setFormValid(false);
           toast.error("passwords do not match")

         }
       
       else{
        setFormValid(false);
         toast.error("please input all fields");
        
       }


  }


   return (
   <section className='register-page'>
    <ToastContainer/>
      <form onSubmit={submitHandler}> 
            <Link to="/"><FaChevronLeft /></Link>  
            <h1>Register</h1>
             <label>Username</label>
             <input type="text" name='username'placeholder='enter username' onChange={handleChange} />
     
             <label>Password</label>
             <input type="password" name='password' placeholder='......'  onChange={handleChange}  />
            
             <label>Confirm Password</label>
             <input type="password" name='confirmPassword' placeholder='......'  onChange={handleChange} />
            
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