import React from 'react';
import { useNavigate } from 'react-router-dom';

const Locations = ({location}) => {
    const name = location?.name;
    const navigator = useNavigate();
    
    console.log(name);

    const handleImgClick = (id) => {
        console.log(id);
        navigator('/login')
    }
    return (
        <div>
            <img onClick={ () => handleImgClick(location?.id)} className='location-imgs' src={location?.image_url} alt="" />
            <h3 style={{color: 'white'}}>{name}</h3>
        </div>
    );
};

export default Locations;