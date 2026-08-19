import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Product">Product</Link>
            <Link to="/Checkout">Checkout</Link>
        </nav>
    </div>
  )
}

export default Navbar;