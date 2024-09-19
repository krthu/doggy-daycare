import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const List = (props) => {

    const list = props.list


    // useEffect( () => {
    //     filteredList = list.
        
    // },[searchInput])
    

    return (
        <>
        {/* <section className="search-section">
            <input placeholder="Search" 
            value={searchInput} 
            onChange={handleInputChange}/>
            <span className="material-symbols-outlined">
                filter_list
            </span>
        </section> */}
        <ul className="catalog-list">
            {list.length > 0 ? (
                list.map((dog, index) => (
                    <ListItem dog={dog} index={index} key={index} />

                ))
            ) : (
                <p>{"No dogs found!"}</p>
            )
            }

        </ul>
        </>
    )


}

export default List;