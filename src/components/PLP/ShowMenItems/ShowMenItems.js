import React from "react";
import "./ShowMenItems.css";
import Pagination from "../Pagination/Pagination";
import Carts from "../../../backEnd/CartsInfo.js";
export default class ShowItems extends React.Component {
    constructor(){
        super();
        //* we need to change this jsx element state  by its pagination state
        this.state={currentPage:1};
        this.update=this.update.bind(this);
    }
    update(nexState){
        this.setState(nexState);
    }
    render() {
        const carts =new Carts().showReducedItems("category","Men");
        const activeCarts = carts.slice((this.state.currentPage-1)*6,this.state.currentPage*6);
        return(<div style={{marginLeft:"-15px"}}>
            <h1 style={{marginLeft:"30px"}}>Men</h1>
            <div id="gridForCarts">

                {activeCarts.map(item => item)}
            </div>
            <Pagination carts={carts} currentPage={this.state.currentPage} updateCurrentPage={this.update}/>
        </div>) 
        
               
        }
}