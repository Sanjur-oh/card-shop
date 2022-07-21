import React from 'react';
// import {useSelector, useDispatch} from 'react-redux'
// import {fetchShoes} from '../redux/features/shoeSlice'
import ShoeCard from './ShoeCard'
import {GiSonicShoes} from "react-icons/gi"
import './ShoesPage.css'

function ShoesPage() {
  // const shoes = useSelector((state) => state);
  // console.log(shoes)
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchShoes());
  // }, []);

  return (
    <>
    <div id="container">
        <h1>Browse Shoes</h1>
        <h2>Add New Shoe </h2>
              {/* <button className="add_shoe"><Link to="/new_shoe"/></button> */}
              {/* <button className="icon_button"><GiSonicShoes className="card_icon"/><Link to="/new_shoe"/></button> */}
              <a href={"/new_shoe"}><button className="add_new_button"> <GiSonicShoes className="card_icon"/></button></a>
      </div>
      <div id="container">
            <ul className='cards'>
                {(<ShoeCard />)}              
            </ul>     
        </div>
    </>
  );
}

export default ShoesPage

