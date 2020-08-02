import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [istek, setIstek] = useState("");


useEffect(() => {
  const fetchItems = async () => {
    const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${istek}`)

    setItems(result.data)
    setIsLoading(false)
  }
  fetchItems()

}, [istek]) 

   return <div className="container">
      <Header/>
      <Search getIstek={(i) => setIstek(i) } />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
}

export default App;
