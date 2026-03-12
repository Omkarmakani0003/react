import { useState } from "react"
import useTheme from "../context/themeContext"

function ToggleButton(){
   const {themeMode,lightMode,darkMode} = useTheme()
   
   const switchBtn = (e)=>{
      
      if(themeMode === 'dark'){
            lightMode() 
      }else{
            darkMode()  
      }
   }

    // const switchBtn = (e)=>{
    //     const darkModeStatus = e.currentTarget.checked
    //     if (darkModeStatus) {
    //         darkMode()
    //     } else {
    //         lightMode()
    //     }
    // }

    return(
        <button className="theme-btn" onClick={switchBtn}>
            Toggle Theme
        </button>
        // <input
        //     type="checkbox"
        //     value=""
        //     className="sr-only peer"
        //     onChange={switchBtn}
        //     checked={themeMode === "dark"}
        // />
    )
}

export default ToggleButton