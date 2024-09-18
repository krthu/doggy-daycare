import { useEffect, useState } from 'react'

import './App.css'

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
    // fetch(apiURL)
    //   .then((newData) => {
    //     newData.json()
    //       .then((json) => {
    //         setData(json.record);
    //       })
        
    //   })
    fetchData();


  },[])

  return (
    <>
      

    </>
  )
}

export default App
