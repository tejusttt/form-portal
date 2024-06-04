/* eslint-disable @next/next/no-img-element */
'use client';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import React from 'react';
import { runFireworks } from '../../../../../lib/utils';

const ThankYou = () => {
  const shareOnTwitter = () => {
    const text = encodeURIComponent("I just submitted my application! #Web3 #Application");
    const url = `https://twitter.com/intent/tweet?text=hi%20my%20name%20is%20tejas`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <MaxWidthWrapper className="p-6 md:p-12">
        <div className="bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-center p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 animate-fadeIn">
            Your application has been submitted
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-4">
            Our team is currently reviewing it.
          </p>
          <p className="text-lg md:text-xl text-gray-800 mb-8">
            Please check back later to see if you are approved.
          </p>
          <div className="flex justify-center mb-8">
            <img
              src="check-mark.png"
              alt="Check Mark"
              className="w-12 h-12 animate-bounce"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={shareOnTwitter}
              className="px-4 md:px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-md hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition-colors duration-300"
            >
              Share on Twitter
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ThankYou;
