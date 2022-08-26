export enum Actions {
  ADD_PRODUCTS='ADD_PRODUCTS'
}

export interface productInterface {
    id:number,
    title:string,
    price:string,
    category:string,
    description:string,
    image:string
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
  setState:any
}