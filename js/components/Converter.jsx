import React from "react";

export default class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            amount: 0
        }
    }
    handleValueChange = (event) =>{
        this.setState({amount: event.target.value});
        console.log(this.state.amount);
    }
    render(){
        return <div>
            <input type="number" name="count" min="1" value={this.state.amount} onChange={this.handleValueChange}/>
            
        </div>
    }
    }