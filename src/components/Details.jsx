import { Link, useParams } from "react-router-dom";
import './Details.css'


const Details = (props) => {
    if (!props.data) {
        return <p>Loading dog...</p>; 
      }
      
  
    let list = props.data.record
    

    const params = useParams();
    const id = params.id;
    const dogID = parseInt(id);
    const dog = dogID >= 0 && dogID < list.length ? list[dogID] : null;

    if (!dog) {
        return <p>No dog found!</p>
    }


    return (
        <div className="details-container">
            <Link to={'/catalog'}> 
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </Link>
            <img src={dog.img} alt={`${dog.name} is a ${dog.breed}`} className="large-profile-image" />
            <section className="information-section">
                <h3 className="name">Name: {dog.name}</h3>
                <p>Sex: {dog.sex}</p>
                <p>Breed: {dog.breed}</p>
                <p>Age: {dog.age}</p>
                <p>ChipNumber: {dog.chipNumber}</p>
                <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
                <p>Phone Number: {dog.owner.phoneNumber}</p>
            </section>
        </div>
     
    )
}

export default Details;