import React from 'react'


import './calendarbutton.css'

const CalendarButton = () => {
  return (
    <div className='calendar-button-container'>
        <div className='cancel-button'>
        <button>
          <a href='#' rel="noreferrer"> cancel</a>
        </button>
        </div>
        <div className='calender-button'>
          <button>
            <a href='/#'  rel="noreferrer">choose time</a>
          </button>
        </div>
    </div>
  )
}

export default CalendarButton