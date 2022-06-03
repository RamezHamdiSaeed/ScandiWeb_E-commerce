import React from "react";
import CardsInfo from "./CardsInfo.json";

export default class Carts extends React.Component{
  constructor() {
    super();
    this.cartsInfo = CardsInfo;
  }

  showItems() {
  return  this.cartsInfo;
 ;
}
}