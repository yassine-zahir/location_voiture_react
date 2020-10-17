import React, { Component } from 'react';
import Title from './Title';
import {Link} from 'react-router-dom';
import {VehicleContext} from '../Context'
 
export default class FeaturedVehicles extends Component {
    static contextType= VehicleContext
    
    render() {
        const { vehicles : vec} = this.context;

        console.log(vec)

        return (
            

            <section className="featured-vehicles">
                <Title title="featured Vehicles"/>
                <div className="featured-vehicles-center">
                    <article className="vehicle">
                        <div className="img-container">
                            <img src="https://www.topgear-magazine.fr/wp-content/uploads/2019/10/Essai-Peugeot-208-04.jpg" alt="citadine" />
                            <div className="price-top">
                                <h6>MAD 99</h6>
                                <p>From</p>
                            </div>
                            <Link to='/Vehicles' className="btn-primary vehicle-link">
                                Check
                            </Link>
                        </div>
                        <p className="vehicle-info">Citadine</p>
                        
                    </article>

                    <article className="vehicle">
                        <div className="img-container">
                            <img src="https://www.turbo.fr/sites/default/files/styles/article_690x405/public/2019-07/essai-comparatif-mercdes-classe-a-berline-vs-cla-coupe.png?itok=IxchXXUC" alt="Sedan" />
                            <div className="price-top">
                                <h6>MAD 199</h6>
                                <p>From</p>
                            </div>
                            <Link to='/Vehicles' className="btn-primary vehicle-link">
                                Check
                            </Link>
                        </div>
                        <p className="vehicle-info">Sedan</p>
                        
                    </article>

                    <article className="vehicle">
                        <div className="img-container">
                            <img src="https://images.caradisiac.com/logos/2/1/7/9/242179/S0-bientot-une-surtaxe-sur-les-voitures-de-luxe-163206.jpg" alt="Luxe" />
                            <div className="price-top">
                                <h6>MAD 599</h6>
                                <p>From</p>
                            </div>
                            <Link to='/Vehicles' className="btn-primary vehicle-link">
                                Check
                            </Link>
                        </div>
                        <p className="vehicle-info">Luxe</p>
                        
                    </article>
                </div>
                
            </section>
        )
    }
}
