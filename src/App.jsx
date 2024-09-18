import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';

import './App.css'
import Welcome from './components/Welcome';
import Catalog from './components/Catalog';
import Details from './components/Details';

function App() {
  const [data, setData] = useState(null);
  console.log(data);

  const apiURL = 'https://api.jsonbin.io/v3/b/66ea8f34acd3cb34a886a7c8';


  const fetchData = async () => {
    try {
     
      const res = await fetch(apiURL);
      const json = await res.json();
      setData(json.record);
    } catch (error) {
      console.log('error fetching data')

    }
  }

  useEffect( () => {

    
    fetchData();


  },[])

  // const [data, setData] = useState(null);
  // console.log(data);

  // const apiURL = 'https://api.jsonbin.io/v3/b/66ea8f34acd3cb34a886a7c8';

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(apiURL);
  //     const json = await res.json();
  //     setData(json.record);
  //   } catch (error) {
  //     console.log('error fetching data')
  //   }
  // }

  // useEffect( () => {
  //   // fetch(apiURL)
  //   //   .then((newData) => {
  //   //     newData.json()
  //   //       .then((json) => {
  //   //         setData(json.record);
  //   //       })
        
  //   //   })
    
  //  // fetchData();


  // },[])

  return (
    <div className='container'>
      <header>
        <Link to={'/'}>
          <h1>Happy Tails Retreat</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path='/'
            element = {<Welcome />} />

          <Route path='/catalog'
            element = { <Catalog data={data}/>}
          />

          <Route path='/catalog/:chipNumber' 
            element= {<Details data={data}/>}
          />

        </Routes>

       
      </main>
      <footer>

      </footer>

    </div>
  )
}

export default App
