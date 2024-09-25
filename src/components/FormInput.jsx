import "./FormInput.css" 

const FormInput = (props) => {


    return(
        <div className="form-row">
            <label className="form-row-label">{props.label}</label>
            <input className="form-row-input" 
                placeholder={props.placeholder}
                value={props.value}
                type={props.type ?? ''}
                onChange={(e) => props.changeValue(e.target.value)}
            />
        </div>
    )
}

export default FormInput;