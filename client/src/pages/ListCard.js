// import React, { useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux'
// import {fetchShoes} from '../redux/features/shoesSlice'





// // function ShoeCard() {
//   function ListCard(updateRatings){
//     // const shoes = useSelector((state) => state.allShoes.shoes);
//     // const renderList = shoes.map((shoe) => {

//     const shoe = useSelector((state) => state.shoe);
//     const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(fetchShoes());
//     }, []);

    


//     return (
//       <>
//         {shoe.shoes.map((shoe, i) => (
//           <div className="shoe_container" key={i}>
//               <div className="ul link cards" >
//                 <div className="card" >
//                   <div ><img src={shoe.image_url} alt={shoe.name} className="image" /></div>
//                   <div className="content" >
//                     <div className="header">{shoe.shoeName}</div>
//                     <p>{shoe.ratings} Rating</p>
//                     <button onClick={() => updateRatings(shoe.id)}>Like</button>
//                     {/* <div className="buttonDiv"><Link  to={`/shoes/${shoe.id}`}><button >View!</button></Link></div> */}
//                   </div>
//                 </div>
//               </div>  
//           </div>
//         ))}
//       </>
//     );

//     // return <>renderList</>
//   };

//   export default ListCard;