import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import { useState } from 'react'
import RefreshHandler from './RefreshHandler'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        {/* default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* protected route */}
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />}
        />
      </Routes>
    </div>
  )
}

export default App
