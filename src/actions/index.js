


export  const storeDate = (startDate,endDate,days) => {
    return {
        type:'storeDate',
        startDate,
        endDate,
        days
    }
    
}

export  const increment = () => {
    return {
        type:'increment'
    }
}

