import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import UserProfile from './pages/UserProfile'
import Checkout from './pages/Checkout'
import AdminPanel from './pages/AdminPanel'
import Dashboard from './pages/Dashboard'

import './App.css'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminPanel />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
