import React from 'react'
import './createCategory.scss'

const CategoryColors = ({colors}) => {

  return <span style={{backgroundColor:`${colors}`}} className='categoryColor'></span>
}

export default CategoryColors