import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const URL: React.FC = () => {
  const handleShortenClick = () => {
    // Implement URL shortening logic here
    console.log('Shorten button clicked');
  };

  const handleAutoPasteToggle = () => {
    // Implement auto-paste toggle logic here
    console.log('Auto Paste toggled');
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex items-center justify-between bg-gray-800 rounded-full shadow-md p-4">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faLink} className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Enter the link here"
            className="bg-transparent text-gray-400 text-lg font-light focus:outline-none"
          />
        </div>
        <button
          onClick={handleShortenClick}
          className="bg-blue-600 text-white rounded-full py-2 px-4 shadow-md hover:bg-blue-700 transition"
        >
          Shorten Now!
        </button>
      </div>
      <div className="mt-8">
        <div className="flex items-center justify-center space-x-2">
          <div
            onClick={handleAutoPasteToggle}
            className="flex items-center justify-center bg-gray-800 rounded-full shadow-md p-2 cursor-pointer"
          >
            <div className="bg-blue-600 rounded-full w-4 h-4"></div>
          </div>
          <span className="text-gray-400 text-sm font-light">
            Auto Paste from Clipboard
          </span>
        </div>
        <div className="mt-4 text-center">
          <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-400 text-sm" />
          <p className="text-gray-400 text-sm mt-2">
            You can create 05 more links. Register Now to enjoy Unlimited usage
          </p>
        </div>
      </div>
    </div>
  );
};

export default URL;