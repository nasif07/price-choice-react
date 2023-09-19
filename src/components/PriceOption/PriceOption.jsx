import Feature from '../Feature/Feature';

const PriceOption = (option) => {
    const { membership_type, price, features } = option.option;
    // console.log(option.option);
    return (
        <div className='bg-blue-500 rounded-md p-4 text-white flex flex-col'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{membership_type}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900 '>Buy Now</button>

        </div>
    );
};

export default PriceOption;