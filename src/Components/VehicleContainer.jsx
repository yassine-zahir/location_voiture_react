import React from 'react';
import VehiclesFilter from './VehiclesFilter';
import VehiclesList from './VehiclesList';
import Loading from './Loading';
import {  withVehicleConsumer } from '../Context'

function VehicleContainer({context}) {
    const { loading, sortedVehicles, vehicles} = context;
    console.log(vehicles)
    if(loading){
        return <Loading/>
    }
    return (
       
                
                   
                   
                        <div>
                            <VehiclesFilter vehicles={vehicles}/>
                            <VehiclesList vehicles={sortedVehicles}/>
                        </div>
             
                
         

        
    )
}

export default withVehicleConsumer(VehicleContainer)






















