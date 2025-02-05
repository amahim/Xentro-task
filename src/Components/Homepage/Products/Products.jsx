import React from 'react';
import useProducts from '../../Hooks/UseProducts';
import ShowProducts from './ShowProducts';

const Products = () => {

    const [products] = useProducts()

    return (
        <div>
            <h1 className='py-10 text-black text-center text-xl md:text-2xl lg:text-3xl font-bold'>All Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    products.map(product => <ShowProducts product={product} key={product.id}/>)
                }
            </div>
        </div>
    );
};

export default Products;