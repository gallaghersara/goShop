import React ,  { useState }  from "react";
// import "./Products.css";
import Product from "./Product";
import Cart from "./Cart/Cart";
// import { arr } from "../../Data";

const Products2 = ({products}) => {
  const [cartOpen, setCartOpen] = useState(false);
console.log("prod",products)
    // console.log(arr)
  return (
    <section className="products">
      {products.map((item, index) => (

        <Product 
        category={item.category}
        key={index}
        productID={item._id}
        title={item.title}
        price={item.price}
        imageUrl={item.image}
       />
      ))}

    </section>
  );
};

export default Products2;