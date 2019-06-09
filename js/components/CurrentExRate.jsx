import React from 'react';

export default class CurrentExRate extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <div>
                Current exchange rate: {this.props.bid}
            </div>
        </div>
    }
}