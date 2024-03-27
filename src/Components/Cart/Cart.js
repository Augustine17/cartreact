import React from 'react'
import './Cart.css'

const Cart = ({name, price, qty}) => {
  return (
    <div className='cart_card'>
        <p>{name}</p>
        <p>{qty} x {price}</p>
    </div>
  )
}

export default Cart