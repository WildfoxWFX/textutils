import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }


  return ( 
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} togglemode={toggleMode} />
      <div className='container my-3'>
        <Routes>
          <Route path="/" element={<Textform heading="Enter The Text To Analyze Below" mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
