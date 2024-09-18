import { Link } from "react-router-dom";

const ListItem = (props) => {
    
    return(
        <Link to={`/catalog/${props.index}`}>

            <li>
                {props.dog.name}
            </li>

        </Link>
    )
}

export default ListItem;
