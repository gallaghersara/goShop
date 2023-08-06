import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8000/items");
    result = await result.json();
    setProducts(result);
  };
  console.warn(products);

  const deleteProduct = async (id) => {
    try {
      console.warn(id);
      let result = await fetch(`http://localhost:8000/product/${id}`, {
        method: "DELETE",
      });
      result = await result.json();
      if (result) {
        console.log("Product deleted");
        getProducts();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8000/search/${key}`);
      result = await result.json();
      if (result) {
        // console.log("Product deleted");
        setProducts(result);
      }else{
        getProducts();
      }
    }
  };
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <input
        className="search-product-box"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul>
        <li>S. No.</li>
        <li>Title</li>
      </ul>
      {  products.length>0 ?   products.map((item, index) => 
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.title}</li>
          <li>{item.price}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>
        </ul>
      ):<h1>No Result Found</h1>
    }
      {/* {products.map((event, index) => (
        <Product
          category={event.category}
          // id={event.id}
          key={index}
          title={event.title}
          price={event.price}
          imageUrl={event.image}
        />
      ))} */}
    </div>
  );
};

export default Products;
