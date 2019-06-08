import React from 'react';

export default class CurrentExRate extends React.Component{
    render(){
        return <div>
            <div>
                We sell {this.props.sell}
            </div>
            <div>
                We buy {this.props.buy}
            </div>
        </div>
    }
}