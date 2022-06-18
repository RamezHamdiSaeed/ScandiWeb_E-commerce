import React from "react";
import CardsInfo from "./CardsInfo.json";
import Cart from "../components/Cart/Cart.tsx";

export default class Carts extends React.Component{
  constructor() {
    super();
    this.cartsInfo = CardsInfo;
    this.carts=[];
  }

  showItems() {
   this.cartsInfo.forEach(element => {
       
                 this.carts.push(<Cart image={element.image} company={element.company} name={element.name} sizes={element.sizes} colors={element.colors} price={element.price} />);
                })
  return  this.carts;
 ;
}
//* we used it for filtering according to categories only
  showReducedItems(property,value) {
   this.cartsInfo.forEach(element => {
     if (element[property]===value)
                 {
                   this.carts.push(<Cart image={element.image} company={element.company} name={element.name} sizes={element.sizes} colors={element.colors} price={element.price}/>);
                  }

                })
  return  this.carts;
 ;
}
}