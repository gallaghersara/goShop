import React, { useState } from 'react'
import Products2 from './components/Products2'
import CartDrawer from './components/Cart/CartDrawer'
import ProductInCart from './components/Cart/ProductInCart';

const Home = () => {
    const [cartOpen, setCartOpen] = useState(false);
  return (
    <div>Home
            <CartDrawer  cartOpen={cartOpen} setCartOpen={setCartOpen}>
            <ProductInCart />
            </CartDrawer>
        <Products2 />
    </div>
  )
}

export default Home