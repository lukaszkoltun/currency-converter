import React from "react";

export default class Calculator extends React.Component{
    calcAndRound = (multi1, multi2) =>{
        let n = (multi1*multi2);
        const factor = Math.pow(10, 3);
        n = Math.round(Math.round(n*factor)/10);
        return n/(factor/10);
    } 
    render(){
        return <span>
            {this.calcAndRound(this.props.bid, this.props.amount)}
        </span>
    }
}