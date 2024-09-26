import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ItemDetailContent from './pages/ItemDetailContent'
import Cart from './pages/Cart';
import NavBar from './components/NavBar'
import { CartProvider } from './context/CartContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tornillo/:id" element={<ItemDetailContent />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
