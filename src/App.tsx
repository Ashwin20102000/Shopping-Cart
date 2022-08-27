import React from 'react'
import './App.css'
import Loader from './components/Loader/Loader';
import Product from './components/Product/Product';
import { stateInterface } from './interfaces/cart.interface';
import { BASE_API } from './utils/api'
import { intialState } from './utils/intialState';

function App() {
  const [state,setState] = React.useState<stateInterface>(intialState);
  const [loader,setLoader] = React.useState<boolean>(false);
  const getProducts = async() => {
    try {
      setLoader(true);
        const product = await fetch(BASE_API+'/products');
        const data = await product.json();
        data && setState({
        cart: [...state.cart],
          product:data
        });
            setLoader(false);

    } catch (error) {
      console.log('error', error);
    }
    setLoader(false);
  }
  React.useEffect(()=>{
    getProducts();
  },[])
  console.log({state,loader})
  return (
      <div className="App">
        <div  className="container">
          {
            loader ? <Loader />:<Product data = {state} setState={setState} fetchProducts={getProducts} />
          }
        </div>
      </div>
  )
}

export default App
