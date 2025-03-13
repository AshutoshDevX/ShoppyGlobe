import React from 'react'
import grocery from "../assets/Images/grocery.jpg"
import furniture from "../assets/Images/furniture.png"
import Kid from "../assets/Images/beauty.avif"
const categories = [
    {
        title:"Grocery",
        imageUrl:grocery,
    },
    {
        title:"Furniture",
        imageUrl:furniture,
    },
    {
        title:"Beauty",
        imageUrl:Kid
    },
]
const CategorySection = () => {

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category,index)=>
          <div key={index} className="relative h-80 transform transition-transform duration-300 hover:scale-105  cursor-pointer">
            <img src={category.imageUrl} alt={`${category.title}-image`} className='w-full h-full object-cover rounded-lg shadow-md'/>
            <div className='absolute top-4 right-8'>
                <p className="text-2xl font-bold">{category.title}</p>
                <p className="text-gray-600">View All</p>
            </div>
          </div>
        )}
    </div>
  )
}

export default CategorySection