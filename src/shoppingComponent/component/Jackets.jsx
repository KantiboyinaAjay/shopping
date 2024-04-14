import React from 'react'
import {Jacket} from '../data/Jacketsdata';

const Jackets = ({handletoclick}) => {
  return (
    <div className="womencollectionsection">
      <marquee className='marquee'> <h1>Jackets</h1> </marquee>

      <div className='Wbanner'>
        <img src='../assest/jacketsbanner.png' alt='Jackets' height={200}/>
      </div>

      <div className="womenimages">
        {
          Jacket.map((item) => (
            <div key={item.id} className='itemjacket'>
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

export default Jackets