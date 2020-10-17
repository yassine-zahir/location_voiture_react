import React,{useState,useEffect} from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Vehicle from '../Components/Vehicle';
import VehiclesFilter from '../Components/VehiclesFilter';
import VehicleContainer from  '../Components/VehicleContainer';
import VehiclesList from '../Components/VehiclesList';


function Vehicles() {


    // const [vehicles, setVehicles] = useState([]);
    // const url='http://localhost/laravel-location-voiture/public/api/vehicles';
    
    // useEffect(() => {

    //     async function fetchData(){
    //         const request = await axios.get(url);
    //         setVehicles(request.data);
    //         return request;
        
    //     }
    //     fetchData();
        
    // }, []);

   


    return (
        <>
        <Hero hero="VehiclesHero">
            <Banner title="Our Vehicles" >
                <Link to='/' className="btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
       <VehicleContainer  />
       
        
        </>
    )
}

export default Vehicles
