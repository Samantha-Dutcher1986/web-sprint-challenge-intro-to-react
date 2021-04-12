import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Characters from './components/Character'
import styled from 'styled-components'
import './App.css';

const styledHeader = styled.h1`
  color: #b81d1e;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [char, setChar] = useState([])

  useEffect(() => {
    axios
      .get('https:swapi.dev/api/people/')
      .then((res) => {
        setChar(res.data.results)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
    <styledHeader className = 'Header'>Characters</styledHeader>
    <div className = 'container'>
      <Characters charName = {char} />
    </div>
  </div>
  );
}

export default App;

//REWRITTEN CODE 

// import React, {useState, useEffect} from 'react';
// import Character from './components/Character'
// import axios from 'axios'
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);


//   useEffect(()=>{
//     axios
//     .get(`https://swapi.dev/api/people`)
//     .then(res => {
//       console.log(res.data.results)
//       setData(res.data.results)
//     })
//     .catch(e=>{
//       return `${e}. These are not the droids you are looking for!`
//     })
//   },[])

//   return (
//     <div className="App">
//       <h1 className="Header">Bounty List</h1>
//    {data.map(item => {
//      return <Character key = {data.url} data = {item} bounty = {Math.floor(Math.random()*10000000)}/>
//    })}
   
//     </div>
//   );
// }

// export default App;
