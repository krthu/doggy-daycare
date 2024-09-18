import { useState, useEffect } from "react";
import ListItem from "./ListItem";


const Catalog = (props) => {
    let status = 'loading';

    if (!props.data) {
        return <p>Loading catalog...</p>; 
      }
    let list = props.data.record

    return(
        <ul>
            {list.length > 0 ? (
                list.map((dog, index) => (
                    <ListItem dog={dog} index={index} key={index}/>
                    // <li key={index}>{dog.name}</li>
                ))
            ):(
                <p>{"No dogs found!"}</p>
            )
        }

        </ul>
    )

}

export default Catalog;