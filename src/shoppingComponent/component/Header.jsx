import React , {useState} from 'react';
import { useCart } from '../context/CartContext';
import './css/header.css'
import { useNavigate , BrowserRouter , Routes , Route} from 'react-router-dom';

const Header = () => {
    const { cartItems } = useCart();
    const [data , setData] = useState('')
    const navigate = useNavigate()

    const keypress = (event) => {
        if(event.key === 'Enter')
        {
            if(data.toLowerCase() === 'men'){
                navigate('/Men')
            }
            else if(data.toLocaleLowerCase() === 'women')
            {
                navigate('/Women')
            }
            else if(data.toLocaleLowerCase() === 'hat')
            {
                navigate('/Hats')
            }
            else if(data.toLocaleLowerCase() === 'shoe')
            {
                navigate('/Shoes')
            }
            else if(data.toLocaleLowerCase() === 'jacket')
            {
                navigate('/Jackets')
            }
            else{
                navigate('*')
            }
        }
    }

    return (
        <nav className="header-section">
            <div className="left">
                <a>
                    <img 
                        src='assest/logo.png' 
                        alt='Web Mart' 
                        className='logo' 
                        onClick={()=>{navigate('/home')}}
                        style={{cursor:'pointer'}}
                    />
                </a>
            </div>
            <div className="search">
                <input 
                    type='text' 
                    placeholder='Search...' 
                    onKeyDown={keypress} 
                    onChange={(e)=>{setData(e.target.value)}}
                    value={data}
                    className='search-input'
                />
            </div>
            <div className="right">
                <div className="signin">
                    <a href="/" style={{textDecoration:'none' , color:'black'}}>
                        Signin/Signup
                    </a>
                </div>
                <div className="cart">
                    <span className="cart-count">{cartItems.length}</span>
                    <a>
                        <img src='assest/cart.png' alt='cart' className='cart-icon' onClick={()=>{navigate('/cart')}}/>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
