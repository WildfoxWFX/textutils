import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
        setAlert({
          msg:message,
          type:type
        })

        setTimeout(() => {
          setAlert(null);
        }, 1500);

  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled","success")
      document.title = "TextUtils - DarkMode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success")
      document.title = "TextUtils - LightMode";
    }
  }


  return ( 
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} togglemode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />} />
          <Route path="/about" element={<About togglemode={toggleMode} about="About Us" mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
