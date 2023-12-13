import './navbar.css'
import {useContext, useState} from 'react'
import logo from '../Assets/logo.png'
import carticon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar =()=> {

    const [hrMenu,setHrMenu] = useState("shop");
    const {getTotalItem} = useContext(ShopContext)
    const cartItem =    getTotalItem();
    return (
        <>
        <div className="navbar">
            <div className="nav-log">
                <img src={logo} alt="logo"></img>
                <p>Kharidi</p>
            </div>
            <ul className="nav-menu">
                <li className={hrMenu==="shop" ? "active" : ""} onClick={()=> setHrMenu("shop")}><Link to='/'>Shop </Link></li>
                <li className={hrMenu==="women" ? "active" : ""} onClick={()=> setHrMenu("women")}><Link to='/women'>Women </Link></li>
                <li className={hrMenu==="men" ? "active" : ""} onClick={()=> setHrMenu("men")}><Link to='/men'>Men</Link></li>
                <li className={hrMenu==="kids" ? "active" : ""} onClick={()=> setHrMenu("kids")}><Link to='/kids'>Kids </Link></li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='cart'><img src={carticon} alt="cart-icon"/></Link>
                <div className="nav-cart-count">
                {cartItem}
                </div>
            </div>

        </div>
        </>
    )
}

export default Navbar;