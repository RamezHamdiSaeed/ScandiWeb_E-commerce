import React,{Component} from 'react';
import './App.css';
import BaseNavBar from "../Base/BaseNavBar";
import ShowItems from "../PLP/ShowItems/ShowItems";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ShowWomenItems from '../PLP/ShowWomenItems/ShowWomenItems';
import ShowMenItems from '../PLP/ShowMenItems/ShowMenItems';
import CashOut from '../CashOut/CashOut';
import NoPage from '../NoPage/NoPage';
import ShowKidsItems from '../PLP/ShowKidsItems/ShowKidsItems';
import Pdp from '../PDP/Pdp.tsx';
export default class App extends Component {
  render() {
    return (
      <div> <BrowserRouter>
      <Routes>
        <Route  path="/" element={<BaseNavBar />}>
          <Route index element={<ShowItems />} />
          <Route path="showWomenItems" element={<ShowWomenItems />} />
          <Route path="showMenItems" element={<ShowMenItems />} />
          <Route path="showKidsItems" element={<ShowKidsItems />} />
          <Route path="pdp" element={<Pdp />} />
          <Route path="CashOut" element={<CashOut />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter></div>
   
  ); 
    
  }
}


