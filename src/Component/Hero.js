import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import heart from "../assets/heart.png";
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png';


 function Hero() {
  return (
    <div className='hero'>
        <div className='left-h'>
          <Header/>
          {/* the small animation */}
          <div className='the-best-ad'>
            <div></div>
            <span>the best fitness club in the town</span>
          </div>

           {/*the big text*/}
          <div className='hero-text'>
          <div ><span className='stroke-tetx'>shape </span>  
            <span>
              your
              </span>
    
          </div>
          <div><span>Ideal body</span></div>
          <div><span>In here we will help you to shape and build your ideal live up your life to fullest</span></div>
          </div>

           {/* the figure part */}
           <div className='figure'>
           <div>
            <span>+140</span>
            <span>expert coaches</span>
            </div>
            <div>
              <span>+978</span>
              <span>members joined </span>
            </div>
            <div>
               <span>+50</span>
               <span>fitness programs</span>
            </div>
          
          
         </div>
         <div className='hero-button'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>

         </div>
        </div>

        <div className='right-h'>
    <button className='btn'>Join now</button>
    <div className='heart-rate'>
      <img src={heart} alt=""/>
      <span>Heart Rate</span><span>116 npm</span>
    </div>
   
    <img src={hero_image} alt="" className='hero-image'/>
    <img src={hero_image_back} alt=""className='hero-image-back'/>
    
   
    <div className='calories'>
      <img src={calories} alt=""/>
      <div>
      <span>calories Burned</span><span>220 Kcal</span>
      </div>
   

    </div>
    </div>
    </div>
  )
}
export default Hero;
