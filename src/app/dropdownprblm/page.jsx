"use client"
import React, { useState } from 'react';

const Dropdown = () => {
    const [country, setCountry] = useState(0)
    console.log(country);

    const countries = [
        {
            name: "india", value: "IN" , cities: ["Kolkata", "Delhi"]
        },
        {
            name: "Nepal", value: "NP", cities: ["Kathmandu", "Selong"]
        },
        {
            name: "Bangladesh", value: "BN", cities: ["Dhaka", "Chittagong"]
        }
    ]


    return (
        <div>
            <select value={country} onChange={(e) => setCountry(e.target.value)}

            >
                {
                    countries.map((item, index) => {
                        return (<option value={index} key={index}> {item.name}</option>)
                    })
                }

            </select>

            <select value={country}>
                {
                    countries[country].cities.map((item, index) => {
                        return <option value={index} key={index}>{item} </option>
                    }) 
                }
            </select>
        </div>
    );
};

export default Dropdown;