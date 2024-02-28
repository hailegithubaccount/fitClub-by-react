import React from 'react'
import './Scollor.css'
import timage1 from '../../assets/t-image1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Scollor() {
  return (
    <div>
        <div className='Sboth'>
            <div className='SText'>
                <p>TESTIMONIALS</p>
                <h2 className='stroke-tetx'>WHAT THEY</h2>
                <h2 className='SH2'>SAY ABOUT US</h2>
                <p>hello this is the sport club from the washigton 
                    welcome to our sport club you get fromthe sport many benefit s such as
                </p>
                <h7><span>JOHN KEVIN-</span><span>COACH</span></h7>
                
            </div>
         
         <div class="container">
    <div class="rectangle1"></div>
    <div class="rectangle2"></div>
    <img src={timage1}  className="image11" alt=""/>
    <FontAwesomeIcon icon={faArrowLeft} className='icon1s'/>
    <FontAwesomeIcon icon={faArrowRight} className='icon1s'/>
  

  </div>
   
         </div>
    
        </div>
      
   
  )
}
