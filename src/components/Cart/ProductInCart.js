import React from "react";
import { useCart } from "../../StoreContext";

const ProductInCart = ({item}) => {
  const { cart, setCart } = useCart();
  console.log("cart", cart);

  //   const listItems = cart.map((productId, product) => <h1>{product}</h1>);

  return (
    <div>
      {cart.forEach((item) => (
        <div key={item.pruductId}>
          <h3>{item.productName}</h3>
          {/* <p>Price: {value.price}</p>
          <p>Quantity: {value.amount}</p> */}
        </div>
      ))}
    </div>
  );
};
export default ProductInCart;