import './searchTask.scss'

const SearchItem = ({image, title, time, image1, flag, title2, id, color}) => {
   
  return (
    <div>
        <div className='items__container'>
                <div className='task__title-container'>
                <div>
                    <img src={image} alt="ellipse" />
                </div>
                <div className='task__title'>
                    <h2>{title}</h2>
                    <p>{time}</p>
                </div>
            </div>


            {image1 && <div className='uni__content'>
                <div style={{backgroundColor:`${color}`}} className='uni__item'>
                    <img src={image1} alt="university" />
                    <p >{title2}</p>
                </div>
                <div className='uni__item2'>
                    <img src={flag} alt={'flag'} />
                    <p>{id}</p>
                </div>
            </div>
            }
        </div>
  

    </div>
  )
}

export default SearchItem