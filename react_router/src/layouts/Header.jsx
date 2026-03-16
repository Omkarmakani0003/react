import { NavLink,Link,useLocation } from "react-router-dom"
import '../App.css'

function Header(){
    const currentPage = useLocation()
    return (
        <>
            <header>
            <h1>{currentPage.pathname.split('/')[1]}</h1>
            </header>

            <nav>
                <NavLink to="/home/omkar">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact" >Contact</NavLink>
            </nav>
        </>
    )
}

export default Header