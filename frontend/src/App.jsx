import React from 'react';
import './App.css';

const bgImageUrl = `${import.meta.env.BASE_URL}./background.webp`; 

function App() {
  return (
    <div
      className="fixed inset-0 min-h-screen min-w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* Maintenance content directly here, no card wrapper */}
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 text-blue-400 animate-spin" style={{ animationDuration: '3s' }}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="w-8 h-8 text-orange-400 absolute -top-2 -right-2">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Under Maintenance
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow">
          We're currently performing scheduled maintenance to improve your experience.<br />
          This page will be back online shortly.
        </p>
        <div className="flex items-center justify-center gap-3 text-base text-gray-200 mb-8 drop-shadow">
          <div className="w-5 h-5">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
              <polyline points="12,6 12,12 16,14" strokeWidth={2} />
            </svg>
          </div>
          <span>Expected downtime: 30-60 minutes</span>
        </div>
        <div className="space-y-4">
          <div className="text-base text-gray-100 drop-shadow">
            Thank you for your patience
          </div>
          <div className="pt-4">
            <p className="text-sm text-gray-200 drop-shadow">
              If you need immediate assistance, please contact support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;