import { Link, useParams } from "react-router-dom";
import './Details.css'
import DetailsInfoItem from "./DetailsInfoItem";
import placeholderImage from '../assets/placeholder.png';



const Details = (props) => {
    if (!props.data) {
        return <p>Loading dog...</p>;
    }

    let list = props.data.record
    const params = useParams();
    const chipNumber = params.chipNumber;
    const dog = list.find(dog => dog.chipNumber === chipNumber)

    const getDogPresentColor = (value) => {
        if (value === true){
            return 'present'
        } else if (value === false){
            return ''
        } else {
            return 'varning'
        }
    }

    if (!dog) {
        return <p>No dog found!</p>
    }
    return (
        <div className="details-container">
            <div className="details-image-section">
                <Link to={'/catalog'} className="back-link">
                    <span className="material-symbols-outlined back-arrow">
                        arrow_back_ios
                    </span>
                </Link>
                <img src={dog.img ?? './placeholder2.jpg'} 
                    alt={`${dog.name} is a ${dog.breed}`} 
                    className={`large-profile-image ${dog.present ? 'details-present' : ''}`} 
                    onError={(e) => e.target.src = placeholderImage}
                />
            </div>
            <section className="information-section">
                <h3 className="name">{dog.name} <span className="material-symbols-outlined gender-span">
                {dog.sex !== 'Not set' ? dog.sex : 'question_mark'} </span></h3>
                 <section className="details-info-section"> 
                    <DetailsInfoItem label={'Breed'} value={dog.breed}/>
                    <DetailsInfoItem label={'Age'} value={dog.age} />
                    <DetailsInfoItem label={'Chip number'} value={dog.chipNumber} />
                    <DetailsInfoItem label={'Owner'} value={`${dog.owner.name ?? 'Not set'} ${dog.owner.lastName ?? 'Not set'}`} />
                    <DetailsInfoItem label={'Phone'} value={dog.owner.phoneNumber} />
                 </section> 
                 <button className={`check-in-button ${dog.present ? 'checked-in' : ''}`}>Check {dog.present ? 'out' : 'in'}</button>
            </section>
        </div>

    )
}

export default Details;