import React from 'react'
import Product from './Product';
// import Product from './Product';


const sampleProducts=[
    {id:1,image:'https://m.media-amazon.com/images/I/616fdRSET7L._AC_UF1000,1000_QL80_.jpg',name:'Keyboard',price:3000},
    {id:2,image:'https://www.intex.in/cdn/shop/files/Nova_1024x1024.png?v=1720503757',name:'Mouse',price:2000},
    {id:3,image:'https://www.lg.com/content/dam/channel/wcms/in/images/monitors/27gs60f-b_atr_eail_in_c/gallery/27GS60F-B-DZ-1.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',name:'Monitor',price:10000},
    {id:4,image:'https://images-cdn.ubuy.co.in/65a3f902b22d436c02334a0d-njsj-computer-speakers-with-subwoofer.jpg',name:'Speaker',price:4000},

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
