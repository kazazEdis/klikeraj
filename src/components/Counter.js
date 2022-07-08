import './Counter.css';
import React, {useContext, useState} from "react";
import Context from "./Context";
import minusIcon from "../img/Minus.svg";
import plusIcon from "../img/Plus.svg";
import resetIcon from "../img/ResetButton.svg";
import exitIcon from "../img/X.svg";



function Counter(props) {
  const [context, setContext] = useContext(Context);
  const [counter, setCounter] = useState(0);
  const [title, setTitle] = useState("Title");
  
  
  const selectAll = (e)=>{e.target.select();}

  const validateTitle = (e)=>{
    switch(e.target.value.length) {
        case 9:
          e.target.style.fontSize = "36px";
          e.target.style.fontWeight = "650";
          break;
        case 10:
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
    let value = e.target.value ? parseInt(e.target.value) : 0;
    setCounter(value);
  }

  const handleDestroyCounter = () => {
    let newCounters = context.counters.filter(counter => counter.props.id !== props.id);
    setContext({counters: newCounters});
  }


  return (
      <div className="CounterBox">
        <button id="destroyCounter" className="count-btn" type="button" onClick={handleDestroyCounter}>
          <img src={exitIcon} style={{width: "1rem"}} alt='X' />
        </button>
        <button className="count-btn" type="button" onClick={handleDecrement}>
          <img src={minusIcon} style={{width: "2rem"}} alt='-' />
        </button>
        <input type="number" name="counter" className="counter" step="1" value={counter} onClick={selectAll} onChange={handleCounterChange}/>
        <button className="count-btn" type="button" onClick={handleIncrement}>
          <img src={plusIcon} style={{width: "2rem"}} alt='+' />
        </button>
        <input name="titleBox" className="title" type="text" maxLength="15" value={title} onClick={selectAll} onChange={validateTitle}></input>
        <br/>
        <button type="button"  className="count-btn reset-btn" onClick={()=>setCounter(0)}>
          <img src={resetIcon} style={{height: "1.5rem"}} alt='Reset' />
        </button>
      </div>
  );

};

export default Counter;