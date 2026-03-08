


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { handleError, handleSuccess } from '../utils'
import { ToastContainer } from 'react-toastify'
import './Home.css' // import CSS

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('')
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'))
  }, [])

  const fetchProducts = async () => {
    try {
      const url =  `${process.env.REACT_APP_API_URL}/products`
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      setProducts(Array.isArray(result) ? result : result.products || [])
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    handleSuccess('User Logged out')
    setProducts([])
    setTimeout(() => navigate('/login'), 1000)
  }

  return (
    <>
    <div className='body-1'>
    <div className="home-container">
      <div className="header">
        <h1>Welcome, {loggedInUser}</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="products-container">
        {products.length > 0 ? (
          products.map((item, index) => (
            <div key={index} className="product-card">
              {item.image && <img src={item.image} alt={item.name} className="product-image" />}
              <span className="product-name">{item.name}</span>
              <span className="product-price">Rs.{item.price}</span>
            </div>
          ))
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </div>

      <ToastContainer />
    </div>
    </div>
  
  </>
  )
}


export default Home
