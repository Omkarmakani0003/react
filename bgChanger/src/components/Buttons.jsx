import '../App.css'

function Button({color,method}){
     return(
        <button className='m-1' style={{backgroundColor : color}} onClick={()=>{ method(color) }}>{color}</button>
     )
}

export default Button