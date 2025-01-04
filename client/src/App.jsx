import './App.css'
import Home from './Pages/Home';
import Products from './Pages/Products';
import Register from './Pages/Register'
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProducts from './Pages/UpdateProducts';
import CreateProduct from './Pages/CreateProduct';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/update-product/:id" element={<UpdateProducts />} />
          <Route path="/products/add-product" element={<CreateProduct />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
  )
}

export default App
