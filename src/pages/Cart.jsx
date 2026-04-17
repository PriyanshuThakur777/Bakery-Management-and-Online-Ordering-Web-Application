import React, { useContext } from 'react'
import { StoreContext } from '../contaxt/StoreContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
    const {cartItems,food_list,removeFromCart,getTotalAmount}=useContext(StoreContext)
    const navigate = useNavigate()
  return (
   <>
    <div className='container mt-5'>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    food_list.map((item,index)=>{
                        if(cartItems[item._id]>0){
                            return(
                                <tr key={index}>
                                    <td><img src={item.Image} alt="" className='cart-image' /></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{cartItems[item._id]}</td>
                                    <td>{item.price*cartItems[item._id]}</td>
                                    <td><RiDeleteBin6Line onClick={()=>removeFromCart(item._id)}/></td>
                                    
                                </tr>
                            )
                        }
                    })
                }
            </tbody>

        </table>
        <div className="container payment">
            <hr />
            <p>Amount: {getTotalAmount()} Rs</p>
            <hr />
            <div>
            <button className='btn btn-danger' onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        </div>
        

    </div>
   </>
  )
}

export default Cart