import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import List from "./List";


const Catalog = (props) => {

    const sortAlphabetically = (a, b) => {
        if (a.name < b.name ){
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


    return(

        <List list={list} />

    )

}

export default Catalog;