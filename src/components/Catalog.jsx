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

    let status = 'loading';

    if (!props.data) {
        return <p>Loading catalog...</p>; 
      }
    // let list = props.data.record.sort((a , b) => {
    //     sortAlphabeticlly(a, b)
    // })

    const list = props.data.record.sort(sortAlphabetically);
    console.log(list[0].name)

    return(

        <List list={list} />

    )

}

export default Catalog;