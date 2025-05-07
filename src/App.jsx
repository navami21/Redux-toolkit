import React from 'react'
import CartIcon from './components/CartIcon'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <header style={{ display:'flex',justifyContent:'space-between',padding:20,textAlign:'center'}}>
      <h1>My Shop</h1>
      <CartIcon/>
      </header>
      <div style={{display:'flex',padding:'20px',gap:'40px',alignItems:'flex-start'}}>
          <div style={{flex:2}}>
            <ProductList />
          </div>
          <div style={{flex:1}}>
            <Cart />
          </div>
        </div>
      </Provider>
    </div>
  )
}

export default App