import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import List from "./List";


const Catalog = (props) => {

    const sortAlphabeticly = (a, b) => {
        if (a.name < b.name ){
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }

    let status = 'loading';

    if (!props.data) {
        return <p>Loading catalog...</p>; 
      }
    let list = props.data.record.sort((a , b) => {
        sortAlphabeticly(a, b)
    })

    return(

        <List list={list} />

    )

}

export default Catalog;