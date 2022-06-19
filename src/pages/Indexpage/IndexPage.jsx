import React from 'react'
import Checklist from '../../assets/images/Checklist.png'
import { Row, Col } from 'react-bootstrap';

const IndexPage = () => {
  return (
    <div className='vw-100'>
        <Row className='min-vh-100 justify-content-center align-items-center'>
          <Col className='text-center' >
            <img src={Checklist} alt='checklist icon'></img>
            <h4>What do you want to do today?</h4>
            <a href='/addtask' className='text-decoration-none' ><p>Tap + to add your tasks</p></a>
          </Col>
        </Row>
    </div>
  )
}

export default IndexPage