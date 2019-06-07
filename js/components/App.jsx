import React from "react";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        fetch('http://api.nbp.pl/api/exchangerates/rates/A/EUR/').then(resp => resp.text()).then(exRate=>{
            console.log(exRate);
        });
    }    
    render(){
        return <div>
            Hello World!
        </div>
    }
}