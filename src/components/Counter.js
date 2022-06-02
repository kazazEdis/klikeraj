import './Counter.css';
import React, {useContext, useState} from "react";
import Context from "./Context";


function Counter(props) {
  const [context, setContext] = useContext(Context);
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("Title");
  
  
  const validateTitle = (e)=>{
    switch(e.target.value.length) {
        case 9:
          e.target.style.fontSize = "36px";
          e.target.style.fontWeight = "650";
          break;
        case 12:
          e.target.style.fontSize = "26px";
          e.target.style.fontWeight = "750";
          break;
        default:
    }
    setTitle(e.target.value);
  }

  const validateValue = (value)=>{
    if(value < 0) {
      value = 0;
    }
    if(value > 999) {
        value = 999;
    }
    return value;
  }

  const handleDecrement = () => {
      let value = counter - 1;
      value = validateValue(value)
      setCounter(value);
  }

  const handleIncrement = () => {
    let value = counter + 1;
    value = validateValue(value)
    setCounter(value);
  }

  const handleCounterChange = (e) => {
    let value = (e.target.value ? parseInt(e.target.value) : 0);
    this.setState({counter: value});
  }

  const handledestroyCounter = () => {
    let newCounters = context.counters.filter(counter => counter.props.id !== props.id);
    setContext({counters: newCounters});
  }


  return (
      <div className="CounterBox">
        <button id="destroyCounter" className="count-btn" type="button" onClick={handledestroyCounter}>x</button>
        <button className="count-btn" type="button" onClick={handleDecrement}>-</button>
          <input type="number" name="counter" className="counter" step="1" value={counter} onChange={handleCounterChange}/>
        <button className="count-btn" type="button" onClick={handleIncrement}>+</button>
        <input name="titleBox" className="title" type="text" maxLength="15" value={title} onChange={validateTitle}></input>
        <br/>
        <button type="button" onClick={()=>setCounter(0)}>Reset</button>
      </div>
  );

};

export default Counter;