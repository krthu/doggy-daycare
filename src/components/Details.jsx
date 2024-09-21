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
    // const id = params.id;
    // const dogID = parseInt(id);
    // const dog = dogID >= 0 && dogID < list.length ? list[dogID] : null;

    const chipNumber = params.chipNumber;
    const dog = list.find(dog => dog.chipNumber === chipNumber)

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
                <img src={dog.img} 
                    alt={`${dog.name} is a ${dog.breed}`} 
                    className={`large-profile-image ${dog.present ? 'details-present' : ''}`} 
                    onError={(e) => e.target.src = placeholderImage}
                />
            </div>
            <section className="information-section">
                <h3 className="name">{dog.name} <span className="material-symbols-outlined gender-span">
                {dog.sex} </span></h3>
                 <section className="details-info-section"> 
                    <DetailsInfoItem label={'Breed'} value={dog.breed}/>
                    <DetailsInfoItem label={'Age'} value={dog.age} />
                    <DetailsInfoItem label={'Chip number'} value={dog.chipNumber} />
                    <DetailsInfoItem label={'Owner'} value={`${dog.owner.name} ${dog.owner.lastName}`} />
                    <DetailsInfoItem label={'Phone'} value={dog.owner.phoneNumber} />
                 </section> 
            </section>
        </div>

    )
}

export default Details;