import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = ()=>{
    return(
        <div>
        <NavBar/>
        <div class="about-cadr">
        </div>
       
        <div class="about-cadr-text">
        <p class="para">Med-Api</p>
            <div class="about-cadr-body">
                <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        
        <Footer />
        </div>
    )
}
export default About;
