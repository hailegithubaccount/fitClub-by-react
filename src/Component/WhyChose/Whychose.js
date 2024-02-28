import React from 'react';
import './WhyChose.css';
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nike from "../../assets/nike.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



 function Whychose()  {
  return (
    <div className='main'>
        <div className='image-left'>
            <div className='image1-intheleft'>
            <img src={image1} className='image44' alt=""/>

            </div>
            <div className='image2-intheright'>
                <img src={image2} className='image22' alt=""/>
                <div className='image34-grid'>
                    <div className='image3'>
                        <img src={image3}  className="image33" alt=""/>
                    </div>
                    <div className='image4'>
                        <img src={image4}className='image55' alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-right'>
            <div className='first-text'>SOME REASON</div>
            <div className='second-text'>
                <span className='stroke-tetx'>WHY </span>
                <span>CHOOSE US?</span>
                <div>
            <p><FontAwesomeIcon icon={faCheck} className='right-icon'/> OVER 140+ EXPERT COACH</p></div>
           <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> TRAIN SMARTER AND FASTER THAN BEFORE</p>
            <p><FontAwesomeIcon icon={faCheck} className='right-icon'/> 1 FREE PROGRAMM FOR NEW MEMEBER</p>
           <p><FontAwesomeIcon icon={faCheck} className='right-icon' /> RELIBAEL PARTNERS</p>
            </div>
            <div className='text-h7'>our partner</div>
            <div className='image-partner'>
               
                <div className='nb'>
                    <img src={nb} alt=""/>
                    <img src={adidas} alt=""/>
                    <img src={nike} alt=""/>
                </div>   
            </div>    
        </div> 
    </div>
  )


  
  }
  export default Whychose;
