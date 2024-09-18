import { useParams } from "react-router-dom";


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
        <p>
            {dog.name}
        </p>
    )
}

export default Details;