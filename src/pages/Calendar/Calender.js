import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import CalendarButton from './CalendarButton';
import './calender.css'



const Calender = () => {
  
// set states of calendar date
const [calDate, setCalDate] = useState(new Date())

function onChange (calDate) {
  setCalDate(calDate)

  const filteredResults = calDate.filter(result => {
      const newResultFormat = new Date(result.created_at).toLocaleString().split(",")[0]
      const newCalDateFormat = calDate.toLocaleString().split(",")[0]
      return newResultFormat === newCalDateFormat
  })

  console.log(filteredResults);
}

  return (
    <div className="result-calendar">
      <Calendar onChange={onChange} value={calDate} />
      <CalendarButton />

    </div>
  )
}

export default Calender