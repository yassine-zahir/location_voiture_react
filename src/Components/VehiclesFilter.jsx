import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Title from './Title';
import Vehicle from './Vehicle';
import {useContext} from 'react';
import {VehicleContext} from '../Context';

//get all unique values 

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

function VehiclesFilter() {
    const context = useContext(VehicleContext);
    const {
        vehicles,handleChange,category,fuel,price,minPrice,maxPrice,BVA,BVM
    } = context;
 
    
    //get unique categories
    let categories = getUnique(vehicles,'category');
    // add all
    categories = ['all',...categories];
    //map to jsx
    categories = categories.map((item,index) =>{
        return <option value={item} key={index}> {item} </option>
    });

    let fuels = getUnique(vehicles,'fuel');
    
    fuels = ['all',...fuels];

    fuels = fuels.map((item,index) =>{
        return <option value={item} key={index}> {item} </option>
    });
    

 
    return (
        <>
        <section className="filter-container">
            <Title title="Filter"/>
            <form className='filter-form'>
                {/* category */}
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select name="category" 
                            id="category" 
                            value={category} 
                            className="form-control"
                            onChange={handleChange}
                    >
                        {categories}
                    </select>
                </div>
                {/*end category */}
                {/* fuel */}
                <div className="form-group">
                    <label htmlFor="fuel">fuel</label>
                    <select name="fuel" 
                            id="fuel" 
                            value={fuel} 
                            className="form-control"
                            onChange={handleChange}
                    >
                        {fuels}
                    </select>
                </div>
                {/* end fuel */}
                {/* price */}
                <div className="form-group">
                    <label htmlFor="price">Vehicle Price MAD{price} </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                </div>
                {/* end price */}
                {/* gearbox */}
                <div className="from-group">
                    <div className="single-extra">
                        <input type="checkbox" name="BVA" id="BVA" checked={BVA} onChange={handleChange} />
                        <label htmlFor="BVA">BVA</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="BVM" id="BVM" checked={BVM} onChange={handleChange} />
                        <label htmlFor="BVM">BVM</label>
                    </div>
                </div>
                {/* end gearbox */}
            </form>
            
        </section>
        </>
    )
}

export default VehiclesFilter
