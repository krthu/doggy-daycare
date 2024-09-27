import DropDownInput from "./DropdownInput";
import "./Filter.css";

const Filter = (props) => {

    const getPresentOptionText = (option) => {

        switch (option) {
            case true:
                return 'present';
            case false:
                return 'absent';
            default:
                return '';

        }
    }

    return (
        <div className="filter-overlay">
            <section className="filter-section">
                <div className="filter-header">
                <h2>Filter</h2>
                    <span className="material-symbols-outlined close-filter" onClick={() => props.setIsFilterMenuOpen()}>
                        close
                    </span>
             
                </div>

                <section className="filter-option">
                    <label>Breed</label>
                    <DropDownInput
                        selectedOption={props.selectedBreed}
                        handleOptionChange={props.handleChangeBreed}
                        options={Array.from(props.uniqueBreeds)}
                        optionName={'Breed'}
                        noSelectionText={'All Breeds'}
                    />
                </section>
                <section className="filter-option">
                    <label>Sex</label>
                    <DropDownInput
                        selectedOption={props.selectedSex}
                        handleOptionChange={props.handleChangeSex}
                        options={['male', 'female']}
                        optionName={'Sex'}
                        noSelectionText={'Both'}
                    />
                </section>

                <section className="filter-option">
                    <label>Age</label>
                    <section className="age-input-section">
                        <input type="Number"
                            value={props.minAge}
                            onChange={props.handleMinAgeChange}
                            placeholder="from"
                            className="age-input" />
                        -
                        <input type="Number"
                            value={props.maxAge}
                            onChange={props.handleMaxAgeChange}
                            placeholder="to"
                            className="age-input" />
                    </section>
                </section>

                <section className="filter-option">
                    <label>Present:</label>
                    <DropDownInput
                        selectedOption={getPresentOptionText(props.selectedPresentOption)}
                        handleOptionChange={props.handlePresentOptionChange}
                        options={['present', 'absent']}
                        noSelectionText={'All'}
                    />
                </section>

                <button className="clear-filter-button" onClick={() => props.clearFilter()}>Clear Filters</button>
            </section>
        </div>
    )
}
export default Filter;