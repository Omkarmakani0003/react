import { useParams } from "react-router-dom"

function Home(){
    const {username} = useParams()
    return (
    <>      
        <div className="container">
            <h2>Welcome, {username}</h2>
            <p>This is the home page of our website.</p>
        </div>
    </>
    )
}

export default Home