import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import List from "./List";
import "./Catalog.css";
import DropDownInput from "./DropdownInput";


const Catalog = (props) => {

    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

    const getPresentOptionText = (option) => {

        switch (option){
            case true:
                return 'present';
            case false:
                return 'absent';
            default: 
                return '';

        }
    }

    return (
        <>
            <section className="search-section">
                <input placeholder="Search"
                    value={props.searchInput}
                    onChange={props.handleInputChange} />
                <span className="material-symbols-outlined" onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
                    filter_list
                </span>
            </section>

            {isFilterMenuOpen && (
                <div className="filter-overlay">
                    <section className="filter-section">
                        <span className="material-symbols-outlined close-filter" onClick={() => setIsFilterMenuOpen(false)}>    
                        close
                        </span>
                        <h2>Filter</h2>
                        
                    
                        <section className="filter-option">
                            <label>Breed</label>
                           <DropDownInput 
                                selectedOption={props.selectedBreed} 
                                handleOptionChange={props.handleChangeBreed} 
                                options={Array.from(props.uniqueBreeds)}
                                optionName={'Breed'}
                                />
                        </section>
                        <section className="filter-option">
                            <label>Sex</label>
                            <DropDownInput
                                selectedOption={props.selectedSex} 
                                handleOptionChange={props.handleChangeSex}
                                options={['male', 'female']}
                                optionName={'Sex'}
                                />
                       </section>

                       <section className="filter-option">
                            <label>Age</label>
                            <section className="age-input-section">
                                <input type="Number" 
                                    value={props.minAge} 
                                    onChange={props.handleMinAgeChange} 
                                    placeholder="from" 
                                    className="age-input"/>
                                <p> - </p>
                                <input type="Number" 
                                    value={props.maxAge} 
                                    onChange={props.handleMaxAgeChange} 
                                    placeholder="to" 
                                    className="age-input"/>
                            </section>
                       </section>

                       <section className="filter-option">
                        <label>Present:</label>
                        <DropDownInput 
                            selectedOption={getPresentOptionText(props.selectedPresentOption)}
                            handleOptionChange={props.handlePresentOptionChange}
                            options={['present', 'absent']}
                        />
                       </section>
                       

                    </section>
                </div>
            )}

            <List list={props.list} />

        </>

    )

}

export default Catalog;