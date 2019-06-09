import React from "react";
import ListElement from "./ListElement.jsx"

export default class List extends React.Component{
    
    render(){
        return <ul>
            {this.props.list.map( element => <ListElement title={element.title} amount={element.amount} bid={this.props.bid}/>)}
        </ul>
    }
}