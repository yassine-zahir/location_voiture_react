import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {VehicleContext} from '../Context'

export default class Vehicle extends Component {
    
    static contextType= VehicleContext;


    render() {
        const {id, registration_number, description, mark, model, category, image_url, fuel, price, gearbox} = this.props.vehicle;
        return (
                
                <article className="vehicle">
                        <div className="img-container">
                            <img src={image_url} alt={model} />
                            <div className="price-top">
                                <h6>MAD {price} </h6>
                                <p>From</p>
                            </div>
                            <Link to={`/SinglePage/${id}`} className="btn-primary vehicle-link">
                                Check
                            </Link>
                        </div>
                        <p className="vehicle-info">{mark} {model} </p>
                        
                 </article>
        
        )
    }
}
