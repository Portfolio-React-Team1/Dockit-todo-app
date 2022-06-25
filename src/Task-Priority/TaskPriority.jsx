import React from 'react'
import './taskpriority.css'
import { Container } from 'react-bootstrap'
import Logo from './logo.png'
import TaskPriorityButton from './TaskPriorityButton'



function TaskPriority() {

  return (
    <div className='page'>
      <Container>
        <div className='edit' ><br></br>
          <header className='text'>Task Priority</header>
          <hr></hr>

          <div className='grid-container'>

            <div className="grid-item-vic">
              <img className='image' src={Logo} alt='Task-priority logo'></img>
              1
            </div>
            <div class="grid-item">
              <img className='image' src={Logo} alt='Task-priority logo'></img>
              2
            </div>
            <div class="grid-item">
              <img className='image' src={Logo} alt='Task-priority logo'></img>
              3
            </div>
            <div class="grid-item">
              <img className='image' src={Logo} alt='Task-priority logo'></img>
              4
            </div>
            <div class="grid-item">
              <img className='image2' src={Logo} alt='Task-priority logo'></img>
              5
            </div>
            <div class="grid-item">
              <img className='image2' src={Logo} alt='Task-priority logo'></img>
              6
            </div>
            <div class="grid-item">
              <img className='image2' src={Logo} alt='Task-priority logo'></img>
              7
            </div>
            <div class="grid-item">
              <img className='image2' src={Logo} alt='Task-priority logo'></img>
              8
            </div>
            <div class="grid-item">
              <img className='image3' src={Logo} alt='Task-priority logo'></img>
              9
            </div>
            <div class="grid-item">
              <img className='image3' src={Logo} alt='Task-priority logo'></img>
              10
            </div>

          </div>
          <TaskPriorityButton />
        </div>
      </Container>
    </div >
  )

}
export default TaskPriority