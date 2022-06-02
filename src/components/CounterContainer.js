import React, {useState} from 'react';
import './CounterContainer.css';
import Counter from './Counter';
import { nanoid } from 'nanoid';
import Context from './Context';

function CounterContainer(){
  let [id,setId] = useState(0);
 
  const [state, setState] = useState({counters: [<Counter id={id} key={nanoid()}/>]});
  return(
    <Context.Provider value={[state, setState]}>
    <div className="CounterContainer">
      {state.counters}
      <div id="DummyBox" className="CounterBox count-btn" onClick={()=>{setId(id+1);setState({counters: [...state.counters,<Counter id={id} key={nanoid()}/>]})}}>+</div>
    </div>
    </Context.Provider>
  )
  
}

export default CounterContainer;
