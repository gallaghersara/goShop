import React from "react";
// import "./Products.css";
import Product from "./Product";
// import { arr } from "../../Data";

const Products2 = ({products}) => {
    // console.log(arr)
  return (
    <section className="products">
      {products.map((event, index) => (
        <Product
          category={event.category}
          // id={event.id}
          key={index}
          title={event.title}
          price={event.price}
          imageUrl={event.image}
        />
      ))}

    </section>
  );
};

export default Products2;