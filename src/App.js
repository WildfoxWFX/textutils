import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>         
        <Navbar title="TextUtils" about="About"/>
        <div className='container my-3'> 
        <Textform heading = "Enter The Text To Analyze Below"/>
        </div>
    </>
  );
}

export default App;
