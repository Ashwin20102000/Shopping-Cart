import { cartProductInterface } from '../../interfaces/cart.interface'
import CartButton from '../../svg/CartButton'
import { priceFormatter } from '../../utils/formatter'
import CartItem from '../CartItem/CartItem'
interface cartProps {
  cart:[cartProductInterface],
  setState:any
}
import classes from './cart.module.css'
const Cart = (props:cartProps) => {
  const subtoatal = props.cart.map((cart:cartProductInterface)=>+cart.price*+cart.quantity)
  const total = subtoatal.reduce((acc:number,curr:number)=>acc+curr,0)
  return (
    <div className={classes.cart} >
      {
        props.cart.length ? 
        <div>
          <div className={classes.head}>
            <h2>Cart</h2>
          <CartButton />
          </div>
        {
        props.cart.map((cartItem:cartProductInterface)=>{
          return <CartItem cartItem={cartItem} setState={props.setState} />
        })
        
        }
        <div className={classes.total}>
         🎉 Your Payable subtotal is ₹  {priceFormatter(total+'')} ✨
        </div>
        
        </div>
        :
        <h3 style={{color:'black'}}>Your Cart is Empty 😕</h3>
      }
    </div>
  )
}

export default Cart