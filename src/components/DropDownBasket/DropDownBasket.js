import React from "react";
import'./DropDownBasket.css';
import basket from './Vector.jpg';
import { Link } from "react-router-dom";
import QuantifiedCart from "../Cart/QuantifiedCart.tsx";
export default class DropDownBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });}
  render() {
    return (
    <div className="dropdown">
  <img src={basket} alt="basketLogo"></img>
  <div className="dropdown-content">
        <QuantifiedCart iterations={2}/>
      <div className="viewBagCheckOut">
        <Link to="/CashOut" id="link"><button id="viewBag">View Bag</button></Link>
        <button id="checkOut" >Check Out</button>
      </div>
        
  </div>
    </div>
    );
  }
  }
