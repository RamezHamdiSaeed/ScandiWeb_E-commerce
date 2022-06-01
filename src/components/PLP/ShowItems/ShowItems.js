import React from "react";
import CartsInfo from "./CartsInfo" ;
export default class ShowItems extends React.Component {
    render() {
        return(<div>
            <h1>All Items</h1>
            <div>
                {CartsInfo["Nike"]["sweatPants"]["price"]}
            </div>
        </div>) 
        
               
        }
}