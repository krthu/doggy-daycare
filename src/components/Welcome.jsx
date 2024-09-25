import { Link } from "react-router-dom";
import "./Welcome.css";
import LargeButton from "./LargeButton";

const Welcome = () => {

    return (
        <div className="welcome-container">

            <Link to={'/catalog'}>
                <LargeButton 
                    icon={'list'}
                    text={'Catalog'}
                    class={'catalog-link'}
                />
            </Link>
            <Link to={'/catalog'}>

                <LargeButton 
                    icon={'add'}
                    text={'New Dog'}
                    class={'newdog-link'}
                />
            </Link>

        </div>

    )
}

export default Welcome;