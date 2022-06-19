import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
// to use the redux for class components we need to use the connect function
import {connect} from "react-redux";
import {changeCurrentItem} from "../../Features/Basket/basketSlice";
import { State } from "../../Store";

let cartTextStyle={color: "#1D1F22",textDecoration:"underline",textDecorationColor:"white"}

interface CartsProps {
  changeCurrentItem:(item:any)=>void;
  currency:string;
  image: string;
  company:string;
  name: string;
  sizes:string[];
  colors:string[];
  price: number;
  description: string;
  quantity:number;
  

}
export  class Cart extends React.Component<CartsProps> {
   
    render() {
      let {image, name, price, company, colors, sizes, quantity,description, changeCurrentItem, currency} = this.props;
        return (
            <Link to="/pdp" onClick={()=>{changeCurrentItem({image,name,price,company,colors,sizes,quantity,description});}}><div className="card">{
            }
  <img src={image} alt="product" style={{width:"100%",height:"80%"}}/>
  <div className="container">
    <p style={cartTextStyle}>{company +"\t"}{name}</p>
    <p style={cartTextStyle}>{currency}{price}</p>
  </div>
</div></Link>
        
           
        );
    }
}
const mapStateToProps = (state:State) => ({
currency: state.basket.currency,
});


export default connect(mapStateToProps, {changeCurrentItem})(Cart);