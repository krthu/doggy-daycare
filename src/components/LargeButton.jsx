const LargeButton = (props) => {

    return (
        <div className={`large-button ${props.class}`}>
            <div className="large-button-text-container">
                <span className="material-symbols-outlined large-button-icon">
                    {props.icon}
                </span>
                <p className="large-button-text">{props.text}</p>
            </div>

        </div>
    )

}

export default LargeButton;