import React, { useState } from 'react';
import './Scollor.css';
import timage1 from '../../assets/t-image1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import tImage2 from '../../assets/t-image2.jpg';
import timage3 from '../../assets/t-image3.jpg';

export default function Scollor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 3; // Assume there are 3 images in the list

  // Array of paragraph texts corresponding to each image
  const paragraphs = [
    "John Kevin is a dedicated coach who brings out the best in every athlete. His motivational speeches and dedication to the sport inspire our team every day.",
    "Sarah Lee's coaching style is characterized by her patience and encouragement. She values teamwork and fosters a supportive environment for all athletes.",
    "Michael Johnson's coaching philosophy emphasizes discipline and hard work. He believes in setting high standards and pushing athletes to reach their full potential."
  ];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex = (currentIndex - 1 + totalImages) % totalImages;
    setCurrentIndex(previousIndex);
  };

  return (
    <div>
      <div className='Sboth'>
        <div className='SText'>
          <p>TESTIMONIALS</p>
          <h2 className='stroke-tetx'>WHAT THEY</h2>
          <h2 className='SH2'>SAY ABOUT US</h2>
          <p>{paragraphs[currentIndex]}</p> {/* Render paragraph dynamically */}
          <h7><span>JOHN KEVIN-</span><span>COACH</span></h7>
        </div>
        <div class="container">
          <div class="rectangle1"></div>
          <div class="rectangle2"></div>
          <img 
            src={currentIndex === 0 ? timage1 : currentIndex === 1 ? tImage2 : timage3} 
            alt='' 
            className={
              currentIndex === 0 ? 'small-image' : 
              currentIndex === 1 ? 'medium-image' : 
              'large-image'
            }
          />
          <FontAwesomeIcon icon={faArrowLeft} className='icon1s' onClick={handlePrevious}/>
          <FontAwesomeIcon icon={faArrowRight} className='icon1s' onClick={handleNext}/>
        </div>
      </div>
    </div>
  );
}
