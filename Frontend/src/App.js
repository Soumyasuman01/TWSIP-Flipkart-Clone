import WebFont from 'webfontloader';
import Footer from './components/Layouts/Footer/Footer';
import Header from './components/Layouts/Header/Header';
import Login from './components/User/Login';
import Register from './components/User/Register';
import { Routes, Route, useLocation } from 'react-router-dom';
import { loadUser } from './actions/userAction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Account from './components/User/Account';
import ProtectedRoute from './Routes/ProtectedRoute';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import OrderConfirm from './components/Cart/OrderConfirm';
import Payment from './components/Cart/Payment';
import OrderStatus from './components/Cart/OrderStatus';
import OrderSuccess from './components/Cart/OrderSuccess';
import MyOrders from './components/Order/MyOrders';
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from './components/Admin/Dashboard';
import MainData from './components/Admin/MainData';
import OrderTable from './components/Admin/OrderTable';
import UpdateOrder from './components/Admin/UpdateOrder';
import ProductTable from './components/Admin/ProductTable';
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from './components/Admin/UpdateProduct';
import UserTable from './components/Admin/UserTable';
import UpdateUser from './components/Admin/UpdateUser';
import ReviewsTable from './components/Admin/ReviewsTable';
import Wishlist from './components/Wishlist/Wishlist';
import NotFound from './components/NotFound';

function App() {

  const dispatch = useDispatch();
  const { pathname } = useLocation();
}

export default App;