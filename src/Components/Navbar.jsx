import React, { useState } from 'react';
import '../CSS/Navbar.css';
import logo from '../Images/carz.png';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';
import DatePicker from './DatePicker'
import { Button } from '@material-ui/core';

function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    const [startDate, setStartDate] = useState();
    const history=useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const callbackFunction = (childData) => {
        setStartDate({startDate: childData})
    }

    
    const handleToggle = () => {
        setIsOpen({isOpen:!isOpen})
    }

    console.log(startDate)
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to='/'>
                        <img src={logo} alt="" className="logo"/>
                    </Link>
                    <button onClick={()=>  setIsOpen(!isOpen)} type="button" className='nav-btn'><FaAlignRight className="nav-icon"/></button>
                </div>
                
                <ul className={isOpen?"nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/Vehicles'>Our Vehicles</Link>
                    </li>

                    <li>
                        <Link to='/'>Services</Link>
                    </li>

                    <li>
                        <Link to='/'>Contact Us</Link>
                    </li>

                </ul>
                   

            </div>
            <div className="banner_search">
                
                {/* <Button onClick={() => setShowSearch(!showSearch)} className="banner_searchButton" variant='outlined'>{showSearch ? "Hide" : "Search Dates"} </Button>
                {showSearch && <DatePicker parentCallback = {callbackFunction} />} */}
                
        </div>
            
        </nav>
    )
}

export default Navbar
