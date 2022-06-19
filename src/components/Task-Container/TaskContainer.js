import React from 'react'
import './TaskContainer.scss'
import picture from '../../assets/images/picture.png'

const TaskContainer = () => {
  return (
    <div className='Container'>

      <div className='section'>
          <img src={picture} alt='logo' className='logo' />
      </div>

    </div>
  )
}

export default TaskContainer