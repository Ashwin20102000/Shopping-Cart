export const titleShrinker = (title:string) => {
  return title.split(" ").slice(0,5).join(" ")
};

export const descShrinker = (desc:string) => {
  return desc.split(" ").slice(0,9).join(" ")
};

export const priceFormatter = (price:string) => {
  return parseFloat(price).toFixed(2);
} 
