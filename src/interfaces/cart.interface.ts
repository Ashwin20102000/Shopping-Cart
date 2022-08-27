export enum Actions {
  ADD_PRODUCTS='ADD_PRODUCTS'
}

interface ratingCount {
  count:number,
  rate:number
}
export interface productInterface {
    id:number,
    title:string,
    price:string,
    category:string,
    description:string,
    image:string,
    rating:ratingCount
}
export interface cartProductInterface extends productInterface {
  quantity:number;
}

export interface stateInterface {
  cart:[cartProductInterface] | [],
  product:[productInterface] | []
}

export interface propsInterface  {
  data : stateInterface | any,
  setState:(state:stateInterface)=>void
}


export interface propsCard {
  prod:productInterface,
  setState:any,
  cart:[cartProductInterface]
}