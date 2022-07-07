import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchShoes} from '../features/shoeSlice'

function ShoesPage() {
    const shoe = useSelector((state) => state.shoe)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchShoes())
    }, [])

    return (
    <div>
        <h1>Browse Shoes</h1>
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
    </div>
)}

export default ShoesPage