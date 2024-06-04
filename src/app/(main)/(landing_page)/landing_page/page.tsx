/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import Navbar from '@/components/navbar';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* <Navbar /> */}
      <MaxWidthWrapper className="p-12 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-6xl font-extrabold text-black mb-8">Catcents NFT</h1>
          <p className="text-xl  text-black font-style: italic mb-12">
            Discover unique and rare NFTs of adorable Catcents.
          </p>
          <div>
            <Link href="/form" legacyBehavior>
              <a className="mt-12 px-6 py-3 bg-gray-200 text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
                Start Application
              </a>
            </Link>
          </div>
          <div className="relative mt-16"> 
            <img
              src="/cat3.jpg"
              alt="Cat NFT"
              className="w-1/2 mx-auto animate-bounce"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LandingPage;
