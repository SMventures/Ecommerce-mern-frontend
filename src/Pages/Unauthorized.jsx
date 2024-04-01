import React from "react";
import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">403 Error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Unauthorized Access</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">You do not have permission to access this page.</p>
        <p className="mt-2 text-base leading-7 text-gray-600">Please log in as an admin to continue.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/login"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go to Login Page
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UnauthorizedPage;
