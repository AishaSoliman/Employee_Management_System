// import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">EMS Company</h3>
            <p className="text-gray-400">&copy; 2024 EMS Company. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              About Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42c-.77.34-1.6.57-2.47.67a4.26 4.26 0 001.86-2.34 8.55 8.55 0 01-2.71 1.03A4.23 4.23 0 0015.56 4a4.23 4.23 0 00-4.23 4.24c0 .33.03.66.1.97A12.02 12.02 0 013 5.29a4.25 4.25 0 001.31 5.66 4.19 4.19 0 01-1.92-.53v.05a4.23 4.23 0 003.39 4.15 4.23 4.23 0 01-1.92.07 4.24 4.24 0 003.95 2.94A8.5 8.5 0 012 19.55 12.01 12.01 0 008.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.37-.02-.55a8.34 8.34 0 002.04-2.13l-.01-.01z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.66 8.08 8.23 9v-6.36h-2.48V12H10.23v-1.9c0-2.46 1.48-3.81 3.73-3.81 1.08 0 2.22.18 2.22.18v2.43h-1.25c-1.23 0-1.62.76-1.62 1.54v1.86h2.77l-.44 2.68h-2.33V21c4.57-.92 8.23-4.58 8.23-9 0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.94 11.13c0-1.11-.08-2.14-.22-3.1h-8.72v3.62h5.06a2.82 2.82 0 01-1.23 1.85v1.54h3.94c.23-1.36.35-2.75.35-4.14v-.02z" />
                <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18.6c-4.74 0-8.6-3.86-8.6-8.6s3.86-8.6 8.6-8.6 8.6 3.86 8.6 8.6-3.86 8.6-8.6 8.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
