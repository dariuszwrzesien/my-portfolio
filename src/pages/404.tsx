import React from "react";
import { Link } from "react-router";

const NotFoundPage: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-full text-foreground">
    <div></div>
    <div></div>
    <h6 className="text-6xl font-bold mb-4">404</h6>
    <p className="text-lg mb-6">
      Sorry, the page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded no-underline hover:bg-indigo-700 transition-colors"
    >
      Go Home
    </Link>
  </div>
);

export default NotFoundPage;
