import React, { Component } from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link, useParams} from 'react-router-dom';
import {VehicleContext} from '../Context'

export default class  extends Component {
    constructor(props){
        super(props)
        
        this.state ={
            id:this.props.match.params.id
            
        }
    }
   
    static contextType = VehicleContext;
    render() {
        const {getVehicle} = this.context;
        const vehicle = getVehicle(this.state.id );
        console.log(vehicle)
        if(!vehicle){
            return <div className="error">
                <h3>
                    no such vehicles could be found...
                </h3>
                <Link to='/Vehicles' className='btn-primary'>
                    Back to our Vehicles
                </Link>
            </div>
        }

        const {id,model,mark,description,fuel,category,gearbox,price} = vehicle

        return (
            <>
            <Hero hero='VehiclesHero'>
               <Banner title= {`${mark} ${model}`}>
                   <Link to="/Vehicles" className="btn-primary">
                       Back to our Vehicles
                   </Link>
               </Banner>
            </Hero>
            <section className="single-vehicle">
                <div className="single-vehicle-images">
                    <img src={vehicle.image_url} alt={vehicle.model}/>
                    <article className="info">
                        <h3>Info</h3>

                        <h6>Price: {price} MAD</h6>
                        <h6>Fuel: {fuel} </h6>
                        <h6>GearBox: {gearbox} </h6>
                        <h6>Category: {category} </h6>
                        <Link to={`/Reservation/${id}`} className="btn-primary">
                            Rent Me
                        </Link>
                    
                    </article>
                
                </div>
                
                <div className="single-vehicle-info">
                    <article className="desc">
                        <h3>Details</h3>
                        <p> {description} </p>

                    </article>
                    
                </div>
                
            </section>

            

            </>
        )
    }
}
