import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import SearchbarDropdown from './components/SearchbarDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const defaultOptions = []
for ( let i = 0; i < 10; i++) {
    defaultOptions.push(`Id ${i}`);
    defaultOptions.push(`Medicine ${i}`);
    defaultOptions.push(`Ingredients ${i}`);
}

function App() {
  const [options, setOptions] = useState([]);

  const onClick = (values) => {
    console.log('Success:', values);
    alert('Login Successfully')
  };

  const navigate = useNavigate();

  const navigateToDetailsPage = () => {
    navigate('/Details')
  }

  const onInputChange = (event) => {
    setOptions(defaultOptions.filter(option => option.includes(event.target.value)));
  } 
  
  return (
    <div className="App">
      <Navbar />
      <SearchbarDropdown options={options} onInputChange={onInputChange}/>
      <button className='btn btn-primary' onClick={navigateToDetailsPage}>Search</button>
    </div>
  );
}

export default App;
