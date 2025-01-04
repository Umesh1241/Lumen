import './App.css'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Register from './Pages/Register'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProducts from './Pages/UpdateProducts';
import Login from './Pages/Login';
import About from './Pages/About';


function App() {

  return (
    <BrowserRouter>
      <h1 className="text-center text-4xl font-bold text-gray-800 py-4">
        INVENTORY MANAGEMENT
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/update-product/:id" element={<UpdateProducts />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
