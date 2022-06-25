import React,{useState} from 'react';
import '../Login/Login.scss';
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


const url= "https://todo22a.herokuapp.com/api/v1/user/register";

const submitHandler=(e)=>{
     e.preventDefault();
  
     if( form.username !== "" &&
         form.password !== "" && 
         form.confirmPassword !== ""
     ){ 
          setFormValid(true);
          sessionStorage.setItem("userDetails", JSON.stringify({...form}));
         toast.success(`Welcome to DockIt  ${form.username}`);
          setTimeout(()=>{
                window.location="/index";
               },3000 );
               fetch(url, {
                method:'POST',
                headers:{'Content-Type': 'application/json; charset-UTF-8'},
                body: JSON.stringify({
                  username: form.username,
                  password: form.password,
                  userId: Math.random().toString(36).slice(2),
                })
               }).then((res)=> res.json())
               .then((data)=> {
                setForm((form)=> [data, ...form])
               }).catch((err)=> console.log(err.message))


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
            <FaChevronLeft />
            <h1>Register</h1>
             <label>Username</label>
             <input type="text" name='username'placeholder='enter username' onChange={handleChange} />
     
             <label>Password</label>
             <input type="password" name='password' placeholder='......'  onChange={handleChange}  />
            
             <label>Confirm Password</label>
             <input type="password" name='confirmPassword' placeholder='......'  onChange={handleChange} />
            {!formValid  && <button className='form-btn' >Register</button> }
            {formValid  && <button disabled className='form-btn' >Registering...</button> }
             
     
             <div className='or'>
                <div className='line'></div><h3>or</h3><div className='line'></div>
              
              </div>
             <div className='socials'>
               <button><FaGoogle/> Register with google</button>
               <button><FaApple/> Register with Apple</button>
             </div>
             <h4>Already have an account ? <Link to="/Login">Login</Link></h4>
             <div className='thick-line'></div>

       </form>

    
        </section>

        )
    }

export default Register