import React from "react";
import "./Pagination.css";

export default class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.noOfCarts=this.props.carts.length;
        this.noOfPages=Math.ceil(this.noOfCarts/6);
        this.state={startIndex:(this.props.currentPage-1)*6};
        this.goToPage=this.goToPage.bind(this);
        this.goNextPage=this.goNextPage.bind(this);
        this.goPrevPage=this.goPrevPage.bind(this);
    }
 goToPage(page){
     if(page>0 && page<=this.noOfPages){
        this.setState({startIndex:(page-1)*6});
        // this.props.setState({currentPage:page});
        this.props.updateCurrentPage({currentPage:page});
        
        this.forceUpdate();}
    }
 goNextPage(){
        this.goToPage(this.props.currentPage+1);
    }
    goPrevPage(){
        this.goToPage(this.props.currentPage-1);
    }
    getPaginationButtons(){
        let paginationButtons=[];
        for(let i=1;i<=this.noOfPages;i++){
            paginationButtons.push(<button onClick={()=>{this.goToPage(i)}}>{i}</button>);
        }
        return paginationButtons;
    }
  
    render(){
        return(<div class="pagination">
                    {this.props.currentPage!==1 && <button onClick={this.goPrevPage}>&laquo;</button>} 
                    {this.getPaginationButtons()}
                    {this.props.currentPage < this.noOfPages && <button onClick={this.goNextPage} >&raquo;</button>}
                </div>
    );
    }
}