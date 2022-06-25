import React from 'react'
import Checklist from '../../assets/images/Checklist.png'
import { Row, Col } from 'react-bootstrap';
// import Sidebar from '../Sidebar/Sidebar';

const IndexPage = () => {
  return (
    <div className='d-flex' >
      <div>
        {/* <Sidebar /> */}
      </div>
      <div style={{width: 'calc(100vw - 200px'}} className='d-flex justify-content-center align-items-center text-center border' >
        <Row>
          <Col>
            <img src={Checklist} alt='checklist icon'></img>
            <h4>What do you want to do today?</h4>
            <a href='/addtask' className='text-decoration-none' ><p>Tap + to add your tasks</p></a>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default IndexPage