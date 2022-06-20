import React from 'react'
import styles from './categorie.module.scss'
import Categorie from './Categorie'
// import CreateCategory from './CreateCategory'
import categorie1 from '../../assets/images/category1.svg'
import categorie2 from '../../assets/images/category2.svg'
import categorie3 from '../../assets/images/category3.svg'
import categorie4 from '../../assets/images/category4.svg'
import categorie5 from '../../assets/images/category5.svg'
import categorie6 from '../../assets/images/category6.svg'
import categorie7 from '../../assets/images/category7.svg'
import categorie8 from '../../assets/images/category8.svg'
import categorie9 from '../../assets/images/category9.svg'
import categorie10 from '../../assets/images/category10.svg'
import categorie11 from '../../assets/images/category11.svg'


const categories=[{text:"Grocery",image:categorie1, color:'#CCFF80', margin:'0'},
{text:"Work",image:categorie2, color:'#FF9680', margin:'0'},
{text:"Sport",image:categorie3, color:'#80FFFF', margin:'0'},
{text:"Music",image:categorie4, color:'#FC80FF', margin:'0'},
{text:"Design",image:categorie5, color:'#80FFD9', margin:'0'},
{text:"University",image:categorie6, color:'#809CFF', margin:'0'},
{text:"Social",image:categorie7, color:'#FF80EB', margin:'0'},
{text:"Health",image:categorie8, color:'#80FFA3', margin:'0'},
{text:"Home",image:categorie9, color:'#FFCC80', margin:'0'},
{text:"Movie",image:categorie10, color:'#80D1FF', margin:'0'},
{text:"Create New",image:categorie11, color:'#80FFD1', margin:'-5px'},
]



const Categories = ({getState}) => {
const [addCategorie,setAddCategorie]=React.useState(false)
  return (
    <div className={styles.container}>
        <header className={styles.header}>choose categorie</header>
        <div className={styles.border}></div>

      <div className={styles.categories}>
        {categories.map((categorie,index)=>(
          <Categorie key={index} index={index} callback={()=>{setAddCategorie(!addCategorie);getState(addCategorie) }} {...categorie}/>
        ))}
      </div>

    <div className={styles.buttonContainer}>
        <button className={styles.button}>Add Category</button>
    </div>

    </div>
  )
}

export default Categories