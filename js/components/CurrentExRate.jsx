import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
padding:5px;
`

export default class CurrentExRate extends React.Component{

    render(){
        return <StyledWrapper>
            Current exchange rate: {this.props.bid}
        </StyledWrapper>
    }
}