import React from 'react'
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Product"));
const Checkout = lazy(() => import("./pages/Checkout"))

function App() {
  const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    })
  return (
    <div>
      <Navbar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='/checkout' element={<Checkout formData={formData} setFormData={setFormData} />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;