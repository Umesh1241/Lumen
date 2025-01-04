import React, { useState } from 'react';
import { FaUser, FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',  
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/')
   //if api is provided i will fetch here sir
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-md mt-2">
        <div className="flex justify-center mb-6 mt-1">
          <FaUser className="text-8xl text-gray-500 border-4 border-gray-300 rounded-full p-2" />
        </div>

        <h2 className="text-2xl font-bold text-center text-red-500">Register here!</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-left mb-2">Name</label>
            <div className="mt-2 relative">
              <FaUser className="absolute left-3 top-3 text-gray-400 text-2xl" />
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="block w-full px-10 py-3 mt-2 text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-left mb-2">Email</label>
            <div className="mt-2 relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400 text-2xl" />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-10 py-3 mt-2 text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left mb-2">Role</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="staff"
                  checked={formData.role === 'staff'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Staff
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Admin
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="manager"
                  checked={formData.role === 'manager'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Manager
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-left mb-2">Password</label>
            <div className="mt-2 relative">
              <FaLock className="absolute left-3 top-3 text-gray-400 text-2xl" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="block w-full px-10 py-3 mt-2 text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 text-2xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-left mb-2">Confirm Password</label>
            <div className="mt-2 relative">
              <FaLock className="absolute left-3 top-3 text-gray-400 text-2xl" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-10 py-3 mt-2 text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-400 text-2xl"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 text-white font-semibold bg-red-500 rounded-lg hover:bg-red-500 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
