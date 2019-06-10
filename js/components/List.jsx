import React from "react";
import ListElement from "./ListElement.jsx"


export default class List extends React.Component{
    deleteButton = () =>{
        if(typeof this.props.delete === "function"){
            this.props.delete();
        }
    }

    render(){
        return <div>
            <ul>
                {this.props.list.map( (element , index) => <ListElement title={element.title} amount={element.amount} bid={this.props.bid} key={index} />)}
             </ul>
            <button type="button" onClick={this.deleteButton}>Delete</button>
        </div>
    }
}