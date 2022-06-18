import React from 'react'
import SearchTasks from '../../components/searchTask/SearchTasks'
import Settings from '../../components/settings/Settings'
import './homepage.css'
const HomePage = () => {
  return (
    <div className='homepage'>
        <SearchTasks />
        <Settings/>
    </div>
  )
}

export default HomePage