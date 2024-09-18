import ListItem from "./ListItem";

const List = (props) => {

    let list = props.list


    return (
        <ul>
            {list.length > 0 ? (
                list.map((dog, index) => (
                    <ListItem dog={dog} index={index} key={index} />

                ))
            ) : (
                <p>{"No dogs found!"}</p>
            )
            }

        </ul>
    )


}

export default List;