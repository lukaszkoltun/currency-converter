import React from "react";
import styled from 'styled-components';
import Calculator from "./Calculator.jsx";

const Elem = styled.li`
    margin-bottom: 0.5em;
    list-style-type: none;
    background: lightgrey;
    color: indigo;
    border: 1px solid pink;
    border-radius: 0.5em;
    width: 0,5em

    p{
        color: indigo;
    }
    
`;

export default class ListElement extends React.Component{
   
    render(){
        return <Elem key={this.props.key}>
            <p>Title:{this.props.title}</p>   
            <p>Euro: {this.props.amount}</p>
            PLN: <Calculator bid={this.props.bid} amount={this.props.amount}/>
        </Elem>
    }
}