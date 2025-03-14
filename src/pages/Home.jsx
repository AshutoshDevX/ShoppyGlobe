import { Categories } from '../assets/Categories'
import HeroImage from "../assets/Images/hero.webp"
import CategorySection from '../components/CategorySection'
import InfoSection from '../components/InfoSection'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'


const Home = () => {
    const products = useSelector(state => state.product);

    return (
        <div className='bg-stone-40 mt-4 px-4 md:px-16 lg:px-24 py-4 text-[16px]'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-10'>
                <div className='w-full md:w-3/12 '>
                    <div className='bg-blue-600 text-white  font-bold px-2 py-2.5'>Shop By Categories</div>
                    <ul className='space-y-4 bg-white p-3 border border-gray-200'>
                        {Categories.map((category, index) =>
                            <li key={index} className='flex items-center font-medium '>
                                <div className="w-3 h-3 border border-stone-800 rounded-full mr-2"></div>
                                {category}
                            </li>
                        )}
                    </ul>
                </div>
                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-160 relative'>
                    <img src={HeroImage} alt="hero-img" className='h-full w-full' />
                </div>
            </div>
            <InfoSection />
            <CategorySection />
            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-bold mb-6  text-center">Top Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
                    {products.products.slice(0, 5).map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home