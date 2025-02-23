import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory';
import Cart from './Pages/Cart'
import Login from './Pages/LoginSignup'
import Product from './Pages/Product'
import Fotter from './Components/Footer/Fotter';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar/>

      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/men' element={<Shopcategory category="men" banner={men_banner}/> }></Route>
        <Route path='/women' element={<Shopcategory category="women" banner={women_banner}/>}></Route>
        <Route path='/kid' element={<Shopcategory category="kid" banner={kid_banner}/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}></Route>
        </Route>
      </Routes>
      <Fotter/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
