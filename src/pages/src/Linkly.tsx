import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

const Linkly = () => {
  const handleLoginClick = () => {
    // Implement login functionality
  };

  const handleRegisterClick = () => {
    // Implement register functionality
  };

  const handleShortenClick = () => {
    // Implement shorten link functionality
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="absolute inset-0 w-full h-full">
          {/* Swirl Background */}
        </div>
        <div className="flex justify-between items-center py-4 px-6">
          <div className="text-white text-3xl">Linkly</div>
          <div className="flex space-x-4">
            <button
              onClick={handleLoginClick}
              className="bg-gray-800 text-gray-400 border border-gray-700 rounded-full px-6 py-2 shadow-md"
            >
              Login
            </button>
            <button
              onClick={handleRegisterClick}
              className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md"
            >
              Register Now
            </button>
          </div>
        </div>
        <div className="text-center mt-12">
          <h1 className="text-4xl text-white mb-4">Shorten Your Loooong Links :)</h1>
          <p className="text-gray-400 mb-8">
            Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              placeholder="Enter the link here"
              className="bg-gray-800 text-gray-400 rounded-full px-4 py-2 w-1/2"
            />
            <button
              onClick={handleShortenClick}
              className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-md"
            >
              Shorten Now!
            </button>
          </div>
          <p className="text-gray-400 mt-4">
            You can create 05 more links. Register Now to enjoy Unlimited usage
          </p>
        </div>
        <div className="mt-12">
          <div className="bg-gray-800 rounded-t-lg p-4 flex justify-between text-gray-400 font-bold">
            <span>Short Link</span>
            <span>Original Link</span>
            <span>QR Code</span>
            <span>Clicks</span>
            <span>Status</span>
            <span>Date</span>
          </div>
          <div className="bg-gray-700 p-4 flex justify-between items-center text-gray-400">
            <span>https://linkly.com/Bn41aCOlnxj</span>
            <span>https://www.twitter.com/tweets/8erelCoihu/</span>
            <span>
              <FontAwesomeIcon icon={faQrcode} />
            </span>
            <span>1313</span>
            <span className="text-green-500">Active</span>
            <span>Oct - 10 -2023</span>
          </div>
          <div className="bg-gray-700 p-4 flex justify-between items-center text-gray-400">
            <span>https://linkly.com/Bn41aCOlnxj</span>
            <span>https://www.youtube.com/watch?v=8J7ZmH0lXuk</span>
            <span>
              <FontAwesomeIcon icon={faQrcode} />
            </span>
            <span>4313</span>
            <span className="text-yellow-500">Inactive</span>
            <span>Oct - 08 -2023</span>
          </div>
          {/* Additional rows... */}
        </div>
      </div>
    </div>
  );
};

export default Linkly;