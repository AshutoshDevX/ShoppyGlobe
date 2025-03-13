import React from 'react'
import { useSelector } from 'react-redux'
import useFetchProducts from '../customhooks/useFetchProducts'
import ProductCard from '../components/ProductCard'
import NoProductFound from '../assets/Images/No_Product_Found.png'
const FilterData = () => {
    const{loading,error} = useFetchProducts()
    const filterProducts = useSelector(state=>state.product.filteredData)
    if(loading){
        return <div className='w-full h-200 flex justify-center items-center'><p className='text-4xl font-bold'>Loading...</p></div>
    }
    else if(error){
        return <div>Error: {error}</div>
    }
    else{
        return (
                <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 text-[18px]">
                {filterProducts.length>0?(<>
                <h2 className="text-2xl font-bold mb-6  text-center">All Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {filterProducts.map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
                </>):<div className="flex justify-center"><img src={NoProductFound} alt="no product found"/></div>}
                
            </div>
            
        )
    }
}

export default FilterData