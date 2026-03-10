import { useCallback, useState } from 'react'
import './App.css'
import Button from './components/Buttons'

function App() {
 const [color, setColor] = useState("black")

 const setBackgroundColor = (bgColor)=>{
     setColor(bgColor)
     localStorage.setItem('color',bgColor)
 }

  return (
      <div className="bg pt-5" style={{backgroundColor : localStorage.getItem('color') || color}}>
         <div className="btns flex justify-center-safe content-center" >
            <Button color="red" method={setBackgroundColor}/>
            <Button color="blue" method={setBackgroundColor}/>
            <Button color="yellow" method={setBackgroundColor}/>
            <Button color="green" method={setBackgroundColor}/>
            <Button color="gray" method={setBackgroundColor}/>
         </div>
      </div>
  )
}

export default App
