import { Link } from "react-router-dom";

const Welcome = () =>{

    return (
        <div className="welcome-container">
            <h3>Welcome to</h3>
            <h2>Happy Tails Retreat!</h2>
            <Link to={'/catalog'}>
                <button>See the dogs!</button>
            </Link>
            
        </div>

    )
}

export default Welcome;