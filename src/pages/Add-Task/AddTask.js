import React from 'react'
// import TaskContainer from '../../components/Task-Container/TaskContainer'
import './AddTask.scss'
import picture from '../../assets/images/picture.png'
import { BsClock, BsTag } from "react-icons/bs";
import { SiAirbnb } from "react-icons/si";
import { FiFlag } from 'react-icons/fi'


const AddTask = () => {
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
          
            <input type='text' placeholder='Task' className='input input1'></input>

           
            <input type='text' placeholder='Description' className='input'></input>
          </form>

          <div className='icon-container'>
            <div className='icon-section1'>
              <div className='icon-section2 triple'>
                  <BsClock className='icon'/>
              </div>

              <div className='icon-section2 triple'>
                 <a href='/cal'>
                  <BsTag className='icon'/>
                 </a>
            </div>
            
            <div className='icon-section2 triple'>
                <FiFlag className='icon' />
            </div>
            </div>

            <div className='icon-section2'>
            <SiAirbnb className='icon transform'/>
            </div>
          </div>
      </div>

    </div>

    
  )
}

export default AddTask