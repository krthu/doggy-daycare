import { useState } from "react";
import FormInput from "./FormInput";
import placeholderImage from '../assets/placeholder2.png';
import DropdownInput from './DropdownInput'
import './NewDog.css';


const NewDog = () => {

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [chipNumber, setChipnumber] = useState('');
    const [ownerFirstName, setOwnerFirstName] = useState('');
    const [ownerLastName, setOwnerLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file){
            setSelectedImage(file);
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    }

    const handleSave = () => {
        

        console.log('Upload image and get url');


        const dog = {
            name : name,
            sex : sex,
            breed : breed,
            img: 'image link',
            present: false,
            age : age,
            chipNumber : chipNumber,
            owner : {
                name : ownerFirstName,
                lastName : ownerLastName,
                phoneNumber : phone
            }
        }
        console.log(dog);
    }

    return(
        <div className="newdog-container">
            <h2>New Dog</h2>
            <form className="newdog-form">
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

                

                {/* <div className="form-checkbox">
                    <label className="form-row-label">Gender</label>
                    <label>
                        <input 
                         
                            type="radio"
                            name="gender"
                            value="male"
                            checked={sex === 'male'}
                            onChange={(e) => setSex(e.target.value)}
                        />
                        Male
                    </label>

                    <label>
                        <input 
                         
                            type="radio"
                            name="gender"
                            value="female"
                            checked={sex === 'female'}
                            onChange={(e) => setSex(e.target.value)}
                        />
                        Female
                    </label>
                </div> */}
                <div className="form-row">
                <label className="form-row-label">Gender</label>
                    <DropdownInput 
                        selectedOption = {sex}
                        handleOptionChange = {(e) => { setSex(e.target.value)}}
                        noSelectionText = 'Select sex'
                        options = {['male', 'female']}
                    
                    />
                </div>


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
                <img src={previewImage ? previewImage : placeholderImage}
                    className="form-preview-image"
                />
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    />

                



                <button onClick={handleSave}>Save</button>   
            </form>
            


        </div>
    )
}

export default NewDog;