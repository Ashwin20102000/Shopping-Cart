import { cartProductInterface, stateInterface } from "../../interfaces/cart.interface"
import TrashButton from "../../svg/TrashButton"
import { priceFormatter } from "../../utils/formatter"
import classes from './cartItem.module.css'
interface cartItemsProps {
  cartItem:cartProductInterface,
  setState:any
}
const CartItem = (props:cartItemsProps) => {
  const {image,title,price,description,quantity} = props.cartItem
  const updateQuantity = (quantity:number) => {
      props.setState((prevState:stateInterface)=>{
      const removeExisting = prevState.cart.filter((cart:cartProductInterface)=>cart.id!==props.cartItem.id);
        return {
          cart:[{...props.cartItem,quantity},...removeExisting,],
          product:[...prevState.product]
        }
      })
  }
  const removeItem = () => {
     props.setState((prevState:stateInterface)=>{
      const remove = prevState.cart.filter((cart:cartProductInterface)=>cart.id!==props.cartItem.id);
        return {
          cart:remove,
          product:prevState.product
        }
      })
  }
  return (
    <div className={classes.cartItem}>
      <img className={classes.img} src={image} height={70} width={70} />
      <div className={classes.info}>
      <div>  {title}</div>
      <small>{description.split(" ").slice(0,5).join(" ")}..</small>
      <div className={classes.estimation}>
      <div className={classes.price}> ₹ {price} </div>
      <span>X</span>
      <div>{quantity}</div>
      <div className={classes.estimation}>
        <button 
        disabled={quantity===0}
        onClick={()=>updateQuantity(quantity-1)}
        className={classes.btn}>
         -
        </button>
         <div>Qty</div>
        <button 
         onClick={()=>updateQuantity(quantity+1)}
        className={classes.btn}>
          +
        </button>
      <div style={{marginLeft:'15px'}} className={classes.price}> ₹ {priceFormatter((+price*+quantity)+'')} </div>
      <div style={{cursor:'pointer'}} onClick={removeItem}>
      <TrashButton />
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default CartItem