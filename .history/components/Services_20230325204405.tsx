

import React from 'react';

export default function Services() {
  return (
    <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute transform -translate-x-1/2 translate-y-full bottom-1/2 left-1/2">
        <svg className="blur-3xl filter opacity-70" style={{ filter: 'blur(64px)' }} width="643" height="408" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z"
            fill="url(#a)" />
          <defs>
            <linearGradient id="a" x1="663.766" y1="168.785" x2="303.65" y2="469.667" gradientUnits="userSpaceOnUse">
              <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="">
      </div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            3 simple steps
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-400">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia
          </p>
        </div>

        <div
          className="grid grid-cols-1 mt-12 bg-black bg-opacity-50 border border-gray-800 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20 backdrop-blur-lg">
          <div className="">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">
                1
              </p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Create a free account. Amet minim mollit non est sit dolor do.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 sm:border-t-0 sm:border-l">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">
                2
              </p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Add team member on your project. Amet minim mollit non.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 lg:border-t-0 lg:border-l">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">
                3
              </p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Start automating. Amet minim mollit non est sit dolor doros.
              </p>
            </div>
          </div>

          <div className="border-t border-l border-gray-800 lg:border-t-0">
            <div className="p-6 sm:px-8">
              <p className="text-5xl font-semibold text-gray-600">
                4
              </p>
              <p className="mt-12 text-xl font-normal text-white lg:mt-32 xl:mt-52">
                Grow business fast. Amet minim mollit non est sit dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimpleSteps;