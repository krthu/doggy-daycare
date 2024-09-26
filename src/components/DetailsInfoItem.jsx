const DetailsInfoItem = (props) => {
    return(
        <div className="details-info-item">
            <span className="details-label">{props.label + ':'}</span>
            <span className="details-value">{props.value ?? 'Not set'}</span>
        </div>
    )
}

export default DetailsInfoItem