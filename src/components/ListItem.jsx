import { Link } from "react-router-dom";
import './ListItem.css';
import placeholderImage from '../assets/placeholder2.png';

const ListItem = (props) => {
    
    const dog = props.dog;

    console.log(props.dog.present);

    const getDogPresentColor = (value) => {
        if (value === true){
            return 'present'
        } else if (value === false){
            return ''
        } else {
            return 'varning'
        }
    }

    return (
        <Link to={`/catalog/${dog.chipNumber}`}>

            <li className="list-item">
                <img className="list-image" 
                    src={dog.img ?? './placeholder2.jpg'} 
                    alt="" onError={(e) => e.target.src = placeholderImage}
                />
                <div className="list-info-container">
                    <p className="list-name">{dog.name}</p>
                    <p>{dog.breed}</p>
                </div>
                <div className={`circle ${getDogPresentColor(dog.present)}`}>
           
                </div>
            </li>

        </Link>
    )
}

export default ListItem;
