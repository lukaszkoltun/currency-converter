import React from "react";
import Calculator from "./Calculator.jsx";
import List from "./List.jsx";
import SumAndBiggest from "./SumAndBiggest.jsx";

export default class Converter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            amount: "",
            list: [],
            sum: 0,
            biggest: 0
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
            this.setState({list: [...this.state.list, {amount: this.state.amount, title: this.state.title}].sort(), amount: "", title: "", sum: this.state.sum+parseInt(this.state.amount)});
            if(this.state.amount>this.state.biggest){
                this.setState({biggest: this.state.amount});
            }
        }
    }
    deleteList = () =>{
        this.setState({list: [], sum: 0, biggest:0});
    }

    
    render(){
        return <div>
            <input type="text" name="title" placeholder="Tilte of transaction..." value={this.state.title} onChange={this.titleValueChange}/>
            <input type="number" name="count" min="0" placeholder="Amount..." value={this.state.amount} onChange={this.amountValueChange}/>
            <Calculator amount={this.state.amount} bid={this.props.bid}/>
            <button type="button" onClick={this.addToList}>Add to list</button>
            <List list = {this.state.list} bid = {this.props.bid} delete={this.deleteList}/>
            <SumAndBiggest desc="All: " sum={this.state.sum} bid={this.props.bid}/>
            <SumAndBiggest desc="The biggest: " sum={this.state.biggest} bid={this.props.bid}/>
        </div>
    }
    }