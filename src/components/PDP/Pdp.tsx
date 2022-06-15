import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../Features/Basket/basketSlice";
import { State } from "../../Store";


interface PdpProps {
  items: any;
  image: string;
  name: string;
  price: number;
  company:string;
}
export class Pdp extends React.Component<PdpProps>{
  render() {
    return (
      <div>
        <h1>Pdp</h1>
        <p>{this.props.items[0]["name"]}</p>
      </div>
    );
  }
}

const mapStateToProps = (state:State) => ({
  items: state.basket.items
});


export default connect(mapStateToProps, { addItem })(Pdp);