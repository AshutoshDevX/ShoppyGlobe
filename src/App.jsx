import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from "./pages/Order"
import { useState } from "react"
import FilterData from "./pages/FilterData"
import useFetchProducts from "./customhooks/useFetchProducts"
import ProductDetails from "./pages/ProductDetails"
import Error from "./pages/Error"

function App() {
  useFetchProducts()
  const [order,setOrder] = useState(null)
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}></Route>
      <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
      <Route path="/filter-data" element={<FilterData/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="*" element={<Error />} />
     </Routes>
     <Footer/>
    </BrowserRouter>
  )
}

export default App
