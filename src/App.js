
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Footer from './Components/Footer/Footer';
import banner_kids from './Components/Assets/banner_kids.png';
import banner_mens from './Components/Assets/banner_mens.png';
import banner_women from './Components/Assets/banner_women.png';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/men' element={<ShopCategory banner={banner_mens} category="men"/>}></Route>
        <Route path='/women' element={<ShopCategory banner={banner_women} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid"/>}></Route>
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<LoginSingup />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
