import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color, setColor] = useState("black")

 const setbg = (bgColor)=>{
     setColor(bgColor)
     localStorage.setItem('color',bgColor)
 }

  return (
      <div className="bg pt-5" style={{backgroundColor : localStorage.getItem('color') || color}}>
         <div className="btns flex justify-center-safe content-center" >
            <button className='m-1' style={{backgroundColor : 'red'}} onClick={()=>{ setbg('red') }}>red</button>
            <button className='m-1' style={{backgroundColor : 'blue'}} onClick={()=>{ setbg('blue') }}>blue</button>
            <button className='m-1' style={{backgroundColor : 'yellow', color:'black'}} onClick={()=>{ setbg('yellow') }}>yellow</button>
            <button className='m-1' style={{backgroundColor : 'green'}} onClick={()=>{ setbg('green') }}>green</button>
            <button className='m-1' style={{backgroundColor : 'gray'}} onClick={()=>{ setbg('gray') }}>gray</button>
         </div>
      </div>
  )
}

export default App
