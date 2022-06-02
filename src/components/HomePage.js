import React from 'react';
import CounterContainer from "./CounterContainer";
import Counter from "./Counter";

class HomePage extends React.Component {
    render(){
        return (
            <CounterContainer>
                <Counter />
            </CounterContainer>
        );
    }
}

export default HomePage;