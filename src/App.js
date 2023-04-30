
import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import {  } from "./assests/style.css";
import Home from './Components/Home';
import Contactus from "./Components/Contactus.jsx";
import Product from "./Components/Propducts/Product.jsx";
import ProductSingle from "./Components/Propducts/ProductSingle.jsx";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul className="navbar">
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/product'>Product</Link> </li>
        <li> <Link to='/contact-us'>ContacUs </Link> </li>
        
       
      </ul>
    </div>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/contact-us' element={<Contactus/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/products/:id' element={<ProductSingle/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
