import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';

const Details = ()=>{
    const [item,setItem]= React.useState({
        GenericName: 'Cephalexin', 
        Strength: '500mg',
        Manufacturer: 'Square',
        UnitPrice:'100ml 750tk',
        Doses:'1-2 doese',
        precautions: 'lorem ipsum',
        Indication:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',                    
        SideEffects:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
        Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    })
    const {type} = useParams();
    const stateParamVal = useLocation.state.stateParam;
    console.log(type);

    return(
       <div>
        <Navbar/>
        <h1 style={{fontFamily:"Arial, Helvetica, sans-serif", marginLeft:"20px", marginRight:"20px"}}>{item.GenericName}</h1>
        <h2 className='heading'>Strength</h2>
        <p className='prod-description'>{item.Strength}</p>
        <h2 className='heading'> Manufacturer</h2>
        <p className='prod-description' >{item.Manufacturer}</p>
        <h2 className='heading' >UnitPrice</h2>
        <p className='prod-description' >{item.UnitPrice}</p>
        <h2 className='heading' >Indication</h2>
        <p className='prod-description' >{item.Indication}</p>
        <h2 className='heading' >Description</h2>
        <p className='prod-description' >{item.Description}</p>
        <h2 className='heading' >Doses</h2>
        <p className='prod-description' >{item.Doses}</p>
        <h2 className='heading' >SideEffects</h2>
        <p className='prod-description' >{item.SideEffects}</p>
        <h2 className='heading' >Precautions</h2>
        <p className='prod-description' >{item.precautions}</p>

        <Footer />

       </div>   
    )
}
export default Details;