import React, { useState } from 'react';
import HomeLayout from './HomeLayout';
import { Outlet } from 'react-router-dom';


const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div className='w-4/5 mx-auto py-5'>
            <HomeLayout  loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            <Outlet/>
            {/* <Outlet context={{ loggedIn, setLoggedIn }} /> */}
        </div>
    );
};

export default Home;