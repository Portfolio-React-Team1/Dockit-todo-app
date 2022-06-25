import React from 'react'
import ellipse from '../../assets/images/Ellipse.svg'
import uni from '../../assets/images/university.svg'
import workIcon from '../../assets/images/workIcon.svg'
import homeIcon from '../../assets/images/homeIcon.svg'
import flag from '../../assets/images/flag.svg'
import searchIcon from '../../assets/images/search-normal.svg'
import SearchItem from './SearchItem'
import './searchTask.scss'


const SearchTasks = () => {

    const items = [
        {
            id: 1,
            flag: flag,
            image1: uni,
            image: ellipse,
            title: "Do Math Homework",
            title2: 'University',
            time: 'Today At 16:45',
            color: 'rgba(244, 131, 25, 0.75)'
        },
        {
            id: 2,
            flag: flag,
            image1: homeIcon,
            image: ellipse,
            title: "Tack out dogs",
            title2: 'Home',
            time: 'Today At 18:20',
            color: 'rgba(244, 131, 25, 0.5)'
        },
        {
            id: 3,
            flag: flag,
            image1: workIcon,
            image: ellipse,
            title: "Business meeting with CEO",
            title2: 'Work',
            time: 'Today At 08:15',
            color: 'rgba(244, 131, 25, 0.25)'
        }
    ]

  return (
    <div className='searchTask__container'>
        <div className='input__container'>
            <img className='search__image' src={searchIcon} alt="searchIcon" />
            <input className='input__' type="text" placeholder='Search for your task...'/>
        </div>
        <select className='today__task'>
            <option value="Today">Today</option>
        </select>
        {items.map((item, id) => (
            <SearchItem {...item} key={id}/>
        ))}

        <select className='today__task'>
            <option value="Completed">Completed</option>
        </select>

        <SearchItem image={ellipse} title="Buy Grocery" time="Today At 16:45" /> 
        
    </div>
  )
}

export default SearchTasks