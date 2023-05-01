/* eslint-disable no-unused-vars */
import React from 'react';
import sajek from '../../../assets/images/Sajek.png'
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Locations from './locations';

const Home = () => {
    const locations = useLoaderData();
    
    return (
        <div className='home-container'>
            <div>
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <button className='btn-login'>Booking</button>
            </div>
            {
                locations.locations.map(location => <Locations 
                    location={location}
                    key={location.id}
                    ></Locations>)
            }
            
        </div>
    );
};

export default Home;