import { cartProductInterface,  propsCard, stateInterface } from '../../interfaces/cart.interface'
import { descShrinker, priceFormatter, titleShrinker } from '../../utils/formatter';
import classes from './card.module.css';

const Card = (propsCard:propsCard) => {
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
          cart: [{...prod,quantity:1,title:titleShrinker(prod.title),description:descShrinker(prod.description),price:priceFormatter(prod.price)},...prevState.cart]
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
          <div className={classes.store}>
            <small>{prod.rating.rate} ⭐</small>
            <div className={classes.price}> ₹ {prod.price}</div>
            <small>stock {prod.rating.count}</small>
          </div>
          </div>
        </div>
        <button onClick={()=>AddToCart()} className={classes.button}>Add To Cart</button>
      </div>
    </div>
  )
}

export default Card