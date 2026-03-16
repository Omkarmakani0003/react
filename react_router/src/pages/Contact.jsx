import { NavLink,Link } from "react-router-dom"
function Contact(){
    return (
        <>
           <div className="container">
                <h2>Contact Form</h2>
                <form action=""/>
                    
                    <label>Name:</label><br/>
                    <input type="text"/><br/><br/>

                    <label>Email:</label><br/>
                    <input type="email"/><br/><br/>

                    <label>Message:</label><br/>
                    <textarea rows="5"></textarea><br/><br/>

                    <button type="submit">Send</button>
            </div>
        </>
    )
}
export default Contact