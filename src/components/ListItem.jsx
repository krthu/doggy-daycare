import { Link } from "react-router-dom";
import './ListItem.css';
import placeholderImage from '../assets/placeholder2.png';

const ListItem = (props) => {
    const dog = props.dog;
    return (
        <Link to={`/catalog/${dog.chipNumber}`}>

            <li className="list-item">
                <img className="list-image" 
                    src={dog.img} 
                    alt="" onError={(e) => e.target.src = placeholderImage}
                />
                <div className="list-info-container">
                    <p className="list-name">{dog.name}</p>
                    <p>{dog.breed}</p>
                </div>
                <div className={`circle ${dog.present ? 'present' : ''}`}>

                </div>


            </li>

        </Link>
    )
}

export default ListItem;
