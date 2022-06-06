import React, {useState} from 'react';
import './CounterContainer.css';
import Counter from './Counter';
import { nanoid } from 'nanoid';
import Context from './Context';

function CounterContainer(){
  let [id,setId] = useState(0);
  
  
  const bodyWidth = document.querySelector("body").clientWidth;

  const initialCounters = [];
  const counterWidth = 330;
  const initialCounterNo = parseInt(bodyWidth / counterWidth) - 1;
  for (let index = 0; index < initialCounterNo; index++) {
    initialCounters.push(<Counter id={id} key={nanoid()}/>)
  }

  const styles = {
    marginLeft: (bodyWidth % counterWidth) / 2,
  }

  const [state, setState] = useState({counters: initialCounters });
  return(
    <Context.Provider value={[state, setState]}>
    <div id="CounterContainer" className="CounterContainer" style={styles}>
      {state.counters}
      <div id="DummyBox" className="CounterBox count-btn" onClick={()=>{setId(id+1);setState({counters: [...state.counters,<Counter id={id} key={nanoid()}/>]})}}>+</div>
    </div>
    </Context.Provider>
  )
  
}

export default CounterContainer;
