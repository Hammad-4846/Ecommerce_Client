import "./style.scss";
import Navbar from "./Components/Navbar/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Error from "./Pages/Error/Error.js";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Faq from "./Pages/FAQ/Faq";
import Cart from "./Components/Cart/Cart.js";
import ProductDetail from "./Pages/ProductDetail/ProductDetails.js"
import { useState } from "react";
import About from "./Pages/About/About";
import Account from "./Pages/Account/index";
import Products from "./Pages/Shop/Shop.js";

function App() {
  const [toggleCart, setToggleCart] = useState(false);
   function handleToggleCart() {
    console.log("Run", toggleCart);
    setToggleCart(!toggleCart);
  }
  return (
    <div className="App">
      <Navbar setToggleCart={handleToggleCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/badreq" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shop" element={<Products />} />
      </Routes>
      <Cart toggleCart={toggleCart} setToggleCart={handleToggleCart} />
      <Footer />
    </div>
  );
}

export default App;
