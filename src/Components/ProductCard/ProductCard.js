import React from 'react'
import './ProductCard.css'

const ProductCard = ({name, price, id, qty, dispatch}) => {
  return (
    <div className='product_card'>
    <p className='product_name'>{name}</p>
    <p className='product_price'>{price}</p>
    <div className='product_count_cntrl'>
        <p className='btn' onClick={()=>{
            dispatch({type:"decrease", payload: id});
        }}>-</p>
        <p>{qty}</p>
        <p className='btn' onClick={()=>{
            dispatch({type:"increase", payload: id});
        }}>+</p>
    </div>
</div>
  )
}

export default ProductCard