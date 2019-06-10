import React from "react";
import Calculator from "./Calculator.jsx";

export default class Sum extends React.Component{
    render(){
        if(this.props.sum>0){
            return <div>
                {this.props.desc} Euro: {this.props.sum}, PLN: <Calculator amount={this.props.sum} bid={this.props.bid}/>
             </div>
        }
        else{
            return <span></span>
        }
    }
}