import React from "react";
import CurrentExRate from "./CurrentExRate.jsx";
import Converter from "./Converter.jsx";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bid: "wait..."
        }
    }
    componentDidMount(){
        fetch('http://api.nbp.pl/api/exchangerates/rates/C/EUR/').then(resp => {
            if(resp.ok) return resp.json();
            else throw new Error('Network error!'); 
        }).then(json => this.setState({"bid": json.rates[0].bid }));
    }    
    render(){
        return <div>
           <CurrentExRate bid = {this.state.bid}/>
           <Converter bid = {this.state.bid}/>
        </div>
    }
}