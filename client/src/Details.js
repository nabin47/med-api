import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';
import './Details.css'

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
    {/*const {type} = useParams();
    const stateParamVal = useLocation.state.stateParam;
console.log(type);*/}

    return(
       <div>
        <Navbar/>
        <div class="medicine">
            <div class="medicine-description">
              <p class="generic-name">{item.GenericName}</p>
              <p class="medicine-attr">{item.Strength}</p>
              <p class="medicine-attr">{item.Manufacturer}</p>
              <p class="medicine-attr">{item.UnitPrice}</p>
            </div>
            <div>
              <h4 class="med-heading">Indication</h4>
              <p class="description">{item.Indication}</p>
              <h4 class="med-heading">SideEffects</h4>
              <p class="description">{item.SideEffects}</p>
              <h4 class="med-heading">Description</h4>
              <p class="description">{item.Description}</p>
              <h4 class="med-heading">Precautions</h4>
              <div class="description">
              <ul class>
                <li>{item.precautions}</li>
                <li>{item.precautions}</li>
                <li>{item.precautions}</li>
                <li>{item.precautions}</li>
              </ul>
              </div>
            </div>
           </div>

        <Footer />

       </div>   
    )
}
export default Details;