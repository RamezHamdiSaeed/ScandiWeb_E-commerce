import React from "react";
import'./DropDownBasket.css';
import basket from './Vector.jpg';
import { Link } from "react-router-dom";
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
        <div>
            <h3>this is first item</h3>
        </div>

        <div>
            <h3>this is second item</h3>
        </div>
      <div className="viewBagCheckOut">
        <button id="viewBag">View Bag</button>
        <Link to="/CashOut" id="link"><button id="checkOut" >Check Out</button></Link>
      </div>
        
  </div>
    </div>
    );
  }
  }
