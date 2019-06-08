import React from "react";
import Calculator from "./Calculator.jsx";

export default class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0
        }
    }
    handleValueChange = (event) =>{
        this.setState({amount: event.target.value});
    }
    render(){
        return <div>
            <input type="number" name="count" min="0" value={this.state.amount} onChange={this.handleValueChange}/>
            <Calculator amount={this.state.amount} bid={this.props.bid}/>
            
        </div>
    }
    }