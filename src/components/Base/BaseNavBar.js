import React,{Component} from "react";
import {Link,Outlet} from "react-router-dom";
import"./BaseNavBar.css";
import DropDownButton from "../DropDownButton/DropDownButton";
import navLogo from "./navLogo.png";
import DropDownBasket from "../DropDownBasket/DropDownBasket";

export default class BaseNavBar extends Component{ 
render(){
  //ToDo:change the current rout or navigator class className to active or create new className with assigned "value"
  let storeAndminiCart={float:"right",marginRight:"20px"};
  return (<> 
        <nav><ul>
            <li><Link to="/ShowWomenItems" className="Link">Women</Link></li>
            <li><Link to="/ShowMenItems" className="Link">Men</Link></li>
            <li><Link to="/ShowKidsItems" className="Link">Kids</Link></li>
            <li id="#rightAbout" style={Object.assign({},storeAndminiCart,{marginTop:"15px"})}><DropDownBasket/></li>
            <li style={storeAndminiCart}><DropDownButton/></li>
            <li style={{position:"absolute",right:"48vw"}}><Link to="/" ><img id="linkableLogo" src={navLogo} alt="companyLogo" style={{width:"30px",height:"30px"}}></img></Link></li>
          </ul></nav>
         
          <Outlet />
          </>
          );
        }
}