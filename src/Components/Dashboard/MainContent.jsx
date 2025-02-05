import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {
    return (
        <div className="w-4/5 mx-auto py-5 md:py-10">
            <Outlet />
        </div>
    );
};

export default MainContent;