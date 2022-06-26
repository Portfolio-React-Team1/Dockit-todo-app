import React, { useState } from 'react'
// import TaskContainer from '../../components/Task-Container/TaskContainer'
import './AddTask.scss'
import picture from '../../assets/images/picture.png'
import { BsClock, BsTag } from "react-icons/bs";
import { SiAirbnb } from "react-icons/si";
import { FiFlag } from 'react-icons/fi';
import axios from 'axios';


const AddTask = () => {

  // const createTask = axios.create({
  //   baseURL: "https://todo22a.herokuapp.com/api/v1/task" 
  // });

  const [task, settask] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
      
    settask(e.target.value);
    console.log(task);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://todo22a.herokuapp.com/api/v1/task', {
        user_id: Math.random().toString(36).slice(2),
        todo: task,
    }).then(response => {
      console.log(response)
    })
    // console.log(task);
  }

  return (
    <div className='Container'>

      <div className='section'>
          <img src={picture} alt='logo' className='logo' />
      </div>

      <div className='form-container'>

        <p className='Task'>
          Add Task
        </p>
        
        <form method='get' className='Form'>
          
            <input type='text' placeholder='Task' className='input input1' name='task' onChange={ handleChange }></input>

           
            <input type='number' placeholder='Enter a random value' className='input'></input>
        </form>

          <div className='icon-container'>
            <div className='icon-section1'>
              <div className='icon-section2 triple'>
              <a href='/choosetime'>
                  <BsClock className='icon'/>
              </a>
              </div>

              <div className='icon-section2 triple'>
                 <a href='/cal'>
                  <BsTag className='icon'/>
                 </a>
            </div>
            
            <div className='icon-section2 triple'>
                <a href='/task'>
                  <FiFlag className='icon'/>
                </a>
            </div>
            </div>

            <div className='icon-section2'>
            <SiAirbnb className='icon transform' onClick={ handleSubmit  } />
            </div>
          </div>
      </div>

    </div>


  )
}

export default AddTask