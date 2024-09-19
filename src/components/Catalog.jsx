import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import List from "./List";
import "./Catalog.css";


const Catalog = (props) => {
    const [searchInput, setSearchInput] = useState('');

    const sortAlphabetically = (a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }




    if (!props.data) {
        return <p>Loading catalog...</p>;
    }

    const list = props.data.record.sort(sortAlphabetically);

    const filteredList = list.filter(dog =>
        dog.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }


    return (
        <>
            <section className="search-section">
                <input placeholder="Search"
                    value={searchInput}
                    onChange={handleInputChange} />
                <span className="material-symbols-outlined">
                    filter_list
                </span>
            </section>

            <List list={filteredList} />
        </>

    )

}

export default Catalog;