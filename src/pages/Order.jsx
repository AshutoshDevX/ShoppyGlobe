import React from 'react'
import { useNavigate } from 'react-router'

const Order = ({order}) => {
    const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
        <p>Your Order has been palced successfully you will recieve an email confirmation shortly</p>
        <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-100">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <p>Order Number: {order.orderNumber}</p>
            <div className="mt-4">
                <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
                <p>{order.shippingInformation.name}</p>
                <p>{order.shippingInformation.address}</p>
                <p>{order.shippingInformation.city}</p>
                <p>{order.shippingInformation.zip}</p>
            </div>
            <div className='mt-4'>
                <h3 className="text-md font-semibold mb-2">Items Ordered</h3>
                {order.products.map(product=>
                 <div key={product.id} className="flex justify-between mt-2">
                    <p>{product.title} (x{product.quantity})</p>
                    <p>{((product.price)*80) * product.quantity}</p>
                 </div>
                )}
            </div>
            <div className="mt-4 flex justify-between">
                <span>Total Price:</span>
                <span className="font-semibold">₹{((order.totalPrice)*80).toFixed(2)}</span>
            </div>
            <div className="mt-6">
                <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600"
                >Track Order</button>
                <button className="ml-4 bg-blue-600 text-white py-2 px-4 hover:bg-blue-800"
                onClick={()=>navigate('/')}>Continue Shopping</button>
            </div>
        </div>
    </div>
  )
}

export default Order