import React from "react";
import "./ShowItems.css";
import Carts from "../../../backEnd/CartsInfo.js";
import Cart from "../../Cart/Cart.js";
const items = new Carts().showItems();
export default class ShowItems extends React.Component {

fetchItems(){
   let carts=[];
   items.forEach(element => {
       
                 carts.push(<Cart image={element.image} company={element.company} name={element.name} price={element.price}/>);
                })
           return carts; }
    render() {
        return(<div style={{marginLeft:"-15px"}}>
            <h1 style={{marginLeft:"30px"}}>All Items</h1>
            <div id="gridForCarts">

                {this.fetchItems().map(item => item)}
            </div>
        </div>) 
        
               
        }
}