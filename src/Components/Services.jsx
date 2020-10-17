import React, { Component } from 'react';
import Title from './Title'; 
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

export default class Services extends Component {
    state={
        services:[
        {
            icon:<EmojiTransportationIcon/>,
            title: "Quality",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, accusamus."
        },
        {
            icon:<DirectionsCarIcon/>,
            title: "Flexibility",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, accusamus."
        },
        {
            icon:<AirportShuttleIcon/>,
            title: "Free Shuttle",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, accusamus."
        },
        {
            icon:<EventAvailableIcon/>,
            title: "Availability 24/24",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, accusamus."
        }
     ]
    }

    render() {
        return (
            <section className="services">
                <Title title="About Us"/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                        <article key={index} className="service">
                            <span> {item.icon} </span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                        </article>
                        );
                    })}
                </div>
            </section>
            
        )
    }
}
