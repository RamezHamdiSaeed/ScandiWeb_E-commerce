import React from "react";
import CardsInfo from "./CardsInfo.json";
import Cart from "../components/Cart/Cart";

export default class Carts extends React.Component{
  constructor() {
    super();
    this.cartsInfo = CardsInfo;
    this.carts=[];
  }

  showItems() {
   this.cartsInfo.forEach(element => {
       
                 this.carts.push(<Cart image={element.image} company={element.company} name={element.name} price={element.price}/>);
                })
  return  this.carts;
 ;
}
}