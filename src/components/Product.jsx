import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Reducer/reducer';

const Product = ({product}) => {
    const dispatch=useDispatch();
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10,width:'50%' }}>
        <img src={product.image} alt={product.name} style={{width: '75%', height: 'auto'}}/>
        <h4>{product.name}</h4>
        <p>Price: ${product.price}</p>
        <button style={{backgroundColor:'#BDB395',
        width:'50%',padding:'2%',borderRadius:'10px',
        color:'black',fontWeight:'600',border:'none',boxShadow:'0 2px 4px black'}} onClick={()=>{
            dispatch(addToCart(product))}}> Add to Cart</button>
    </div>
  )
}

export default Product