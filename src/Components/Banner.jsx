import React,{useState} from 'react';
import DatePicker from './DatePicker'
import { Button } from '@material-ui/core';

function Banner({title, subtitle, children}) {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <>
       
        <div className="banner">
            <h1> {title} </h1>
            <div></div>
            <p> {subtitle} </p>
            {children}
            
        </div>
        </>
    )
}

export default Banner
