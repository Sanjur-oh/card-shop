import React from 'react';
import shoe from "../assets/shoe.mp4"

const Main = () => {
    return(
        <div className='main'>
            <div className='overlay'>
                <h1>Welcome</h1>
                <h2>display carousel</h2>
                <h3>display upcoming shoes</h3>
            </div>
            <video src={shoe} autoPlay loop muted/>
        </div>
    )
}

export default Main