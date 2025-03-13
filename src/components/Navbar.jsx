import React, { useState } from 'react'
import { Link, useNavigate } from "react-router"
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import Register from './Register'
import Modal from './Modal'
import { setSearchTerm } from '../redux/productSlice'


const Navbar = () => {
    const products = useSelector(state=>state.cart.products)
    const [isModalOpen,setIsModalOpen] = useState(false)
    const [isLogin,setIsLogin] = useState(true)
    const [search,setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = e=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }

    const openSignUp = ()=>{
        setIsLogin(false)
        setIsModalOpen(true)
    }
    const openLogin = ()=>{
        setIsLogin(true)
        setIsModalOpen(true)
    }
    return (
        <nav className="bg-white shadow-md text-[16px]">
            <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4  flex justify-between item-center">
                <div className="text-lg mr-10 font-bold">
                    <Link to="/" className='text-2xl'>ShoppyGlobe</Link>
                </div>
                <div className="relative flex-1 mx-4" >
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Search Product" className='w-full border border-gray-300 outline-none py-2 px-4' 
                        onChange={e=>setSearch(e.target.value)}/>
                        <FaSearch className='absolute top-3 right-3 text-black-500' />
                    </form>
                </div>
                <div className="flex items-center space-x-4 ml-10 relative">
                    <Link to="/cart">
                        <FaShoppingCart className='text-lg' />
                        {products.length>0&&(
                            <span className="absolute top-1 text-xs p-2 h-3 w-3 left-3 bg-blue-600 rounded-full flex justify-center items-center text-white">
                                {products.length}
                            </span>
                        )}
                    </Link>
                    <button className='hidden md:block'
                    onClick={()=>setIsModalOpen(true)}>
                        Login | Register
                    </button>
                    <button className='block md:hidden'>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-10 py-4 font-bold'>
                <Link to="/" className='hover:text-blue-800 transition duration-400'>Home</Link>
                <Link to="/shop" className='hover:text-blue-800 transition duration-400'>Shop</Link>
                <Link to="/" className='hover:text-blue-800 transition duration-400'>Contact</Link>
                <Link to="/" className='hover:text-blue-800 transition duration-400'>About</Link>
            </div>

            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                {isLogin?<Login openSignUp={openSignUp}/>:<Register openLogin={openLogin}/>}
            </Modal>
        </nav>
    )
}

export default Navbar