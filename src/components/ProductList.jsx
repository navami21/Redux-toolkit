import React from 'react'
import Product from './Product';
// import Product from './Product';


const sampleProducts=[
    {id:1,name:'Keyboard',price:3000},
    {id:2,name:'Mouse',price:2000},
    {id:3,name:'Monitor',price:10000},
    {id:4,name:'Speaker',price:4000},

];
const ProductList = () => {
  return (
    <>
    <h2 >Products</h2>
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    {sampleProducts.map(product=>(
        <Product key={product.id} product={product}/>
    ))}
    </div>
    </>
  )
}

export default ProductList
