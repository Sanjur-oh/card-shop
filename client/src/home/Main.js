import React, { useEffect, useState} from 'react';
// import video from "../assets/video.mp4"
// import {useDispatch, useSelector} from 'react-redux'
import Slider from './carousel/Slider.js'
import "./MainStyle.css"
// import ShoeCard from '../pages/ShoeCard'
import {fetchShoes} from '../redux/features/shoesSlice'

// , allShoes, updateRatings
function Main({ user }) {
    // const shoe = useSelector((state) => state.shoe);
    // const shoes = useSelector((state) => state.allShoes.shoes);
    // const [allShoes, setAllShoes] = useState([]);
    
    
    // const dispatch = useDispatch();
    // useEffect(() => {
    // dispatch(fetchShoes());
    // }, []);

    // function updateRatings(shoeId){

    //     const updatedShoes = allShoes.map(shoe => {
    //       if(shoe.id === shoeId){
    //         return {...shoe, ratings: shoe.ratings + 1}
    //       }else{
    //         return shoe
    //       }
    //     })
    //     setAllShoes(updatedShoes)
    //   }
    
    //   function addShoeToState(shoe){
    //     setAllShoes([...allShoes, shoe])
    //   }
    

    // const topFive = allShoes.slice(0, 4);
    // // console.log(topFive)


  return (
    <div className="main">
      <Slider />
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome</h1>
        {/* <h1>Welcome, {user.name}</h1> */}
      </div>
      <div>
        <h1 className="">List</h1>
        <ul className="cards">
        {/* <ShoeCard /> */}
          {/* {topFive.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} updateRatings={updateRatings} />
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default Main;




                // work on video
                // {/* <video autoPlay loop muted> */}
                // {/* <source src={video} type="video/mp4" /> */}
                //   {/* </video>            */}