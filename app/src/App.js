import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";

// Pages
import GiphyMain from './Pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GiphyMain />} />
      </Routes>
    </div>
  );
}

export default App;
