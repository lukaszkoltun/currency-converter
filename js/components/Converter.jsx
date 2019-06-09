import React from "react";
import Calculator from "./Calculator.jsx";
import List from "./List.jsx";

export default class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            amount: "",
            list: []
        }
    }
    amountValueChange = (event) =>{
        this.setState({amount: event.target.value});
    }
    titleValueChange = (event) =>{
        this.setState({title: event.target.value});
    }
    addToList = () => {
        if(this.state.amount <= 0 || this.state.amount == "e"){
            alert("Wrong input!");
        }
        else{
            this.setState({list: [...this.state.list, {amount: this.state.amount, title: this.state.title}].sort(), amount: "", title: ""});
        }
    }
    deleteList = () =>{
        this.setState({list: []});
    }

    
    render(){
        return <div>
            <input type="text" name="title" placeholder="Tilte of transaction..." value={this.state.title} onChange={this.titleValueChange}/>
            <input type="number" name="count" min="0" placeholder="Amount..." value={this.state.amount} onChange={this.amountValueChange}/>
            <Calculator amount={this.state.amount} bid={this.props.bid}/>
            <button type="button" onClick={this.addToList}>Add to list</button>
            <List list = {this.state.list} bid = {this.props.bid} delete={this.deleteList}/>
        </div>
    }
    }