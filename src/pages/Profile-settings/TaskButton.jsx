import React from 'react'


import './taskPrioritybutton.css'

const TaskPriorityButton = () => {
  return (
    <div className='calendar-button-container'>
      <div className='cancel-button'>
        <button>
          <a href='#' target='_blank' rel="noreferrer"> cancel</a>
        </button>
      </div>
      <div className='calender-button'>
        <button>
          <a href='/#' target='_blank' rel="noreferrer">Save</a>
        </button>
      </div>
    </div>
  )
}

export default TaskPriorityButton