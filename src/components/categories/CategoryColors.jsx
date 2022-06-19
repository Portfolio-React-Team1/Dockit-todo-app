import React from 'react'
import './createCategory.css'

const CategoryColors = ({colors}) => {

  return <span style={{backgroundColor:`${colors}`}} className='categoryColor'></span>
}

export default CategoryColors