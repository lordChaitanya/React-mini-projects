import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addition=()=>{
      if(count<100){
        //what will be the output? will it increase it by 5 as I have written setCount 5 times
        //simple answer is NO.
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        //This will only increase the count by 1 because
        //React batches the state updates for performance reasons.
        //When you call setCount multiple times in a single event handler, React will only apply the last update.
        //To achieve the desired effect of incrementing the count by 5,YOU NEED TO USE THE FUNCTIONAL UPDATE FORM OF setState.
        //which means that setCount() excepts a callback function that receives the previous state as an argument and returns the new state.
        
        setCount((prevCountervalue)=> prevCountervalue+1);
        setCount((prevCountervalue)=> prevCountervalue+1);
        setCount((prevCountervalue)=> prevCountervalue+1);
        setCount((prevCountervalue)=> prevCountervalue+1);
        setCount((prevCountervalue)=> prevCountervalue+1);
      }
      else{
        alert("Can't go above 100")
      }

  }

  const subtraction=()=>{
    if(count>0){
      setCount(count-1);
    }
    else {
      alert("Can't go below 0");
    }

  }



  return (
    <>
    <h1>Counter: {count}</h1>
    <button onClick={addition}>ADD</button>
    <button onClick={subtraction}>SUB</button>
    </>
  )
}

export default App
