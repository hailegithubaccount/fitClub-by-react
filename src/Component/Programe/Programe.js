import React from 'react';
import './Program.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const Programe = () => {
  return (
    <div>
    <div className='program' id="program">
        <div className='program-header'>
        <span className='stroke-tetx'>Explore our</span>
        <span>Program</span>
        <span className='stroke-tetx'>to shape you</span>

        </div>
        <div className='gridby4'>
         <div className='theone'>
          
         <FontAwesomeIcon icon={faDumbbell} className='bAR' />
          <h5>strenght training</h5>
          <p>in this program,you are trained<br/>
            to imporve your strength through<br/>
            many exercises
          </p>
          <h5>join Now <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow' />  </h5>
         </div>

         <div className='theone'>
         <FontAwesomeIcon icon={faWalking } className='bAR' />
          <h5>Cardio training</h5>
          <p>in this program,you are trained<br/>
            to do sequential moves range<br/>
            of 20 until 30 minutes
          </p>
          <h5>join Now <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow' />  </h5>
         </div>


         <div className='theone'>
         <FontAwesomeIcon icon={faFire} className='icon-fire'  style={{ color: 'white', }} />
          <h5>fat burining</h5>
          <p>in this program,you are trained<br/>
            to imporve your strength through<br/>
            many exercises
          </p>
          <h5>join Now <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow' /> </h5>
         </div>
         <div className='theone'>
         <FontAwesomeIcon icon={faDumbbell} className='bAR' />
          <h5>Health fitness</h5>
          <p>in this program,you are trained<br/>
            to imporve your strength through<br/>
            many exercises
          </p>
          <h5>join Now <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow' /> </h5>
         </div>
        </div>
    </div>
    </div>
  )
}

export default Programe
