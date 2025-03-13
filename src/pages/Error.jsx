import React from 'react'

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-600">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-2">Page Not Found</p>
        <p className="text-gray-500 mt-4">Sorry, the page you are looking for doesn't exist.</p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default Error