import React from 'react'
import {Shoe} from '../data/Shoesdata';

const Shoes = ({handletoclick}) => {
  return (
    <div className="womencollectionsection">
      <marquee className='marquee'> <h1>'Shoes'</h1> </marquee>

      <div className='Wbanner'>
        <img src='../assest/shoebanner.png' alt='Shoes' height={200}/>
      </div>

      <div className="womenimages">
        {Shoe.map((item) => (
          <div className='itemshoe' key={item.id}>
            <img src={item.image} alt={item.name} className="womenimages" />
            <div className="item-details">
              <p className="item-name"> {item.name}</p>
              <p className="item-price">₹{item.price}</p>
              <button className="add-to-cart-btn" onClick={()=>handletoclick(item)}>Add to Cart</button>
            </div>
          </div>
        ))
        }
      </div>

    </div>
  )
}

export default Shoes