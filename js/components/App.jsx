import React from "react";
import CurrentExRate from "./CurrentExRate.jsx";
import Converter from "./Converter.jsx";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rate: {"bid": 'Wait...', "ask": 'Wait...'}
        }
    }
    componentDidMount(){
        fetch('http://api.nbp.pl/api/exchangerates/rates/C/EUR/').then(resp => {
            if(resp.ok) return resp.json();
            else throw new Error('Network error!'); 
        }).then(json => this.setState({ rate: {"bid": json.rates[0].bid, "ask": json.rates[0].ask }}));
    }    
    render(){
        return <div>
           <CurrentExRate sell={this.state.rate.ask} buy={this.state.rate.bid}/>
           <Converter/>
        </div>
    }
}
