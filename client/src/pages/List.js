// import React, { useEffect} from 'react';
// import ListCard from './ListCard'
// import {useDispatch, useSelector} from 'react-redux'
// import {fetchShoes} from '../redux/features/shoesSlice'
// // import { BrowserRouter as Router } from "react-router-dom";

// function List({allShoes, updateRatings}) {
//     const shoe = useSelector((state) => state.shoe);
//     const dispatch = useDispatch();
//     useEffect(() => {
//       dispatch(fetchShoes());
//     }, []);

    

//     const topFive = allShoes.slice(0, 4);
//     // console.log(topFive)

//     return (
//         <>
//         <h1 className="">List</h1>
//             <ul className="cards" >
//                 {topFive.map(shoe => <ListCard key={shoe.id} shoe={shoe} updateRatings={updateRatings}/>)}
//             </ul>
//         </>


//     )
// }

// export default List;