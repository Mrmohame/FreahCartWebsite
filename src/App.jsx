import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Register from './components/Register/Register'
import Details from './components/Details/Details'
import About from './components/About/About'
import Card from './components/Card/Card'
import Products from './components/Products/Products'
import CounterContextProvider from '../Context/CounterContext'
import UserContextProvider from '../Context/UserContext'
import ProtectedRouting from './components/ProtectedRouting/ProtectedRouting'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CategoryDetails from './components/CategoryDetails/CategoryDetails'
import SpecificCategoryDetails from './components/SpecificCategoryDetails/SpecificCategoryDetails'
import CartContextProvider from '../Context/CartContext'
import toast, { Toaster } from 'react-hot-toast';
import CheckOut from './components/CheckOut/CheckOut'
import AnotherCategories from './components/AnotherCategories/AnotherCategories'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import WishList from './components/WishList/WishList'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import VerfiyCode from './components/VerfiyCode/VerfiyCode'
import ResetPassword from './components/ResetPassword/ResetPassword'



function App() {

let query =new QueryClient()
 
let provide = createBrowserRouter([
  {path: "", element:<Layout/>,children:[
    {index:true,element:<ProtectedRouting><Home/></ProtectedRouting>},
    {path:"about",element:<ProtectedRouting><About/></ProtectedRouting>},
    {path:"details/:id/:category",element:<ProtectedRouting><Details/></ProtectedRouting>},
    {path:"card",element:<ProtectedRouting><Card/></ProtectedRouting>},
    {path:"Brands",element:<ProtectedRouting><Brands/></ProtectedRouting>},
    {path:"Categories",element:<ProtectedRouting><Categories/></ProtectedRouting>},
    {path:"checkOut",element:<ProtectedRouting><CheckOut/></ProtectedRouting>},
    {path:"products",element:<ProtectedRouting><Products/></ProtectedRouting>},
    {path:"WishList",element:<ProtectedRouting><WishList/></ProtectedRouting>},
    {path:"Anlo",element:<ProtectedRouting><AnotherCategories/></ProtectedRouting>},
    {path:"categorydetails/:category",element:<ProtectedRouting><CategoryDetails/></ProtectedRouting>},
    {path:"specificcategorydetails/:id/:category",element:<ProtectedRouting><SpecificCategoryDetails/></ProtectedRouting>},
    {path:"forgetPassword",element:<ForgetPassword/>},
    {path:"verifyCode",element:<VerfiyCode/>},
    {path:"resetPassword",element:<ResetPassword/>},
   {path:"login",element:<Login/>},
    {path:"logout",element:<Logout/>},
    {path:"register",element:<Register/>},
  ]},
])


  return (
    <>
<CartContextProvider>
<QueryClientProvider client={query}>
<UserContextProvider>
<CounterContextProvider>
<Toaster />
<RouterProvider router={provide}></RouterProvider>
</CounterContextProvider>
</UserContextProvider>
</QueryClientProvider>
</CartContextProvider>




    </>
  )
}

export default App
