import React ,  { useState }  from "react";
// import "./Products.css";
import Product from "./Product";
import Cart from "./Cart/Cart";
// import { arr } from "../../Data";

const Products2 = ({products}) => {
  const [cartOpen, setCartOpen] = useState(false);

    // console.log(arr)
  return (
    <section className="products">
      {products.map((event, index) => (
        // <Product 
        // category={event.category}
        // // id={event.id}
        // key={index}
        // productID={event.productID}
        // title={event.title}
        // price={event.price}
        // imageUrl={event.image}/>
        <Cart
          category={event.category}
          // id={event.id}
          key={index}
          productID={event.productID}
          title={event.title}
          price={event.price}
          imageUrl={event.image}
        />
      ))}

    </section>
  );
};

export default Products2;