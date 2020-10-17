

import {Link, useParams} from 'react-router-dom';
import {VehicleContext} from '../Context';
import DatePicker from '../Components/DatePicker';
import {connect,useSelector,useStore} from 'react-redux'

import React from 'react'
import date from '../reducers/storeDate';

function Resevation() {
    const store = useStore();
    
    // const date = useSelector(state=>state.date)
    const getStartDate = () => {
        const data = store.getState();
        return console.log(data.storeDate.startDate)
    }

    
   

    const data = () => { 
        const start = getStartDate();
        return console.log(start)
    }
    
    return (
        <div>
             <p>Pick your date </p><DatePicker />
            <div className="booking_details">
               <div className="booking_details_vehicle">
                   <h2>Booking Details</h2>
                    <article className="info">
                     <h3>Time and Duration</h3>

                      <h6>Pick-up: </h6>
                      <h6>Return:  </h6>                       
                      <h6>Rental Duration:  </h6>
                    <button onClick={data}>check</button>
                    
                   </article>
                </div>
               <div className="booking_details_price">

               </div>
             </div>
        </div>
    )
}

export default Resevation


// export default class Resevation extends Component {
//     constructor(props){
//         super(props)
        
//     }
//     state={
//         statDate:null,
//         endDate:null,
//         nbrDays:0
//     }
//     date = useSelector(state=>state.date)
   
//     render() {

       
//         return (
//             <div>
//             <p>Pick your date </p><DatePicker />
//             <div className="booking_details">
//                 <div className="booking_details_vehicle">
//                     <h2>Booking Details</h2>
//                     <article className="info">
//                         <h3>Time and Duration</h3>

//                         <h6>Pick-up: {this.state.startDate}</h6>
//                         <h6>Return: {this.state.endDate} </h6>
//                         <h6>Rental Duration: {this.state.nbrDays} </h6>
                        
                        
                    
//                     </article>
//                 </div>
//                 <div className="booking_details_price">

//                 </div>
//             </div>
//             </div>
//         )
//     }
// }




