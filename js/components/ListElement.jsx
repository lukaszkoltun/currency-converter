import React from "react";
import Calculator from "./Calculator.jsx";

export default class ListElement extends React.Component{
    render(){
        return <li>
            Title:{this.props.title} 
            Euro: {this.props.amount}
            PLN: <Calculator bid={this.props.bid} amount={this.props.amount}/>
        </li>
    }
}