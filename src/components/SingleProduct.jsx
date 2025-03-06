import React, { useContext } from 'react'
import { Shopcontext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from './Breadcrum'
import ProductDisplay from './ProductDisplay'
import DescriptionBox from './DescriptionBox'

const SingleProduct = () => {
    const {all_product} = useContext(Shopcontext)
    const{productId} = useParams()
    const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'>
        <Breadcrum product={product}/>
        <ProductDisplay  product={product}/>
        <DescriptionBox/>
    </div>
  )
}

export default SingleProduct