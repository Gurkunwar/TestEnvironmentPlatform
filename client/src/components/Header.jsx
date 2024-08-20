import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-900 shadow-md text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex-wrap text-orange-500">
            QuizApp
          </h1>
        </Link>
        <ul className="flex gap-4">
          <Link to='/'>
            <li className="hidden sm:inline text-white hover:underline">
              Home
            </li>
          </Link>
          <Link to='login'>
            <li className="text-white hover:underline">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
