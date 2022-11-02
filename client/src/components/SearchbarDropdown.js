import React, {useEffect, useRef, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';

const defaultOptions = []
for ( let i = 0; i < 10; i++) {
    defaultOptions.push(`Id ${i}`);
    defaultOptions.push(`Medicine ${i}`);
    defaultOptions.push(`Ingredients ${i}`);
}

const SearchbarDropdown = (props) => {
    const [options, setOptions] = useState([]);
    // const {options, onInputChange} = props;
    const ulRef=useRef();
    const inputRef=useRef();

    // navigation route for search button
    // const navigate = useNavigate();

    // const navigateToDetailsPage = () => {
    //     <Link to={{
    //         pathname: "/Details/parameter-data",
    //         state: {stateParam: inputRef.current.value}
    //     }}>
    //     </Link>
    // } 

    const onInputChange = (event) => {
        setOptions(defaultOptions.filter(option => option.includes(event.target.value)));
    }

    useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      console.log('Input box clicked');
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    })
    
    document.addEventListener('click', (event) => {
      console.log('Document clicked');
      ulRef.current.style.display = 'none';
    });
  }, []);
    return(
        <div className="search-bar-dropdown">
            <input id="searchbar" type="text" className="form-control" placeholder="Search" ref={inputRef} onChange={onInputChange}></input>
            <ul id="results" className="list-group" ref={ulRef}>
                {options.map((option, index) => {
                    return(
                        <button 
                            type="button" 
                            key={index} 
                            className="list-group-item list-group-item-action"
                            onClick={(e) => {
                                inputRef.current.value=option;
                            }}
                        >
                            {option}
                        </button>
                    )
                })}        
            </ul>
            <Link to={{
            pathname: "/Details",
            state: {stateParam: options}
            }}>
                <button className='btn btn-primary'>Search</button>
            </Link>
        </div>
    )
}



export default SearchbarDropdown;