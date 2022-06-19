import React from 'react'
import CategoryColors from './CategoryColors'
import './createCategory.css'

const CreateCategory = ({addCategorie,closeAddCategory}) => {
    const Categorycolors = [
        {colors: '#C9CC41'},
        {colors: '#66CC41',
        },
        {
            colors: '#41CCA7',
        },
        {
            colors: '#4181CC',
        },
        {
            colors: '#41A2CC',
        },
        {
            colors: '#CC8441',
        },
        {
            colors: '#9741CC',
        },
        {
            colors: '#CC4173',
        },
    ]
  return (
    <div style={{display:addCategorie?"block":"none"}}>
        <div className='createCategory__container'>
            <h1>Create new category</h1>

            <form className='createCategory__container-form' action="">
                <label>Category name:</label>
                <input type="text" placeholder='Category name'/>

                <label>Category icon:</label>
                <input className='input' type="text" placeholder='Choose icon from library'/>

                <label>Category colors:</label>
                <div className='color__container'>
                    {Categorycolors.map((color, i) => (
                        <CategoryColors {...color}  key={i}/>
                    ))}
                </div>
                <div className='button__container'>
                    <button>Create Category</button>
                </div>
            </form>
            <p className='menutop' onClick={closeAddCategory}>Close</p>
        </div>
    </div>
  )
}

export default CreateCategory