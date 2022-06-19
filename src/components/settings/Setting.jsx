import React from 'react'
import arrowRight from '../../assets/images/arrow-left.svg'

const Setting = ({text,image}) => {
  return (
    <li className="setting">
    <div style={{display:"flex", alignItems:"center"}}>
    <img src={image} width={24} height={24} alt="" style={{marginRight:"22px"}}/> 
    <span className='settings__text'>{text} </span> 
    </div>
    <span><img src={arrowRight} alt="arrowRight" /></span>
    </li>
  )
}

export default Setting