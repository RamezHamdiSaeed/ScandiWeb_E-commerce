import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
let cartTextStyle={color: "#1D1F22",textDecoration:"underline",textDecorationColor:"white"}

export default class Cart extends React.Component {
   
    render() {
        return (
            <Link to="/pdp"><div class="card">
  <img src={this.props.image} alt="product" style={{width:"100%",height:"80%"}}/>
  <div class="container">
    <p style={cartTextStyle}>{this.props.company +"\t"}{this.props.name}</p>
    <p style={cartTextStyle}>{this.props.price}</p>
  </div>
</div></Link>
        
           
        );
    }
}