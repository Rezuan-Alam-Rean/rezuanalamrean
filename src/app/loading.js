"use client";
import React from 'react';

const LoadingPage = () => {
    return (
        <div className='  flex h-screen 
          justify-center items-center'>
            <span className="loading  h-24 w-28 loading-spinner text-error"></span>
        </div>
    );
};

export default LoadingPage;