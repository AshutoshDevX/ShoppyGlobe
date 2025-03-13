import React from 'react'
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems=[
        {
            icon: <FaShippingFast className="text-3xl text-blue-600"/>,
            title: 'Free Shipping',
            description: 'Get your orders delivered with no extra cost',
        },
        {
            icon: <FaHeadset className="text-3xl text-blue-600"/>,
            title: 'Support 24/7',
            description: 'We are here to assist you anytime',
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-blue-600"/>,
            title: '100% Money Back',
            description: 'Full refund if you are not satisfied',
        },
        {
            icon: <FaLock className="text-3xl text-blue-600"/>,
            title: 'Payment Secure',
            description: 'Your payment information is safe with us',
        },{
            icon: <FaTag className="text-3xl text-blue-600"/>,
            title: 'Discount',
            description: 'Enjoy the best prices on our products',
        },
    ]
  return (
    <div className="pb-8 pt-12 my-20">
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
            {infoItems.map((item,index)=>
              <div key={index} className="bg-white flex flex-col items-center text-center p-4 border border-gray-200 rounded-lg shadow-md
              transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                {item.icon}
                <h3 className="mt-4 text-x font-semibold">{item.title}</h3>
                <p className='mt-2 text-gray-400'>{item.description}</p>
              </div>
            )}
        </div>
    </div>
  )
}

export default InfoSection