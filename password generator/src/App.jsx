import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [range, setRange] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [char, setSpeChar] = useState(false)
  const [password, setPassword] = useState("")

  const rangeChanger = (value)=>{
      setRange(value)
  }

  const NumbersAllow = ()=>{
    if(numbers){
      setNumbers(false)
    }else{
      setNumbers(true)
    }
  }

  const ScharAllow = ()=>{
    if(char){
      setSpeChar(false)
    }else{
      setSpeChar(true)
    }
  }

  const passwordGenerate = useCallback(()=>{
      let pass = ''

      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numbers) str += '1234567890'
      if(char) str += "~!@#$%^&*(){}[]"

      for(let i = 1; i < range; i++){
         let random = Math.floor(Math.random() * str.length) 
         pass += str[random]
      } 

    setPassword(pass) 
      
  },[range,numbers,char])

  useEffect(()=>{
    passwordGenerate()
  },[range,numbers,char])
  
  let copyRef = useRef('')

  const copy = async()=>{
    copyRef.current?.select()
    await window.navigator.clipboard.writeText(password)
  }
  
  return (
    <div className="main">
      <div className="input">
        <input type="text" value={password} ref={copyRef}/>
        <button onClick={copy}>Copy</button>
      </div>
      <div className="controllers">
        <label>{range}</label>
        <input type="range" min='8' max='50' value={range} onChange={(e)=>{ rangeChanger(e.target.value) }}/>
        <input type="checkbox"  onChange={(e)=>{ NumbersAllow(e.target.value) }}/>
        <label>Numbers</label>
        <input type="checkbox" value={char} onChange={(e)=>{ ScharAllow(e.target.value) }}/>
        <label>Spacial</label>
      </div>
    </div>
  )
}

export default App
