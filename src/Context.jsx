import React, { Component } from 'react';
import axios from 'axios';

const VehicleContext = React.createContext();

class VehicleProvider extends Component {
    state={
        vehicles:[],
        sortedVehicles:[],
        featuredVehicles:[],
        loading: true,
        category:'all',
        fuel:'all',
        price: 0,
        minPrice:0,
        MaxPrice:0,
        BVA:false,
        BVM:false,
        nbr_days:0,
        
    }
    //getData 

   async componentDidMount(){
        const url = 'http://localhost/laravel-location-voiture/public/api/vehicles';

        let response=await fetch(url);
        const data = await response.json();
        let maxPrice = Math.max(...data.map(item => item.price));
        this.setState(({
            vehicles: data,
            sortedVehicles:data,
            loading:false,
            price:maxPrice,
            maxPrice:maxPrice,
        }))
        
     }
     

     
     
     //getVehicle

     getVehicle = (id) =>{
         let tempVehicles = [...this.state.vehicles];
         const vehicle = tempVehicles.find((vehicle) => vehicle.id == id);
         return vehicle;
     }

     handleChange = event => {
         const target = event.target;
         const value = target.type === 'checkbox' ? target.checked:target.value;
         const name = event.target.name;
        
        this.setState({
            [name]:value,
        },this.filterVehicles)
        
     }

     filterVehicles = () => {
         let {
             vehicles,category,price,fuel,BVA,BVM
         } = this.state
         //all vehicles
         let tempVehicles = [...vehicles];
         // transform value
         price = parseInt(price);
         
         //filter by category
         if (category !== 'all'){
             tempVehicles = tempVehicles.filter(vehicle => vehicle.category === category)
         }
         //filter by fuel
         if (fuel !== 'all'){
            tempVehicles = tempVehicles.filter(vehicle => vehicle.fuel === fuel)
        }
        //filter by price
        tempVehicles = tempVehicles.filter(vehicle => vehicle.price < price)
        //filter by gearbox
        if(BVA){
            tempVehicles = tempVehicles.filter(vehicle => vehicle.gearbox === "BVA")
        }
        if(BVM){
            tempVehicles = tempVehicles.filter(vehicle => vehicle.gearbox === "BVM")
        }
        
        //change state
         this.setState({
             sortedVehicles:tempVehicles
         })

     }

     //getnbrdays

     getNbrDays = (nbr) =>{
        const Difference_In_Days = Math.round(nbr / (1000 * 3600 * 24)); 
        this.setState({
            nbr_days:Difference_In_Days
        })
         console.log(this.state.nbr_days)
     }

 
    
    render() {
        return (
            <VehicleContext.Provider value={{
                ...this.state,
                getVehicle: this.getVehicle,
                handleChange: this.handleChange,
                getNbrDays:this.getNbrDays
                }}>
                {this.props.children}
            </VehicleContext.Provider>
        )
    }
}


const VehicleConsumer = VehicleContext.Consumer;

export function withVehicleConsumer(Component){
    return function ConsumerWrapper(props){
        return <VehicleConsumer>
            {value => <Component {...props} context={value}/>}
        </VehicleConsumer>
    }
}

export { VehicleProvider, VehicleConsumer, VehicleContext}