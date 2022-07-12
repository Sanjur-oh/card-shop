// import React, { useEffect, useState } from 'react'
// import {useParams} from "react-router-dom"
// // import {useDispatch, useSelector} from 'react-redux'
// // import {fetchShoes} from '../redux/features/shoesSlice'
// // import axios from "axios"


// function ShoeDetails() {
//   const [{ data: shoe, error, status }, setShoe] = useState({
//     data: null,
//     error: null,
//     status: "pending",
//   });
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`/shoes/${id}`).then((r) => {
//       if (r.ok) {
//         r.json().then((shoe) =>
//           setShoe({ data: shoe, error: null, status: "resolved" })
//         );
//       } else {
//         r.json().then((err) =>
//           setShoe({ data: null, error: err.error, status: "rejected" })
//         );
//       }
//     });
//   }, [id]);



//   return (
//     <div>
//       {shoe.map((shoe, i) => (
//       <h2>{shoe.shoeName}</h2>
//       ))}
//     </div>
// );
// }

// export default ShoeDetails

//////////// shoe detail

import React, { useEffect } from 'react'
// import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {fetchShoes} from '../redux/features/shoesSlice'
// import axios from "axios"


const ShoeDetails = () => {
  const shoe = useSelector((state) => state.shoe);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoes());
  }, []);


  return (
    <div >
    {shoe.shoes.map((shoe) => (
      <div className="four column wide">
          <div className="ul link cards">
            <div className="card">
              <div><img src={shoe.image_url} alt={shoe.name} className="image" /></div>
              <div className="content">
                <div className="header">{shoe.shoeName}</div>
                <div className="price">Retail ${shoe.retailPrice}</div>
                <div className="detail">{shoe.colorway}</div>

              </div>
            </div>
          </div>  
      </div>
    ))}
  </div>
);
}

export default ShoeDetails

