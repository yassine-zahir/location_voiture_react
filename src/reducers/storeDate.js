const date = (state={}, action) => {
    
    switch(action.type){
        case 'storeDate' : 
        return {...state, startDate: action.startDate, endDate:action.endDate,days:action.days, id: Math.random()}
        default:
        return state
    }


    console.log(state)
    
}


export default date;