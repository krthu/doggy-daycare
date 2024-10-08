import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Welcome from './components/Welcome';
import Catalog from './components/Catalog';
import Details from './components/Details';
import Header from './components/Header';
import Footer from './components/Footer';
import NewDog from './components/NewDog';

function App() {
  const apiURL = 'https://api.jsonbin.io/v3/b/66ea8f34acd3cb34a886a7c8';
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const [minAge, setMinAge] = useState('');
  const [maxAge, setMaxAge] = useState('');
  const [selectedPresentOption, setSelectedPresentOption] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {

      const res = await fetch(apiURL);
      const json = await res.json();
      setData(json.record);
    } catch (error) {
      console.log('error fetching data')

    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleChangeBreed = (e) => {
    setSelectedBreed(e.target.value);

  }

  const handleChangeSex = (e) => {
    setSelectedSex(e.target.value);
  }

  const handleMinAgeChange = (e) => {
    const num = e.target.value;

    if (!isNaN(num) && num >= 0) {
      setMinAge(e.target.value);
    }
  }

  const handleMaxAgeChange = (e) => {
    const num = e.target.value;

    if (!isNaN(num) && num >= 0) {
      setMaxAge(e.target.value);
    }
  }

  const clearFilterSelections = () => {
    setSearchInput('');
    setSelectedBreed('');
    setSelectedSex('');
    setMinAge('');
    setMaxAge('');
    setSelectedPresentOption(null);
  }

  const handlePresentOptionChange = (e) => {

    switch (e.target.value) {
      case 'present':
        setSelectedPresentOption(true);
        break;
      case 'absent':
        setSelectedPresentOption(false);
        break;
      default:
        setSelectedPresentOption(null);
    }
  }

  if (loading) {
    return <p className='status-message'>Loading...</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }
  const sortAlphabetically = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const list = data.record.sort(sortAlphabetically);

  const uniqueBreeds = new Set(list.map(dog => dog.breed));

  const setDefaultValues = (dog) => {
    if (!dog.name) {
      dog.name = ('Not set');
    }
    if (!dog.breed) {
      dog.breed = ('Not set');
    }
    if (!dog.sex) {
      dog.sex = ('Not set');
    }
    if (dog.present === null) {
      dog.present = ('Not set');
    }
    if (!dog.age) {
      dog.age = ('Not set');
    }

  }

  const filteredList = list.filter(dog => {
    setDefaultValues(dog);

    return (
      dog.name.toLowerCase().includes(searchInput.toLowerCase()) &&
      (dog.breed.toLowerCase() === (selectedBreed.toLowerCase()) || selectedBreed === '') &&
      (dog.sex.toLowerCase() === (selectedSex.toLowerCase()) || selectedSex === '') &&
      ((minAge === '' || dog.age >= minAge) && (maxAge === '' || dog.age <= maxAge)) &&
      (dog.present === selectedPresentOption || selectedPresentOption === null)
    )
  });


  return (
    <div className='container'>
      <Header />
      <main>
        <Routes>
          <Route path='/'
            element={<Welcome />} />

          <Route path='/catalog'
            element={<Catalog
              //data={data}
              list={filteredList}
              searchInput={searchInput}
              handleInputChange={handleInputChange}
              selectedBreed={selectedBreed}
              handleChangeBreed={handleChangeBreed}
              selectedSex={selectedSex}
              handleChangeSex={handleChangeSex}
              minAge={minAge}
              handleMinAgeChange={handleMinAgeChange}
              maxAge={maxAge}
              handleMaxAgeChange={handleMaxAgeChange}
              uniqueBreeds={uniqueBreeds}
              selectedPresentOption={selectedPresentOption}
              handlePresentOptionChange={handlePresentOptionChange}
              clearFilter={clearFilterSelections}
            />}
          />

          <Route path='/catalog/:chipNumber'
            element={<Details data={data} />}
          />

          <Route path='/newdog'
            element={<NewDog />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
