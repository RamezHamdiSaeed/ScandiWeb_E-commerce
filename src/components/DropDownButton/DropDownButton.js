import React from "react";
import {connect} from "react-redux";
import {changeCurrency} from "../../Features/Basket/basketSlice";
import'./DropDownButton.css';

export class DropDownButton extends React.Component {
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
  <button className="dropbtn">$ <sub>^</sub></button>
  <div className="dropdown-content" style={{width:"auto",marginRight:"50px"}}>
    <button onClick={()=>this.props.changeCurrency("$")} style={{border:"none"}}>$ USD</button>
    <button onClick={()=>this.props.changeCurrency("€")} style={{border:"none"}}>€ EUR</button>
    <button onClick={()=>this.props.changeCurrency("¥")} style={{border:"none"}}>¥ JPY</button>
  </div> </div>
    );
  }
  }
const mapStateToProps = (state) => ({
  currentItem: state.basket.currentItem,
  items: state.basket.items,
});


export default connect(mapStateToProps, {changeCurrency})(DropDownButton);