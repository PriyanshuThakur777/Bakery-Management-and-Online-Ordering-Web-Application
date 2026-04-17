import React, { useContext, useState } from 'react'
import { Assets } from '../assets/Assets'
import { StoreContext } from '../contaxt/StoreContext'


const Fooditem = ({id,name,price,description,image}) => {
  const { cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  
  return (
    <div className="mb-3 container">
      <div className="food-items">
        <div className="food-items-list">
          <div className="food-items-image">
            <img src={image} alt="" className='food-item-image img-fluid' />
            <div>
            {
              !cartItems[id]
              ?
              <img onClick={()=>addToCart(id)} src={Assets.plus}/>
              :<div className='food-cart'>
                <img src={Assets.remove} onClick={()=>removeFromCart(id)} alt="" />
                <p>{cartItems[id]}</p>
                <img src={Assets.add} onClick={()=>addToCart(id)} alt="" />
                </div>
            }
            </div>
            </div>
            
            <div className="food-item-info">
            <p>{name}</p>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">Price: ${price}</p>
            </div>
            <div>
            
            
            </div> 
        </div>  
      </div>
    </div>
  )
}

export default Fooditem