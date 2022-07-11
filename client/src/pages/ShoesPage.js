import React from 'react';
// , {useEffect}
// import {useDispatch, useSelector} from 'react-redux'
// import {fetchShoes} from '../redux/features/shoeSlice'
import ShoeCard from './ShoeCard'

function ShoesPage() {
//   const shoe = useSelector((state) => state.shoe);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchShoes());
//   }, []);

  return (
    <>
        <h1>Browse Shoes</h1>
      <div id="container">
            <ul className='cards'>
                {(<ShoeCard />)}
            </ul>
        </div>
    </>
  );
}

export default ShoesPage


//   {/* {shoe.loading && <div>Loading...</div>}
//       {!shoe.loading && shoe.error ? <div>Error: {shoe.error}</div> : null}
//       <ul>
//         {shoe.shoes.map((shoe) => (
//           <div>
//             <div key={shoe.id}>{shoe.shoeName}</div>
//             <img src={shoe.image_url} alt={shoe.name} className="image" />
//           </div>
//         ))}
//       </ul> */}