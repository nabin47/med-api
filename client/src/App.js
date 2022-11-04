import './App.css';
import Login from './Login'
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DataTable from './DataTable/DataTable';
import Details from './Details';
import UserDetails from './DataTable/userDetails';
import About from './About'
import NavBar from './components/Navbar/Navbar';
import { UserContext } from './UserContext';
import { useMemo, useState } from 'react';
function App() {
  const [user, setUser] = useState(false);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={providerValue}>
      <Router>
      <div className="App">
        {/*<Homepage/>*/}
        <div>
        <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/Details/:id" element={<Details  />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/userDetails" element={<UserDetails />} />
                <Route path='/components/Navbar/Navbar' element={<NavBar />} />
                <Route path="/About" element={<About />} />
                <Route path='/DataTable/DataTable' element={<DataTable />}/>
        </Routes>
    </div>
        
      </div>
    
      </Router>

    </UserContext.Provider>
  );
}

export default App;