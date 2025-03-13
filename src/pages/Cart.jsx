import { useDispatch, useSelector } from 'react-redux'
import EmptyCart from '../assets/Images/empty.png'
import { FaTrashAlt } from 'react-icons/fa';
import {useState} from 'react'
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router';
const Cart = () => {
    const cart = useSelector(state=>state.cart);
    const [address,setAddress] = useState('main street, 40090');
    const [isModalOpen,setIsModalOpen] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
   <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
     {cart.products.length>0?
     <div>
        <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
            <div className="md:w-2/3">
                <div className='flex justify-between border-b border-gray-300 items-center mb-4  font-semibold'>
                    <p>Products</p>
                    <div className="flex space-x-8">
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                        <p>Remove</p>
                    </div>
                </div>
                <div>
                    {cart.products.map((product)=>
                     <div
                     key={product.id}
                     className="flex items-center justify-between p-3 border-b border-gray-300"
                     >
                        <div className="md:flex items-center space-x-1">
                            <img src={product.image} 
                            alt={product.title}
                            className="w-16 h-16 object-contain rounded"/>
                            <div className="flex-1 ml-1">
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                            </div>
                        </div>
                        <div className="flex space-x-12 items-center mr-3">
                            <p>₹{((product.price)*80).toFixed()}</p>
                            <div className="flex items-center justify-center border border-gray-300">
                                <button
                                className="text-x font-bold px-1 border-r border-gray-300"
                                onClick={()=>product.quantity<2?dispatch(removeFromCart(product.id)):dispatch(decreaseQuantity(product.id))}>
                                    -
                                </button>
                                <p className="text-x px-1">{product.quantity}</p>
                                <button
                                className="text-x px-1 border-l border-gray-300"
                                onClick={()=>dispatch(increaseQuantity(product.id))}>
                                    +
                                </button>
                            </div>
                            <p>₹{((product.quantity*product.price)*80).toFixed()}</p>
                            <button
                             className="text-gray-700 hover:text-gray-900"
                             onClick={()=>dispatch(removeFromCart(product.id))}
                            >
                                <FaTrashAlt/>
                            </button>
                        </div>
                     </div>
                    )}
                </div>
            </div>

            <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border border-gray-300'>
                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                <div className='flex justify-between mb-5 border-b pb-1 border-gray-300'>
                    <span className="text-sm">Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                </div>
                <div className='mb-4 border-b pb-2 border-gray-300'>
                    <p>Shipping:</p>
                    <p className='ml-2'>
                        Shipping to{" "}
                        <span className='font-bold'>{address}</span>
                    </p>
                    <button
                     className="text-blue-500 hover:underline mt-1 ml-2"
                     onClick={()=>setIsModalOpen(true)}>change address</button>
                </div>
                <div className="flex justify-between mb-4">
                    <span>Total Price:</span>
                    <span>₹{((cart.totalPrice)*80).toFixed()}</span>
                </div>
                <button
                 className="w-full bg-blue-600 text-white py-2 hover:bg-blue-800"
                 onClick={()=>navigate('/checkout')}
                >Proceed to Checkout</button>
            </div>
        </div>
        
        <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        >
            <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen}/>
        </Modal>
     </div>
    :<div className="flex justify-center p-10">
        <img src={EmptyCart} alt="" className="h-120"/>
    </div>}
   </div>
  )
}

export default Cart