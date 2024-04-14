import React , {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';
import Cart from './Cart';
import Hat from '../component/Hats';
import Jacket from '../component/Jackets';
import Shoe from '../component/Shoes';
import MCollection from '../component/MCollection';
import WCollections from '../component/WCollection';
import Header from './Header';
import Errorpage from './Errorpage'
import { useCart } from '../context/CartContext';
import Login from './login';

const Home = () => {
  const [warn , setWarn] = useState(false);
  const { cartItems , add } = useCart();

  const handletoclick = (item) => {
    let present = false;
    cartItems.forEach((product)=>{
      if(item.name === product.name)
      {
        present = true;
      }
    })
    if(present){
      setWarn(true);
      setTimeout(()=>{
        setWarn(false);
      },3000);
      return;
    }
    add(item)
  }
  return (
    <>
      {
        warn && <div className='danger'>already exists in a cart</div>
      }
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/home' element={<Mainpage />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="/Hats" element={<Hat handletoclick={handletoclick}/>} />
          <Route path="/Jackets" element={<Jacket handletoclick={handletoclick}/>} />
          <Route path="/Shoes" element={<Shoe handletoclick={handletoclick}/>} />
          <Route path="/Men" element={<MCollection handletoclick={handletoclick}/>} />
          <Route path="/Women" element={<WCollections handletoclick={handletoclick}/>} />
          <Route path='/' element={<Login/>}/>
          <Route path="*" element={<Errorpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Home