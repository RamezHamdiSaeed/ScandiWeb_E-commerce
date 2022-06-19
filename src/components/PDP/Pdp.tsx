import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {addItem} from "../../Features/Basket/basketSlice";
import { State } from "../../Store";
import "./Pdp.css";

interface PdpProps {
  addItem:(item:any)=>void;
  currentItem:{image:string,company:string,name:string, sizes:string[], colors:string[], price:number,description:string};
  image: string;
  name: string;
  company:string;
  sizes:string[];
  colors:string[];
  price: number;
  description: string;
 
}
export class Pdp extends React.Component<PdpProps>{
  constructor(props){
    super(props);
    this.buttonClick=this.buttonClick.bind(this);
    //* to take the chosen size and color from the provided sized and colors to the users
    this.state={
      sizes:"",
      colors:""
    }
  }
 buttonClick(id: string,collection:string[],option:string,selector1:string,selector2:string) {
      //@param id: the id of the button clicked @param collection: the collection of the sizes of the product @param selector1: other buttons to be set to default @param selector2: the button to be set to clicked 
    var element = document.getElementById(id);
    collection.forEach((id: string) => {
      document.getElementById(id)!.className = selector1;
    });
    element!.className = selector2;
    (option === "size")?
      this.setState({sizes:id}):
      this.setState({colors:id});
    console.log(`${this.state}from the buttonClick function`);
}
  render() {
    let {image, company,name ,sizes ,colors, price, description}=this.props.currentItem;
    console.log(image);
    //change the font color and the background color of the button when clicked and set the other size buttons to the default
    
   
    return (
      <div id="container">
        <img id="sideImage1" className="sideImage" src={image} alt="product"/>
        <img id="selectedImage" src={image} alt="product"/>
      <div id="form">
        <h1>{company}</h1>
        <p>{name}</p>
        <h3>size:</h3>
        {sizes.map((size: string)=><button id={size} onClick={()=>this.buttonClick(size,sizes,"size","sizeButtonDefault","sizeButtonClicked")} className="sizeButtonDefault" style={{width: "63px",
height:"45px"}}>{size}</button>)}
        <br/>
          <h3>Color:</h3>
        {colors.map((color: string)=><button id={color} onClick={()=>this.buttonClick(color,colors,"color","colorButtonDefault","colorButtonClicked")} className="sizeButtonDefault" style={{width: "63px",
height:"45px",backgroundColor:color}}></button>)}
        <br/>
        <h3>Price:</h3>
        <p style={{fontWeight:"700",
fontSize:"24px"}}>${price}</p>
        <Link to={"/"}><button id="addToCart"  onClick={()=>{this.props.addItem(this.state);}}>add To Cart</button></Link>
        <p id="description">{description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state:State) => ({
  currentItem: state.basket.currentItem,
  items: state.basket.items,
});


export default connect(mapStateToProps, {addItem})(Pdp);