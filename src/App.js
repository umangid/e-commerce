import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import productReducer from './pages/redux/productReducer';
import { configureStore } from '@reduxjs/toolkit';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import AddToCart from './pages/addtocart';
import Wishlist from './pages/wishlist';
import ProductDesc from './pages/productdescription';
import PrivateRoutes from "./pages/PrivateRoutes";
function App() {
  const { localStorage } = window;
  const store = configureStore({
    reducer: productReducer
  })

  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/AddToCart' element={<AddToCart />} />
            <Route path='/Wishlist' element={<Wishlist />} />
          </Route>
          <Route path="/" element={<Login />} exact />
          <Route path="/Dashboard" element={<Dashboard />} exact />
          <Route path="/ProductDesc" element={<ProductDesc />} exact />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
