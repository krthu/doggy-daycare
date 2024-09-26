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

    const [errors, setErrors] = useState({});



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file){
            setSelectedImage(file);
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    }

    const handleSave = () => {
        const fieldsToValidate = {
            name: {value: name, message: 'Fill in name'},
            breed: {value: breed, message: 'Fill in breed'},
            sex: {value: sex, message: 'Select sex'},
            age: {value: age, message: 'Fill in age'},
            chipNumber: {value: chipNumber, message: 'Fill in chipnumber'},
            ownerFirstName: {value: ownerFirstName, message: 'Fill in firstname'},
            ownerLastName: {value: ownerLastName, message: 'Fill in lastname'},
            phone: {value: phone, message: 'Fill in phonenumber'},
        }


        const newErrors = {};

        Object.keys(fieldsToValidate).forEach(field => {
            if (fieldsToValidate[field].value === ''){
                newErrors[field] = fieldsToValidate[field].message;            }
        })

        setErrors(newErrors);

        if (Object.keys(newErrors).length <= 0){
            if (selectedImage){
                console.log('Upload image and get url');
            }


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
            console.log('API -> Save this dog please!')
            console.log(dog);
        }
    }

    return(
        <div className="newdog-container">
            <h2>New Dog</h2>
            <form className="newdog-form">
                <FormInput 
                    value={name}
                    placeholder={'Name'}
                    changeValue={setName}
                    label={'Name'}
                    error={errors.name ?? ''}
                />
                <FormInput 
                    value={breed}
                    placeholder={'Breed'}
                    changeValue={setBreed}
                    label={'Breed'}
                    error={errors.breed ?? ''}
                />

                <div className="form-row">
                <label className="form-row-label">Sex</label>
                    <DropdownInput 
                        selectedOption = {sex}
                        handleOptionChange = {(e) => { setSex(e.target.value)}}
                        noSelectionText = 'Select sex'
                        options = {['male', 'female']}
                        // id='form-gender'
                    
                    
                    />
                    <span className="form-error-message">{errors.sex}</span>
                </div>

                <FormInput 
                    value={age}
                    placeholder={'Age'}
                    changeValue={setAge}
                    label={'Age'}
                    type={'Number'}
                    error={errors.age ?? ''}
                />
                <FormInput 
                    value={chipNumber}
                    placeholder={'Chipnumber'}
                    changeValue={setChipnumber}
                    label={'ChipNumber'}
                    error={errors.chipNumber ?? ''}
                />

                <FormInput 
                    value={ownerFirstName}
                    placeholder={'Firstname'}
                    changeValue={setOwnerFirstName}
                    label={'Owner Firstname'}
                    error={errors.ownerFirstName ?? ''}
                />

                <FormInput 
                    value={ownerLastName}
                    placeholder={'LastName'}
                    changeValue={setOwnerLastName}
                    label={'Owner Lastname'}
                    error={errors.ownerLastName ?? ''}
                />

                <FormInput 
                    value={phone}
                    placeholder={'Phonenumber'}
                    changeValue={setPhone}
                    label={'Phonenumber'}
                    error={errors.phone ?? ''}
                   
                   
                />
                <img src={previewImage ? previewImage : placeholderImage}
                    className="form-preview-image"
                />
                <input className="form-file-input"
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