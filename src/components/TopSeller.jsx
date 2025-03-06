import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext';
import Item from './Item';

const TopSeller = () => {
      const { all_product } = useContext(Shopcontext);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-6xl lg:px-10">
         <h2 className="text-4xl font-bold tracking-tighter text-gray-900 text-center font-serif">
          Popular
        </h2>
        <p className="text-center mt-3 md:px-36 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, optio impedit eligendi voluptas dolorem esse quasi repudianda Lorem
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 ">
          {all_product.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </div>
    </div>
  )
}

export default TopSeller