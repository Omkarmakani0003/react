import { useState } from 'react'
import './App.css'

function Counter() {
   let [counts,setCounts] = useState(0)
   
   const increase = ()=>{
      if(counts < 10){
        setCounts(counts + 1)
      }
   }
   const decrease = ()=>{
    if(counts != 0){
      setCounts(counts - 1)
    }
   }
    return (
      <div className="counter">
        <button onClick={decrease}>-</button>
        <h3 className="count">Count : {counts}</h3>
        <button onClick={increase}>+</button>
      </div>
    )
}

export default Counter
