import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import List from "./List";
import "./Catalog.css";
import DropDownInput from "./DropdownInput";


const Catalog = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false)
    const [selectedBreed, setSelectedBreed] = useState('')
    const [selectedSex, setSelectedSex] = useState('')

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
        dog.name.toLowerCase().includes(searchInput.toLowerCase()) &&
        (dog.breed.toLowerCase() === (selectedBreed.toLowerCase()) || selectedBreed === '') &&
        (dog.sex.toLowerCase() === (selectedSex.toLowerCase()) || selectedSex === '')
      );
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleChangeBreed = (e) => {
        setSelectedBreed(e.target.value)
        // setIsFilterMenuOpen(false)
    }

    const handleChangeSex = (e) => {
        setSelectedSex(e.target.value)
    }



    const uniqueBreeds = new Set(list.map(dog => dog.breed));
    console.log(selectedBreed);


    return (
        <>
            <section className="search-section">
                <input placeholder="Search"
                    value={searchInput}
                    onChange={handleInputChange} />
                <span className="material-symbols-outlined" onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
                    filter_list
                </span>
            </section>

            {isFilterMenuOpen && (
                <div className="filter-overlay">
                    <section className="filter-section">
                        <h2>Filter</h2>
                        <span className="material-symbols-outlined close-filter" onClick={() => setIsFilterMenuOpen(false)}>
                        close
                        </span>
                        <section className="filter-option">
                            <label>Breed</label>
                           <DropDownInput 
                                selectedOption={selectedBreed} 
                                handleOptionChange={handleChangeBreed} 
                                options={Array.from(uniqueBreeds)}
                                optionName={'Breed'}
                                />
                        </section>
                        <section className="filter-option">
                            <label>Sex</label>
                            <DropDownInput
                                selectedOption={selectedSex} 
                                handleOptionChange={handleChangeSex}
                                options={['male', 'female']}
                                optionName={'Sex'}
                                />
                       </section>

                    </section>
                </div>
            )}

            <List list={filteredList} />

        </>

    )

}

export default Catalog;