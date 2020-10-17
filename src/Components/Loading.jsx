import React from 'react';
import loadingGif from '../Images/loading-arrow.gif'

function Loading() {
    return (
        <div className="loading">
            <h4>Vehicles Data Loading...</h4>
            <img src={loadingGif} alt=""/>
            
        </div>
    )
}

export default Loading
