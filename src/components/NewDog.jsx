import { useState } from "react";
import FormInput from "./FormInput";


const NewDog = () => {

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [chipNumber, setChipnumber] = useState('');
    const [ownerFirstName, setOwnerFirstName] = useState('');
    const [ownerLastName, setOwnerLastName] = useState('');
    const [phone, setPhone] = useState('');



    const handleStateChange = (e) => {
        setName(e.target.value);
    }

    return(
        <div className="newdog-container">
            <h2>New Dog +{name} Breed + {breed}</h2>
            <form>
                <FormInput 
                    value={name}
                    placeholder={'Placeholder'}
                    changeValue={setName}
                    label={'Name'}
                />
                <FormInput 
                    value={breed}
                    placeholder={'Breed'}
                    changeValue={setBreed}
                    label={'Breed'}
                />

                <FormInput 
                    value={age}
                    placeholder={'Age'}
                    changeValue={setAge}
                    label={'Age'}
                    type={'Number'}
                />
                <FormInput 
                    value={chipNumber}
                    placeholder={'Chipnumber'}
                    changeValue={setChipnumber}
                    label={'ChipNumber'}
                   
                />

                <FormInput 
                    value={ownerFirstName}
                    placeholder={'Firstname'}
                    changeValue={setOwnerFirstName}
                    label={'Owner Firstname'}
                   
                />

                <FormInput 
                    value={ownerLastName}
                    placeholder={'LastName'}
                    changeValue={setOwnerLastName}
                    label={'Owner Lastname'}
                   
                />

                <FormInput 
                    value={phone}
                    placeholder={'Phonenumber'}
                    changeValue={setPhone}
                    label={'Phonenumber'}
                   
                />

                <button>Save</button>



                
            </form>

        </div>
    )
}

export default NewDog;