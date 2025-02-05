import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';


const Home = () => {

    
    return (
        <div className='w-4/5 mx-auto py-5'>
            <Outlet />
        </div>
    );
};

export default Home;