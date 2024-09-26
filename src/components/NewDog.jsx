import { useState } from "react";
import FormInput from "./FormInput";
import placeholderImage from '../assets/placeholder2.png';
import DropdownInput from './DropdownInput'
import './NewDog.css';
import Toast from "./Toast";


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

    const [toast, setToast] = useState({
        show: false,
        message: '',
        type: 'info',
    })

    const triggerToast = (message, type = 'info', short=true) => {
        setToast({
            show: true,
            message: message,
            type: type,
            short: short
        })
    }

    const dismissToast = () => {
        setToast({
            show: false,
            message:''
        })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(file);
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    }

    const getErrors = () => {
        const fieldsToValidate = {
            name: { value: name, message: 'Fill in name' },
            breed: { value: breed, message: 'Fill in breed' },
            sex: { value: sex, message: 'Select sex' },
            age: { value: age, message: 'Fill in age' },
            chipNumber: { value: chipNumber, message: 'Fill in chipnumber' },
            ownerFirstName: { value: ownerFirstName, message: 'Fill in firstname' },
            ownerLastName: { value: ownerLastName, message: 'Fill in lastname' },
            phone: { value: phone, message: 'Fill in phonenumber' },
        }

        const newErrors = {};

        Object.keys(fieldsToValidate).forEach(field => {
            if (fieldsToValidate[field].value === '') {
                newErrors[field] = fieldsToValidate[field].message;
            }
        })
        return newErrors;
    }

    const clearFields = () => {
        setName('');
        setBreed('');
        setSex('');
        setAge('');
        setChipnumber('');
        setOwnerFirstName('');
        setOwnerLastName('');
        setPhone('');
        setSelectedImage(null);
        setPreviewImage(null)
    }

    const handleSave = (e) => {
        e.preventDefault();
        const newErrors = getErrors()

        setErrors(newErrors);

        if (Object.keys(newErrors).length <= 0) {
            if (selectedImage) {
                console.log('Upload image and get url');
            }

            const dog = {
                name: name,
                sex: sex,
                breed: breed,
                img: 'image link',
                present: false,
                age: age,
                chipNumber: chipNumber,
                owner: {
                    name: ownerFirstName,
                    lastName: ownerLastName,
                    phoneNumber: phone
                }
            }
            console.log('API -> Save this dog please!')
            console.log(dog);
            clearFields();
            triggerToast('New Dog saved!', 'success');
        } else{
            triggerToast('Failed to save please fill in all fields!', 'error');
        }
        
        
    }

    return (
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
                        selectedOption={sex}
                        handleOptionChange={(e) => { setSex(e.target.value) }}
                        noSelectionText='Select sex'
                        options={['male', 'female']}

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
            {toast.show && 
             <Toast 
                message={toast.message}
                type={toast.type}
                short={toast.short}
                onClose={dismissToast}
            />
             } 

        </div>
    )
}

export default NewDog;