import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faClipboard } from '@fortawesome/free-solid-svg-icons';

const URLLink: React.FC = () => {
  const handleShortenClick = () => {
    // Implement the logic for shortening the link
    console.log('Shorten Now button clicked');
  };

  const handleAutoPasteToggle = () => {
    // Implement the logic for toggling auto-paste
    console.log('Auto Paste toggled');
  };

  return (
    <div className="w-full h-full bg-gray-900">
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl text-center text-white mb-4">Shorten Your Loooong Links :)</h1>
        <p className="text-base text-center text-gray-400 mb-8">
          Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="flex items-center bg-gray-800 text-gray-400 rounded-full shadow-lg px-6 py-4">
            <FontAwesomeIcon icon={faLink} className="text-lg" />
            <span className="mx-4 text-lg">|</span>
            <span className="text-base">Enter the link here</span>
          </div>
          <button
            onClick={handleShortenClick}
            className="bg-blue-600 text-white rounded-full shadow-lg px-8 py-3"
          >
            Shorten Now!
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div
            onClick={handleAutoPasteToggle}
            className="flex items-center bg-gray-800 text-gray-400 rounded-full shadow-lg px-6 py-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={faClipboard} className="text-sm mr-2" />
            <span className="text-sm">Auto Paste from Clipboard</span>
          </div>
          <span className="text-sm text-gray-400">You can create 05 more links. Register Now to enjoy Unlimited usage</span>
        </div>
      </div>
      <div className="w-full">
        <div className="bg-gray-800 text-gray-400 rounded-t-lg shadow-md backdrop-blur-lg py-4 px-6 grid grid-cols-6 gap-4">
          <span className="font-bold text-sm">Short Link</span>
          <span className="font-bold text-sm">Original Link</span>
          <span className="font-bold text-sm text-center">QR Code</span>
          <span className="font-bold text-sm text-center">Clicks</span>
          <span className="font-bold text-sm text-center">Status</span>
          <span className="font-bold text-sm text-center">Date</span>
        </div>
        {[
          {
            shortLink: 'https://linkly.com/Bn41aCOlnxj',
            originalLink: 'https://www.twitter.com/tweets/8erelCoihu/',
            clicks: '1313',
            status: 'Active',
            date: 'Oct - 10 -2023',
            statusColor: 'text-green-500',
          },
          {
            shortLink: 'https://linkly.com/Bn41aCOlnxj',
            originalLink: 'https://www.youtube.com/watch?v=8J7ZmH0lXuk',
            clicks: '4313',
            status: 'Inactive',
            date: 'Oct - 08 -2023',
            statusColor: 'text-yellow-500',
          },
          // Add more entries as needed
        ].map((entry, index) => (
          <div
            key={index}
            className="bg-gray-800 bg-opacity-60 shadow-md backdrop-blur-lg py-4 px-6 grid grid-cols-6 gap-4"
          >
            <div className="flex items-center">
              <img src="/images/6c9345d04f762b6bc270b1d7f7a275329e7abc05.png" alt="Icon" className="w-8 h-8 mr-2 rounded" />
              <span className="text-sm text-gray-400">{entry.shortLink}</span>
            </div>
            <div className="flex items-center">
              <img src="/images/56371cbfa043e97af457cb28311f2e9f6e17517d.png" alt="Icon" className="w-8 h-8 mr-2 rounded" />
              <span className="text-sm text-gray-400">{entry.originalLink}</span>
            </div>
            <span className="text-sm text-gray-400 text-center">{entry.clicks}</span>
            <span className={`text-sm ${entry.statusColor} text-center`}>{entry.status}</span>
            <span className="text-sm text-gray-400 text-center">{entry.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default URLLink;