import './App.css';
import Login from './pages/Login/Login';
import Homepage from './Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataTable from './pages/DataTable/DataTable';
import Details from './pages/Details/Details';
import UserDetails from './pages/DataTable/userDetails';
import About from './pages/About/About'
import NavBar from './components/Navbar/Navbar';
import { UserContext } from './components/UserContext';
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
                <Route path="/pages/Details/Details/:id" element={<Details  />} />
                <Route path="/pages/Login/Login" element={<Login />} />
                <Route path="/pages/DataTable/userDetails" element={<UserDetails />} />
                <Route path="/components/Navbar/Navbar" element={<NavBar />} />
                <Route path="/pages/About/About" element={<About />} />
                <Route path="/pages/DataTable/DataTable" element={<DataTable />}/>
        </Routes>
    </div>
        
      </div>
    
      </Router>

    </UserContext.Provider>
  );
}

export default App;