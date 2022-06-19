import React from 'react'
import styles from './categorie.module.css'
const Categorie = ({image,text, color, margin,callback,index}) => {
  return (
    <div className={styles.CategorieText} onClick={()=>index===10&&callback()}>
        <div style={{backgroundColor:`${color}`}} className={styles.categorie}>

            <div>
                <img src={image} alt={text} style={{width:"100%"}}/>
            </div>
        </div>
              <p style={{marginLeft: `${margin}`}}>{text}</p>
    </div>
  )
}

export default Categorie