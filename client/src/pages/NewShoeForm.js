// useEffect,
import React, {  useState } from 'react';
import { Link } from "react-router-dom";






function NewShoeForm() {
//   const [shoes, setShoes] = useState([]);
  const [shoeId, setShoeId] = useState("");
  const [shoeName, setShoeName] = useState("");
  const [brand, setBrand] = useState("");
  const [colorway, setColorway] = useState("");
  const [retailPrice, setRetailPrice] = useState("");
  const [image_url, setImage_url] = useState("");
  const [stockX, setStockX] = useState("");
  const [ebay, setEbay] = useState("");
  const [goat, setGoat] = useState("");
  const [formErrors, setFormErrors] = useState([]);

//   useEffect(() => {
//     fetch("/shoes")
//       .then((res) => res.json())
//       // console.log(setShoes)
//       .then(setShoes);
//   }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      shoe_id: shoeId,
      shoeName: shoeName,
      brand: brand,
      colorway: colorway,
      retailPrice: retailPrice,
      image_url: image_url,
      stockX: stockX,
      ebay: ebay,
      goat: goat,
      // rating,
    };
    fetch("/shoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Add Shoe</h1>
        <input value={shoeName} onChange={(e) => setShoeName(e.target.value)} name="name" type="text" placeholder='Shoe Name' />
        <input value={brand} onChange={(e) => setBrand(e.target.value)} name="brand" type="text" placeholder='Brand'/>
        <input value={colorway} onChange={(e) => setColorway(e.target.value)} name="colorway" type="text" placeholder='Colorway'/>
        <input value={retailPrice} onChange={(e) => setRetailPrice(e.target.value)} name="price" type="text" placeholder='Price'/>
        <input value={image_url} onChange={(e) => setImage_url(e.target.value)} name="image" type="text" placeholder='Image URL'/>
        <input value={stockX} onChange={(e) => setStockX(e.target.value)} name="stockX" type="text" placeholder='StockX Link'/>
        <input value={ebay} onChange={(e) => setEbay(e.target.value)} name="ebay" type="text" placeholder='Ebay Link'/>
        <input value={goat} onChange={(e) => setGoat(e.target.value)} name="goat" type="text" placeholder='Goat Link'/>
        <button type="submit">Submit</button>
        {/* <button className="active"><Link to="/shoes" onClick={handleSubmit}>{" "}Submit{" "}</Link></button> */}
        {formErrors.length > 0
          ? formErrors.map((err) => (
              <p key={err} style={{ color: "red" }}>
                {err}
              </p>
            ))
          : null}
    </form>
  );
}

export default NewShoeForm;