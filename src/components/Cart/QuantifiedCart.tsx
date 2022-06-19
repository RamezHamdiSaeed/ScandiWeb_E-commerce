import React from "react";
import "./QuantifiedCart.css";
import { connect } from "react-redux";
import { State } from "../../Store";

interface QuantifiedCartProps {
items: any[];
//! the below props are from the developer
iterations: number;
}
export  class QuantifiedCart extends React.Component<QuantifiedCartProps> {
  constructor(props) {
    //* we need to return number of quantified carts according to the developer
    super(props);
    this.state = {quantity: 1};
  }
    render() {
      let {items, iterations} = this.props;
      let sliced:any[] =[];
      for (let i=0; i<iterations; i++){if (i < items.length) {
         sliced[i]= items[i];
      }
      break;
       }
        return (<>{(sliced.length>0) && sliced.map((item: any) => (<div>
            <h1>{item.company}</h1>
            </div>))}</>);
           
       
        }
    }

const mapStateToProps = (state:State) => ({
items: state.basket.items,
});


export default connect(mapStateToProps)(QuantifiedCart);