import React from 'react'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Product() {
    const [product, setProduct] = useState("");
  return (
    <div>
        <ProductCard product={product} />
    </div>
  )
}

export default Product;