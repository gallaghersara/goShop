// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./pages/Login";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateComponent";
import { useEffect, useState } from "react";
import Products2 from "./components/Products2";
import { StoreProvider, useProducts } from "./StoreContext";
// import CartDrawer from "./components/Cart/CartDrawer";

function App() {

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  // const { data } = useProducts();
  // useEffect(() => {

  //   if (loggedIn) {

  //     getProducts();
  //   }
  // }, [loggedIn]);


  const categories = allProducts
  .map((p) => p.category)
  .filter((value, index, array) => array.indexOf(value) === index);

  function getProducts() {
    fetch("http://localhost:8000/items")
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
    });
  }

  const onFilterChange = (e) => {
    if (e.target.value === "All") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((p) => p.category === e.target.value));
    }
    console.log(e.target.value);
  };

  // ---Set the getProducts() with loggedIn
  useEffect(() => {
    // const auth = localStorage.getItem("user");
    // setLoggedIn(!!auth);
    // if (loggedIn) {
      getProducts();
    // }
  }, []);

  return (
    <div className="App">
      <StoreProvider>
      <BrowserRouter>
        <Nav onFilterChange={onFilterChange} categories={categories} />
        {/* <Nav /> */}
        <Routes>
          <Route element={ <PrivateComponent />}>
            {/* <Route path="/" element={<Products />} /> */}
        
            <Route path="/" element={ <Products2 products={products}  categories={categories}/>} />
            {/* <Route path="/" element={<Products2  products={allProducts} categories={categories}/>} /> */}
{/* <Products2 /> */}
 {/* <FilterBy onFilterChange={onFilterChange} categories={categories} /> */}

            <Route path="/add" element={<AddProduct />} />
            {/* <Route path="/update/:id" element={<UpdateProduct />} /> */}
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            {/* <CartDrawer></CartDrawer> */}
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </StoreProvider>
      <Footer />
    </div>
  );
}

export default App;
