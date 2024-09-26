import { useState } from "react";
import List from "./List";
import "./Catalog.css";

import Filter from "./Filter";


const Catalog = (props) => {

    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    const isFiltersSet = () => {
        if (props.searchInput != '' || props.selectedBreed != ''
            || props.selectedSex != '' || props.selectedPresentOption != null
            || props.minAge != '' || props.maxAge != '') {
            return true;
        }
        return false;
    }

    return (
        <>
            <section className="search-section">
                <input placeholder="Search"
                    value={props.searchInput}
                    onChange={props.handleInputChange} />
                <span className={`material-symbols-outlined search-symbol ${isFiltersSet() ? 'filter-set' : ''}`} onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
                    filter_list
                </span>
            </section>

            {isFilterMenuOpen && (
                <Filter
                    list={props.filteredList}
                    searchInput={props.searchInput}
                    handleInputChange={props.handleInputChange}
                    selectedBreed={props.selectedBreed}
                    handleChangeBreed={props.handleChangeBreed}
                    selectedSex={props.selectedSex}
                    handleChangeSex={props.handleChangeSex}
                    minAge={props.minAge}
                    handleMinAgeChange={props.handleMinAgeChange}
                    maxAge={props.maxAge}
                    handleMaxAgeChange={props.handleMaxAgeChange}
                    uniqueBreeds={props.uniqueBreeds}
                    selectedPresentOption={props.selectedPresentOption}
                    handlePresentOptionChange={props.handlePresentOptionChange}
                    clearFilter={props.clearFilter}
                    setIsFilterMenuOpen={setIsFilterMenuOpen}

                />
            )}
            <List list={props.list} />
        </>
    )
}

export default Catalog;