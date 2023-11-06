import React, { useContext, useEffect, useState } from "react";
// import "./Product.css";
import { useCart, useProducts } from "../StoreContext";
import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";

// const Product = (prod) => {

const Product = ({ imageUrl, title, price, productID,
  // cart,
  addProductToCart,
  removeProductFromCart,}) => {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();

  // const addProductToCart = () => {
  //   setCart((prevCart) => {
  //     const updatedCart = new Map(prevCart);
  //     const currentProduct = updatedCart.get(productID);

  //     if (currentProduct) {
  //       updatedCart.set(productID, {
  //         ...currentProduct,
  //         amount: currentProduct.amount + 1,
  //       });
  //     } else {
  //       updatedCart.set(productID, {
  //         imageUrl,
  //         title,
  //         price,
  //         amount: 1,
  //       });
  //     }

  //     return updatedCart;
  //   });
  // };

  // const removeProductFromCart = () => {
  //   setCart((prevCart) => {
  //     const updatedCart = new Map(prevCart);
  //     const currentProduct = updatedCart.get(productID);

  //     if (currentProduct && currentProduct.amount > 0) {
  //       updatedCart.set(productID, {
  //         ...currentProduct,
  //         amount: currentProduct.amount - 1,
  //       });
  //     } else {
  //       updatedCart.delete(productID);
  //     }

  //     return updatedCart;
  //   });
  // };

  return (
    // <div className="product-card">
    //   <div className="product-image">
    //     <img src={imageUrl} alt="productImg" />
    //   </div>
    //   <div className="product-info">
    //     <h5>{title}</h5>
    //     <h6>${price}</h6>
    //   </div>
    //   <div>
    //     <button
    //       onClick={() => removeProductFromCart(1)}
    //       disabled={!cart.has(productID)}
    //     >
    //       -
    //     </button>
    //     <span>{cart.get(productID)?.amount ? cart.get(productID).amount : 0}</span>
    //     <button onClick={() => addProductToCart(1)}>+</button>
    //   </div>
    // </div>

    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt="productImg" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>${price}</h6>
      </div>
      <div>
      <button
          onClick={() => removeProductFromCart(1)}
          disabled={!cart.has(productID)}
        >
          -
        </button>
        <span>{cart.get(productID)?.amount ? cart.get(productID).amount : 0}</span>
        <button onClick={() => addProductToCart(1)}>+</button>
      </div>
    </div>
  );
};

export default Product;