import React from "react";
import styled, {createGlobalStyle} from 'styled-components';
import CurrentExRate from "./CurrentExRate.jsx";
import Converter from "./Converter.jsx";

const GlobalStyle = createGlobalStyle`
  body{
    background: indigo;
    display: flex;
    justify-content: center;
    
  }
  *{
    padding: 0;
    margin: 0;
    position: relative;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  *, *::before, *::after{
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  width: 0,5rem; 
  margin: 0 auto;
  position: relative;
`;


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
            <GlobalStyle/>
                <StyledWrapper>
                    <CurrentExRate bid = {this.state.bid}/>
                    <Converter bid = {this.state.bid}/>
                </StyledWrapper>
        </div>
    }
}