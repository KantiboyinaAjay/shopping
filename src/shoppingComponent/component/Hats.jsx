import React from 'react'
import { Hat } from '../data/Hatsdata'

const Hats = ({handletoclick}) => {
  return (
    <div className="womencollectionsection">
      <marquee className='marquee'> <h1>Hats</h1> </marquee>

      <div className='Wbanner'>
        <img src='../assest/hatsbanner.png' alt='Hats' height={200}/>
      </div>

      <div className="womenimages">
        {
          Hat.map((item) => (
            <div key={item.id} className='itemblock'>
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

export default Hats