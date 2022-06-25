import React from 'react'
import SearchTasks from '../../components/searchTask/SearchTasks'
import Settings from '../../components/settings/Settings'
import './homepage.scss'
const HomePage = () => {
  return (
    <div className='homepage'>
        <SearchTasks />
        <Settings/>
    </div>
  )
}

export default HomePage