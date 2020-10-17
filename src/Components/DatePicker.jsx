import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import '../CSS/DatePicker.css';
import {connect} from 'react-redux'
import { storeDate } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import {increment} from '../actions'



function App(props) {
  const [startDate, handleStartDateChange] = useState(new Date());
  const [endDate, handleEndDateChange] = useState(new Date());
    
  // To calculate the time difference of two dates 
const Difference_In_Time = endDate.getTime() - startDate.getTime(); 
  
// To calculate the no. of days between two dates 
const Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); 

// console.log(Difference_In_Days)

const date = useSelector(state=>state.date)

const dispatch = useDispatch()





  
    // console.log(data.storeDate.startDate)
  return (
      <div className="search">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker ampm={false} disablePast   value={startDate} onChange={handleStartDateChange} autoOk={true} />
                
            <DateTimePicker ampm={false} minDate={startDate}  value={startDate < endDate? endDate:startDate } onChange={handleEndDateChange} />
        </MuiPickersUtilsProvider>

        <button onClick={ () =>dispatch(storeDate(startDate,endDate,Difference_In_Days)) }>Valider</button>

        
        
    </div>
  );
}

function mapDispatchProps(dispatch){
  return {
      storeDate : () => dispatch({type:'storeDate'})
  }
}

export default connect(state => {return { data : state }},{storeDate})(App)






