import React from 'react'
import './TheLastFirst.css'
import insta from '../../assets/instagram.png';
import git from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import  logo from '../../assets/logo.png';

function TheLastFirst() {
  return (
    <div>
        <div className='theWhole'>
            <div className='text'>
                <div className='smallBorder'>
                </div>
                    <div className='textofspan'><span className='stroke-tetx'>READY TO</span><span> LEVEL UP</span> <br/>
                    <span>YOUR BODY</span><span className='stroke-tetx'> WITH US ?</span>
                    </div>



            </div>
            <div className='thebtn'>
            
                <div className='outerbtn'>
                    <div className='tex'><p> enter email address</p></div>
                   <div className='bb'><button className='btn'>join now</button></div>
                </div>

            </div>
        </div>
   <br/>
      <hr/>
      <div className='nameofmedia'>
        <img src={insta} className='forsizeimage' alt=""/>
        <img src={git} className='forsizeimage' alt="" />
        <img src={linkedin} className='forsizeimage'  alt=""/>
      </div>
      <div className='loog'>
        <img src={logo} alt=""/>
      </div>
    </div>
  )
}
export default TheLastFirst;
