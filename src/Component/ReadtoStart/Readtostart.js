import React from 'react';
import './Readttostart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowAltCircleRight, faCheck } from '@fortawesome/free-solid-svg-icons';

function Readtostart() {
  return (
    <div className='e'>
      
      <div className="theThree">
        <span className='stroke-tetx forFont  '> READY TO START</span>
        <span className="forFont " style={{ fontSize: '2rem', color: "white" }}>YOUR JOURNEY </span>
        <span className='stroke-tetx forFont '>NOW WITH US</span>
      </div>
      <div className='mainTable'>
        <div className='the-table kk'>
          <FontAwesomeIcon icon={faHeart} className='icons' /><br /><br />
          <h7>BASIC PLAN</h7>
          <h2>$ 25</h2>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> 2 hours of the exercise</p>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> free consultation of coaches</p>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> access to community</p>
          <p>see more benefits <FontAwesomeIcon icon={faArrowAltCircleRight} className='icons' /></p>
          <button className='btn'>join</button>
        </div>
        <div className='the-table middle-table' style={{ marginTop: '20px' }}>
          <FontAwesomeIcon icon={faHeart} /><br /><br />
          <h7>BASIC PLAN</h7>
          <h2>$ 25</h2>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> 2 hours of the exercise</p>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> free consultation of coaches</p>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> access to community</p>
          <p>see more benefits <FontAwesomeIcon icon={faArrowAltCircleRight} className='icons' /></p>
          <button className='btn'>join</button>
        </div>
        <div className='the-table kk'>
          <FontAwesomeIcon icon={faHeart} className='icons' /><br /><br />
          <h7>BASIC PLAN</h7>
          <h2>$ 25</h2>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> 2 hours of the exercise</p>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> free consultation of coaches</p>
          <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> access to community</p>
          <p>see more benefits <FontAwesomeIcon icon={faArrowAltCircleRight} className='icons' /></p>
          <button className='btn '>join</button>
        </div>
      </div>
    </div>


    
  )
}

export default Readtostart;


