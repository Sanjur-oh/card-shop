import React from 'react';
// import video from "../assets/video.mp4"
import Slider from './carousel/Slider.js'
import "./MainStyle.css"

function Main() {
    return(
        <div className='main'>
            <Slider />
            <div className='overlay'></div> 
                    <div className='content'>
                        <h1>Welcome</h1>
                        <h3>display upcoming shoes</h3>  
                    </div>     
              
        </div>
    )
}

export default Main




                // work on video
                // {/* <video autoPlay loop muted> */}
                // {/* <source src={video} type="video/mp4" /> */}
                //   {/* </video>            */}