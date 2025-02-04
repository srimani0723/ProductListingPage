import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './component/Login'
import Home from "./component/Home";
import ProtectedRoute from "./component/ProtectedRoute";
import Shop from "./component/Shop";
import NotFound from "./component/NotFound";
import CartView from "./component/CartView";
import Wishlist from "./component/Wishlist";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route path='/' element={<ProtectedRoute element={<Home />} />} />
        <Route path='/shop' element={<ProtectedRoute element={<Shop />} />} />
        <Route path='/cart' element={<ProtectedRoute element={<CartView />} />} />
        <Route path="/wishlist" element={<ProtectedRoute element={<Wishlist />} />} />
        <Route path='/not-found' element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  )
}

export default App
