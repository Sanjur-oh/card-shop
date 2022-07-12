import React, { useEffect } from 'react'
// import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {fetchShoes} from '../redux/features/shoeSlice'
// import axios from "axios"


const ShoeDetails = () => {
  const shoe = useSelector((state) => state.shoe);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoes());
  }, []);


  return (
    <>
    {shoe.shoes.map((shoe) => (
      <div className="four column wide">
          <div className="ul link cards">
            <div className="card">
              <div><img src={shoe.image_url} alt={shoe.name} className="image" /></div>
              <div className="content">
                <div className="header">{shoe.shoeName}</div>
                <div className="price">Retail ${shoe.retailPrice}</div>
                <div className="detail">{shoe.colorway}</div>
                  
                  {/* give these links to
                  <div className="social-icons">
                    <GiGoat className="icon">{shoe.goat}</GiGoat>
                    <GiConverseShoe className="icon">{shoe.stockX}</GiConverseShoe>
                    <FaEbay className="icon">{shoe.ebay}</FaEbay>
                  </div> */}

              </div>
            </div>
          </div>  
      </div>
    ))}
  </>
);
}

export default ShoeDetails
