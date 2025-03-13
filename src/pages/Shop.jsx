import React from 'react'
import {useSelector} from 'react-redux'
import ProductCard from '../components/ProductCard'
import useFetchProducts from '../customhooks/useFetchProducts'
const Shop = () => {
    const {loading,error}= useFetchProducts();
    const products= useSelector(state=>state.product)
    
    if(loading){
        return <div className='w-full h-200 flex justify-center items-center'><p className='text-2xl font-bold'>Loading...</p></div>
    }
    else if(error){
        return <div>Error: {error}</div>
    }
    else{
        return (
                <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 text-[18px]">
                <h2 className="text-2xl font-bold mb-6  text-center">All Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {products.products.map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
            </div>
            
        )
    }
}

export default Shop