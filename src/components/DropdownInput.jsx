const DropDownInput = (props) => {
    function capitalize(word) {
        if (!word) return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
      }

    return(
        <select value={props.selectedOption} onChange={(e) => props.handleOptionChange(e)}>
            <option value="" >{props.noSelectionText}</option>
            {props.options.map((option, index) => (
                <option className="filter-option-value" key={index} value={option}>
                    {capitalize(option)}
                </option>
            ))}
        </select>

    )
}

export default DropDownInput 