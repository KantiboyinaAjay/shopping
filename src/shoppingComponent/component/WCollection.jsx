import React from 'react'
import { useCart } from 'react-use-cart'
import {Ladies} from '../data/LadyFashiondata';

const WCollections = ({handletoclick}) => {
  const {cartItems , add} = useCart()
  return (
    <div className="womencollectionsection">
      <marquee className='marquee'> <h1>Ladies Fashion</h1> </marquee>

      <div className='Wbanner'>
        <img src='../assest/ladiesbanner.png' alt='lady' height={200}/>
      </div>

      <div className="womenimages">
        {
          Ladies.map((item) => (
            <div key={item.id} className='itemlady'>
              <img src={item.image} alt={item.name} className="womenimages"/>
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">₹{item.price}</p>
                <button className="add-to-cart-btn" onClick={()=>handletoclick(item)}>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default WCollections