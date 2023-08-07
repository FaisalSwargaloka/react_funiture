import './App.css';
import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import About from "../src/page/about/About"
import Product from "../src/page/product/Product"
import Contact from "../src/page/contact/Contact"
import Home from "../src/page/home/Home"
import CartPage from "../src/page/cart/CartPage"
import { useState, useEffect } from 'react';
import Login from './page/login/Login';
import Regis from './page/regis/Regis';
import Dashboard from './page/dashboard/Dashboard';
import firebase from './fireBase/FireBase';
import { AnimatePresence } from 'framer-motion';
import { CartProvider } from './components/CartContext';
import NavigationBar from './components/NavigationBar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [showDropDown, setShowDropdown] = useState(false);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const location = useLocation()

  const handleLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true');
    navigate("/dashboard");
  }

  useEffect(() => {
    const isLoggedInFromStorage = localStorage.getItem('isLoggedIn');
    if (isLoggedInFromStorage) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('isLoggedIn');
        localStorage.clear()
        setIsLoggedIn(false);
        setShowDropdown(false);
        navigate('/');
      })
      .catch(() => {
      });
  };

  useEffect(() => {
    const auth = firebase.auth()
    auth.onAuthStateChanged((result) => {
      if (result) {
        setIsLoggedIn(true)
        setLoading(false)
        return
      }
      setIsLoggedIn(false)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div className='loading-screen'>Loading.....</div>
    )
  }

  return (
    <>
      <CartProvider>
        <div className="App">
          <NavigationBar
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            showDropDown={showDropDown}
          />
          <AnimatePresence>
            {
              isLoggedIn ? (

                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />}
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path='*' element={<Home />} />
                </Routes>

              ) : (
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />}
                  />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login handleLogin={handleLogin} />} />
                  <Route path="/signup" element={<Regis handleLogin={handleLogin} />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path='*' element={<Home />} />
                </Routes>
              )
            }
          </AnimatePresence>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
