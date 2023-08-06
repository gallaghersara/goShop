import React, { useEffect, useState } from "react";
import "./Products.css"
const Products = () => {
  // const Products = ({ imageUrl, title, price, productID }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch("http://localhost:8000/items")
      .then((response) => response.json())
      .then((data) => {
        // setAllProducts(data);
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
    });
  }
  return (
    <div className="products">
  {  products.length>0 ?   products.map((item, index) => 
  
    <div className="product-card">
        {/* <Products 
        title={item.title}
        /> */}
         <div className="product-image">
        <img src={item.imageUrl} alt="productImg" />
      </div>
    <div className="product-info">
        <h5>{item.title}</h5>
        <h6>${item.price}</h6>
    </div>
    </div>
     ):<h1>No Result Found</h1>
  }
    </div>
  );
};

export default Products;
