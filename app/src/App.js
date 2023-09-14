import './App.css';
import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from "react-router-dom";


// Pages
import GiphyMain from './Pages/Main';
import GifsId from './Pages/GifsId';
import Results from './Pages/Results';

function App() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState(null)
  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=30`)
      const searchData = await response.json()
      console.log(searchData)
      console.log(response)
      setResults(searchData.data)
      setQuery('')
      navigate("/results")
    }

    catch (err) {
      console.log(err)
    }
  }
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <Link to="/"><h1>Welcome to my Giphy API app!</h1></Link>
      <h2>You can search for specific gifs, and clicking one will give you more information!</h2>
      <form class="form-inline my-2 my-lg-0">
        <input class="" placeholder='Search Gifs' type="text" value={query} onChange={handleChange} />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSearch}>Search</button>
      </form>
      <Routes>
        <Route path="/" element={<GiphyMain handleChange={handleChange} handleSearch={handleSearch} query={query} />} />
        <Route path="/gifs/:id" element={<GifsId />} />
        <Route path="/results" element={<Results results={results} />} />
      </Routes>
    </div>
  );
}

export default App;
