import './App.css';
import Login from './Login'
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DataTable from './DataTable/DataTable';
import Details from './Details';
function App() {
  return (
    <Router>
    <div className="App">
      {/*<Homepage/>*/}
      <div>
      <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/DataTable/DataTable" element={<DataTable />} />
              <Route path="/Details/:type" element={<Details  />} />
       </Routes>
  </div>
      
    </div>
   
    </Router>
  );
}

export default App;