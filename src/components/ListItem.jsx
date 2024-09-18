import { Link } from "react-router-dom";
import './ListItem.css'

const ListItem = (props) => {
    const dog = props.dog;
    return (
        <Link to={`/catalog/${dog.chipNumber}`}>

            <li className="list-item">
                <img className="list-image" src={dog.img} alt="" />
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
