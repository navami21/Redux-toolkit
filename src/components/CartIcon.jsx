import React from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {
    const count=useSelector(state=>
        state.cart.items.reduce((total,item)=>total+item.quantity,0)
        );

  return (
    <div style={{fontSize:'2rem'}}>🛒 {count}</div>
  )
}

export default CartIcon