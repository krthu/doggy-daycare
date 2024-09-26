
import ListItem from "./ListItem";

const List = (props) => {
    const list = props.list
    return (
      
        <ul className="catalog-list">
            {list.length > 0 ? (
                list.map((dog, index) => (
                    <ListItem dog={dog} index={index} key={index} />

                ))
            ) : (
                <p className="list-empty">{"No dogs found!"}</p>
            )
            }

        </ul>
    )
}

export default List;