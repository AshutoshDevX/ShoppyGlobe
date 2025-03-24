import React from 'react'
import {FaStar,FaStarHalf} from 'react-icons/fa'
import { addToCart } from '../redux/cartSlice'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router'


const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const handleAddToCart = (e)=>{
      e.stopPropagation()
      e.preventDefault()
      dispatch(addToCart(product));
      alert("Product added Successfully")
    }
    
  return (
    <Link to={`/product/${product.id}`}>
      <div className='bg-white p-4 shadow rounded relative border border-gray-200
           transform transition-transform duration-300 hover:scale-105'>
        <img src={product.images[0]} 
        alt={product.title}
        className='w-full h-48 object-contain mb-4'/>
        <h3 className='text-lg h-13 font-semibold'>{product.title}</h3>
        <p className='test-gray-500'>₹{((product.price)*80).toFixed()}</p>
        <div>
          
        </div>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>   
            <FaStar className='text-yellow-500'/>
            {
                product.rating>4.5&&<FaStarHalf className='text-yellow-500'/>
            }
        </div>
        <div 
          className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-blue-600
          group text-white text-sm rounded-full hover:w-32 hover:bg-blue-700 transition-all'
          onClick={handleAddToCart}>
            <span className='group-hover:hidden'>+</span>
            <span className='hidden group-hover:block'>Add to cart</span>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard