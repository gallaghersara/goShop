import React, { useContext, useEffect, useState } from "react";
// import "./Product.css";

// const Product = (prod) => {
const Product = ({ imageUrl, title, price, productID }) => {

//  const product = prod(productUrl);




// useEffect(() => {
//     console.log(cart)
//   }, [cart])
  return (
    <div className="product-card">
      {/* <FilterBy categories={categories} onFilterChange={onFilterChange} /> */}
      <div className="product-image">
        <img src={imageUrl} alt="productImg" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>

      </div>
    </div>
  );
};

export default Product;