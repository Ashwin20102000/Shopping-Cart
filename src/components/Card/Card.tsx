import { cartProductInterface, productInterface, stateInterface } from '../../interfaces/cart.interface'
interface propsCard {
prod:productInterface,
setState:any,
cart:[cartProductInterface]
}
import classes from './card.module.css';

const Card = (propsCard:propsCard) => {
  const titleShrinker = (title:string) => {
  return title.split(" ").slice(0,5).join(" ")
}

const descShrinker = (desc:string) => {
  return desc.split(" ").slice(0,7).join(" ")
}
  const {prod} = propsCard;
  const AddToCart = () => {
    let isProductExist = propsCard.cart.filter((cart:cartProductInterface)=>cart.id===prod.id);
    if(isProductExist.length){
      isProductExist[0].quantity+=1;
      const removeExisting = propsCard.cart.filter((cart:cartProductInterface)=>cart.id!==prod.id);
      propsCard.setState((prevState:stateInterface)=>{   
        return {
          product:prevState.product,
          cart: [isProductExist[0],...removeExisting]
        }
      })  
    }
    else{
      propsCard.setState((prevState:stateInterface)=>{   
        return {
          product:prevState.product,
          cart: [{...prod,quantity:1,title:titleShrinker(prod.title),description:descShrinker(prod.description),price:parseFloat(prod.price).toFixed(2)},...prevState.cart]
        }
      })
    }
  }
  return (
    <div>
      <div className={classes.card}>
        <span className={classes.category}>{prod.category}</span>
        <div className="card-img">
          <img className={classes.img} src={prod.image} alt="" />
        </div>
        <div className={classes.info}>
          <div className={classes.details}>
          <h6 className={classes.title}>{titleShrinker(prod.title)}</h6>
          <p className={classes.title}>{descShrinker(prod.description)}</p>
          <div className={classes.price}> ₹ {prod.price}</div>
          </div>
        </div>
        <button onClick={()=>AddToCart()} className={classes.button}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card