import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="h-screen w-screen bg-gray-50 dark:bg-gray-900 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700 dark:text-gray-300">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-green-500 font-dark font-extrabold mb-8">
            404
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Sorry, we couldn't find the page you're looking for
          </p>

          <Link
            to="/"
            className="px-5 inline py-3 text-sm font-medium leading-5 shadow-lg text-white transition-all duration-300 border border-transparent rounded-lg focus:outline-none bg-green-600 hover:bg-green-700 active:bg-green-800"
          >
            Back to Homepage
          </Link>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
          <img
            src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
            className="max-w-full h-auto"
            alt="Page not found"
          />
        </div>
      </div>
    </div>
  );
}

export default Page404;
