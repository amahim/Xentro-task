
const ShowProducts = ({product}) => {

    const {id,name, data} = product;

    return (
        <div className='rounded-xl shadow-xl bg-slate-100 w-[300px] md:w-[350px] h-[100px]'>
            <p className='mt-5 text-[#141414b2] font-medium text-center text-xl md:text-2xl'>{name}</p>
        </div>
    );
};

export default ShowProducts;