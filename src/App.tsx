import React from 'react'
import './App.css'
import Product from './components/Product/Product';
import { BASE_API } from './utils/api'
import { intialState } from './utils/intialState';

function App() {
  const [state,setState] = React.useState(intialState);
  const getProducts = async() => {
    const product = await fetch(BASE_API+'/products');
    const data = await product.json();
    data && setState({
     cart: [...state.cart],
      product:data
    });
  }
  React.useEffect(()=>{
    getProducts();
  },[])
  return (
      <div className="App">
        <div  className="container">
         <Product data = {state} setState={setState} />
        </div>
      </div>
  )
}

export default App
