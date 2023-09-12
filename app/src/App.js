import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";

// Pages
import GiphyMain from './Pages/Main';
import GifsId from './Pages/GifsId';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GiphyMain />} />
        <Route path="/gifs/:id" element={<GifsId />} />
      </Routes>
    </div>
  );
}

export default App;
