import React from 'react';
// import video from "../assets/video.mp4"
import "./MainStyle.css"

function Main() {
    return(
        <div className='main'>
            <div className='overlay'></div> 
                {/* <video autoPlay loop muted> */}
                {/* <source src={video} type="video/mp4" /> */}
                    <div className='content'>
                        <h1>Welcome</h1>
                        <h2>display carousel</h2>
                        <h3>display upcoming shoes</h3>  
                    </div>     
                {/* </video>            */}
        </div>
    )
}

export default Main