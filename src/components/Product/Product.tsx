import React from 'react'
import { productInterface, propsInterface } from '../../interfaces/cart.interface'
import Card from '../Card/Card'
import Cart from '../Cart/Cart'
import CloseButton from '../../svg/closeButton'
import CartButton from '../../svg/CartButton'
import classes from './product.module.css';
const Product = (props:propsInterface) => {
  const {product,cart} = props.data
  const [show,setShow] = React.useState<boolean>(false);
  return (
    <div>
      <div className={classes.store} >
        <h1>Ash Store</h1>
        <div onClick={()=>setShow(true)} className={classes.cursor}>
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
    <div style={{visibility:show?'visible':'hidden' }} className={classes.cart}>
      <div onClick={()=>setShow(false)} className={classes.closeButton}>
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