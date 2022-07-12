import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchShoes} from '../redux/features/shoesSlice'
import {Link} from 'react-router-dom'
import {FaEbay} from "react-icons/fa"
import {GiGoat, GiConverseShoe} from "react-icons/gi"



// function ShoeCard() {
  const ShoeCard = () => {
    // const shoes = useSelector((state) => state.allShoes.shoes);
    // const renderList = shoes.map((shoe) => {

    const shoe = useSelector((state) => state.shoe);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchShoes());
    }, []);

    


    return (
      <>
        {shoe.shoes.map((shoe, i) => (
          <div className="shoe_container" key={i}>
              <div className="ul link cards" >
                <div className="card" >
                  <div ><img src={shoe.image_url} alt={shoe.name} className="image" /></div>
                  <div className="content" >
                    <div className="header">{shoe.shoeName}</div>
                    <div className="price">Retail ${shoe.retailPrice}</div>
                    <div className="detail">{shoe.colorway}</div>
                    <div className="buttonDiv"><Link to><button >Like</button></Link></div>
                    {/* <button >Like</button> */}
                    {/* <div className="buttonDiv"><Link  to={`/shoes/${shoe.id}`}><button >View!</button></Link></div> */}
                      
                      
                      <div className="card-icons">
                        <a href={shoe.goat}><button className="icon_button"><GiGoat className="card_icon"/></button></a>
                        <a href={shoe.stockX}><button className="icon_button"><GiConverseShoe className="card_icon"/></button></a>
                        <a href={shoe.ebay}><button className="icon_button"> <FaEbay className="card_icon"/></button></a>

                        {/* <GiGoat className="card_icon">{shoe.goat}</GiGoat> */}
                        {/* <GiConverseShoe className="card_icon">{shoe.stockX}</GiConverseShoe>
                        <FaEbay className="card_icon">{shoe.ebay}</FaEbay> */}
                      </div>

                  </div>
                </div>
              </div>  
          </div>
        ))}
      </>
    );

    // return <>renderList</>
  };

  export default ShoeCard;

// {shoe.loading && <div>Loading...</div>}
// {!shoe.loading && shoe.error ? <div>Error: {shoe.error}</div> : null}


    // {/* <AiFillYoutube className="icon" /> */}           
    //                   {/* <div className="icons">{shoe.stockX}</div> */}
    //                   {/* <div className="icons">{shoe.goat}</div> */}
    //                   {/* <div className="icons">{shoe.ebay}</div> */}
    //                   {/* <Link className="icons">{shoe.stockX}</Link> */}