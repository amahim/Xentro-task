import React from 'react';

const ShowAllProducts = ({product}) => {
    const {id,name} = product
    return (
        <div className='bg-slate-500 shadow-xl rounded-xl text-white p-2'>
            <p>{name}</p>
        </div>
    );
};

export default ShowAllProducts;