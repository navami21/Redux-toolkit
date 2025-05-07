import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, clearCart, removeFromCart } from '../Reducer/reducer';

const Cart = () => {

    const items=useSelector(state=>state.cart.items);
    const dispatch=useDispatch();
  return (
    <div>
        <h2>Cart</h2>
        {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{display:'flex', gap:'20px', alignItems:'center', marginBottom:'10px',fontWeight:'600'}}>
              <span>{item.name} - ${item.price} × {item.quantity}</span>
              <button style={{backgroundColor:"red",padding:'10px', borderRadius:'5px', color:'white',fontWeight:'600'}} onClick={() => dispatch(addToCart(item))}>+</button>
              <button style={{backgroundColor:"green",padding:'10px', borderRadius:'5px', color:'white',fontWeight:'600'}} onClick={() => dispatch(removeFromCart(item.id))}>−</button>
            </div>
          ))}
          <button style={{backgroundColor:'#B17F59', color:'white',padding:'10px',borderRadius:'5px',fontWeight:'600'}} onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}

    </div>
  )
}

export default Cart