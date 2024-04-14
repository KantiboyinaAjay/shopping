import React from 'react'
import { Gents } from '../data/data'

const MCollection = ({handletoclick}) => {
  return (
    <div className="womencollectionsection">
      <marquee className='marquee'> <h1>Men Fashion</h1> </marquee>

      <div className='Wbanner'>
        <img src='../assest/menbanner.png' alt='Men' height={200}/>
      </div>

      <div className="womenimages">
        {
          Gents.map((item) => (
            <div key={item.id} className='itemboy'>
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

export default MCollection