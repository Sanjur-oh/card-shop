// import React, { useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux'
// import {fetchShoes} from '../redux/features/shoeSlice'


// function ShoeCard() {
//   const shoe = useSelector((state) => state.allShoes.shoe);
//   const {id, name} = shoe
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchShoes());
//   }, []);

//   return (
//     <div className="four column wide">
//       <div className="ul link cards">
//         <div className="card">
//           <div className="image">
//             <div className="content">

//             </div>           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoeCard;


import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchShoes} from '../redux/features/shoeSlice'


function ShoeCard() {
  const shoe = useSelector((state) => state.shoe);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoes());
  }, []);

  return (
    <li className="shoe-card">
      {/* <div className="card">
                <img src={shoe.image_url} alt={shoe.name} className="card_image" />
                <div className="card_content">
                    <div className="card_name">{shoe.name}</div>
                    
                    
                </div>
            </div> */}

      {shoe.loading && <div>Loading...</div>}
      {!shoe.loading && shoe.error ? <div>Error: {shoe.error}</div> : null}
      <ul>
        {shoe.shoes.map((shoe) => (
          <div>
            <div key={shoe.id}>{shoe.shoeName}</div>
            <img src={shoe.image_url} alt={shoe.name} className="image" />
          </div>
        ))}
      </ul>
    </li>
  );
}

export default ShoeCard;