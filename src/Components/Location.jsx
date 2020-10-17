import React from 'react';
import Iframe from 'react-iframe';
import Title from './Title';

function Location() {
    return (
        <section className="featured-vehicles">
            <Title title="Find Us"/>
                <div className="location">
                    
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.504271837486!2d-6.953282785406962!3d33.92815608063982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda70da3bcdc944f%3A0xc12c004be4382ac5!2sR%C3%A9sidence%20Roches%20Blanches%202!5e0!3m2!1sen!2sma!4v1602110628423!5m2!1sen!2sma" width="100%" height="500" frameborder="2" style="border:2;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                </div>
        </section>
    )
}

export default Location
