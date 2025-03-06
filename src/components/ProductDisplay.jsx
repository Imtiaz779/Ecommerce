import { Star } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../Context/ShopContext'

const ProductDisplay = (props) => {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const {product} = props;
    const randomRating = getRandomInt(10,1500);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-10 px-6 md:px-0'>
        <div className='flex md:1/2 gap-5'>
            <div className='flex flex-col justify-center gap-2.5 md:h-[480px] lg:h-[640px]'>
                <img src={product.image} alt="" className='md:h-[100px] lg:h-[130px] w-[100px]'/>
                <img src={product.image1} alt="" className='md:h-[100px] lg:h-[130px] w-[100px]'/>
                <img src={product.image2} alt="" className='md:h-[100px] lg:h-[130px] w-[100px]'/>
                <img src={product.image3} alt="" className='md:h-[100px] lg:h-[130px] w-[100px]'/>
            </div>
            <div>
                <img src={product.image} alt="" className='md:h-[480px]lg:h-[640px]' />
            </div>
        </div>
        <div className='flex md:1/2 flex-col mt-8 md:mt-0'>
        <h1 className='text-[#3d3d3d] text-4xl font-bold'>{product.name}</h1>
        <div className='flex items-center gap-1 text-[#1c1c1c] text-lg mt-4'>
            <Star fill="red"/>
            <Star fill="red"/>
            <Star fill="red"/>
            <Star fill="red"/>
            <Star fill="gray"/>
            <p >{randomRating}</p>
        </div>
        <div className='flex gap-5 font-semibold items-center my-5'>
            <div className='text-gray-500 text-xl line line-through'>${product.old_price}</div>
            <div className='text-red-500 text-4xl'>${product.new_price}</div>
        </div>

        <div className='font-mono'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis, labore suscipit, accusantium accusamus ipsam illo possimus in deleniti adipisci hic consectetur officia doloremque eaque, fugiat corporis veniam quia voluptas.
        </div>

            <div>
        <h1 className='font-semibold text-black text-2xl mt-4'>Select Size</h1>
        <div className='flex gap-4 items-center my-4'>
            <div className='border bg-gray-200 p-4'>S</div>
            <div className='border bg-gray-200 p-4'>M</div>
            <div className='border bg-gray-200 p-4'>L</div>
            <div className='border bg-gray-200 p-4'>XL</div>
            <div className='border bg-gray-200 p-4'>XXL</div>
        </div>
      </div>
      <Link>
      <button className='bg-red-500 text-white px-6 py-3 my-4 w-max'>
        Add to Cart
      </button>
      </Link>
      <p><span>Category</span></p>
        
        </div>
    </div>
  )
}

export default ProductDisplay