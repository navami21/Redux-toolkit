import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Reducer/reducer';

const Product = ({product}) => {
    const dispatch=useDispatch();
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10,width:'50%' }}>
        <h4>{product.name}</h4>
        <p>Price: ${product.price}</p>
        <button style={{backgroundColor:'#8E7DBE',width:'50%',padding:'2%',borderRadius:'10px',color:'white',fontWeight:'600'}} onClick={()=>{
            dispatch(addToCart(product))}}> Add to Cart</button>
    </div>
  )
}

export default Product