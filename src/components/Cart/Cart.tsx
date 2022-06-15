import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
// to use the redux for class components we need to use the connect function
import {connect} from "react-redux";
import {addItem} from "../../Features/Basket/basketSlice";
import { State } from "../../Store";

let cartTextStyle={color: "#1D1F22",textDecoration:"underline",textDecorationColor:"white"}

interface CartsProps {
  addItem:(item:any)=>void;
  image: string;
  name: string;
  price: number;
  company:string;
}
export  class Cart extends React.Component<CartsProps> {
   
    render() {
      let {image, name, price, company ,addItem} = this.props;
        return (
            <Link to="/pdp" onClick={()=>{addItem({image:image,company:company,name:name,price:price})}}><div className="card">{
            }
  <img src={image} alt="product" style={{width:"100%",height:"80%"}}/>
  <div className="container">
    <p style={cartTextStyle}>{company +"\t"}{name}</p>
    <p style={cartTextStyle}>{price}</p>
  </div>
</div></Link>
        
           
        );
    }
}
const mapStateToProps = (state:State) => ({
  items: state.basket.items
});


export default connect(mapStateToProps, { addItem })(Cart);