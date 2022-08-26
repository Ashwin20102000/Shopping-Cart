import React from 'react'
import { productInterface, propsInterface } from '../../interfaces/cart.interface'
import Card from '../Card/Card'
import Cart from '../Cart/Cart'
import CloseButton from '../../svg/closeButton'
import CartButton from '../../svg/CartButton'
const Product = (props:propsInterface) => {
  const {product,cart} = props.data
  const [show,setShow] = React.useState<boolean>(false);
  return (
      <div>
        <div style={{
          display:'flex',
          justifyContent:'space-around',
          alignItems:'center'
        }}>
      <h1>Ash Store</h1>
      <div
    onClick={()=>setShow(true)}
      style={{
        cursor:'pointer'
      }}>
       <CartButton count={cart.length||undefined} />
         </div>

        </div>
    <div style={{display:'flex',flexWrap:'wrap',}}>
      {
        product && product.map((prod:productInterface)=>{
          return <Card key={prod.id} prod={prod} cart={cart} setState = {props.setState} />
        })
      }
    </div>
    <div
    style={{
      // position:'absolute',
      position:'fixed',
      top:'10px',
      margin:'10%',
      left:'15%',
      maxWidth:'672px',
      background:'wheat',
      width:'60%',
      visibility:show?'visible':'hidden',
      height:'70vh',
      display:'flex',
      flexDirection:'column',
      borderRadius:'2rem',
      animation:'1s',

      // boxShadow:'3px 3px 5px #000'

    }}
    >
      <div
      onClick={()=>setShow(false)}
      style={{
      display:'flex',
      justifyContent:'flex-end',
      margin:'-35px',
      flexFlow:'1',
      cursor:'pointer',
      animation:'1s',
      color:'grey',      
      }}>
        <CloseButton />
      </div>
      <div>
        <Cart cart={cart} setState = {props.setState} />
      </div>
    </div>
      </div>
  )
}

export default Product