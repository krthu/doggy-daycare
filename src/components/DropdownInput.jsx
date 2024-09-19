const DropDownInput = (props) => {


    return(
        <select value={props.selectedOption} onChange={(e) => props.handleOptionChange(e)}>
            <option value="" >Not set</option>
            {/* <option value={''}>No selection</option> */}
            {props.options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>

    )
}

export default DropDownInput 