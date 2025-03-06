import React from 'react'
import img1 from '../assets/pexels-photo-26601197.jpg'
import img2 from '../assets/pexels-photo-6069083.jpeg'
import img3 from '../assets/pexels-photo-6051248.jpg'
import img4 from '../assets/pexels-photo-5418890.jpg'
import img5 from '../assets/pexels-photo-6069083.jpeg'
import img6 from '../assets/pexels-photo-4713356.jpg'

const MultiBanner = () => {
    return (
        <div className='bg-gray-100 m-4'>
            <div className='grid grid-cols-1 px-4 md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6 max-w-7xl mx-auto '>
                {/* first banner */}
                <div className='relative h-[250px] lg:col-span-1'>
                    <img 
                    src={img1}
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-[rgba(31,41,55,0.7)] rounded-lg  flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>
                {/* second banner */}
                <div className='relative h-[250px] md:col-span-2 '>
                    <img 
                    src={img2}
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-[rgba(31,41,55,0.6)] rounded-lg flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>
                    </div>
                </div>
                {/* third banner */}
                <div className='relative h-[250px] sm:col-span-2 md:col-span-3 lg:col-span-2'>
                    <img 
                    src={img3}
                    alt="season sale" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-[rgba(31,41,55,0.6)] flex flex-col items-center rounded-lg justify-center'>
                        <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
                        <p className='text-white my-2 text-lg'>Up to 70% Off</p>
                        <button className='text-white bg-yellow-600 px-3 py-2 hover:bg-yellow-500 rounded-md'>Shop Now</button>
                    </div>
                </div>
                {/* fourth banner */}
                <div className='relative h-[250px] col-span-1 sm:col-span-2'>
                    <img src={img4} alt="season sale" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-[rgba(31,41,55,0.5)] flex flex-col items-center rounded-lg justify-center'>
                        <h2 className='text-white text-4xl font-bold'>Season Sale</h2>
                        <p className='text-white my-2 text-lg'>Up to 70% Off</p>
                        <button className='text-white bg-red-500 px-3 py-2 hover:bg-red-600 rounded-md'>Shop Now</button>
                    </div>
                </div>
                {/* fifth banner */}
                <div className='relative h-[250px] lg:col-span-3'>
                    <img 
                    src={img5} 
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-[rgba(31,41,55,0.6)] rounded-lg  flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>Limited Offer</h2>
                    </div>
                </div>
                {/* sixth banner */}
                <div className='relative h-[250px] md:col-span-3 lg:col-span-5'>
                    <img 
                    src={img6}
                    alt="New Arrivals" 
                    className='w-full h-full object-cover rounded-lg shadow-lg' 
                    />
                    <div className='absolute inset-0 bg-[rgba(31,41,55,0.5)] rounded-lg  flex flex-col items-center justify-center'>
                        <h2 className='text-white text-2xl font-bold'>New Arrivals</h2>
                        <button className='mt-2 px-3 py-1 bg-white text-green-800 rounded-md shadow hover:bg-gray-200'>Discover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MultiBanner