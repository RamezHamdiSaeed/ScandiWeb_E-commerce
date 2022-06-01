import React from "react";
import'./DropDownButton.css';
export default class DropDownButton extends React.Component {
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
    <a href="#" style={{border:"none"}}>$ USD</a>
    <a href="#" style={{border:"none"}}>€ EUR</a>
    <a href="#" style={{border:"none"}}>¥ JPY</a>
  </div> </div>
    );
  }
  }
