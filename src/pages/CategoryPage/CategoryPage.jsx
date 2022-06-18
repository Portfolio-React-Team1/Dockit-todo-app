import React from 'react'
import Categories from '../../components/categories/Categories'
import CreateCategory from '../../components/categories/CreateCategory'
import Settings from '../../components/settings/Settings'
import styles from "./Category.module.css"





const CategoryPage = () => {
const [addCategory,setAddCategory] = React.useState(false) 
const getState = (state) => {
  setAddCategory(!state)
  }
  
  return (
    <div className={styles.categoriesContainer}>
      <Categories getState={getState}/>
      <CreateCategory addCategorie={addCategory} closeAddCategory={()=>setAddCategory(false)}/>
      <div style={{marginTop:'30px'}}>
          <Settings />
      </div>
      
    </div>
  )
}

export default CategoryPage