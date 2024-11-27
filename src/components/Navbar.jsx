import React, { useContext, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/logo.png'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { CoinContext } from '../context/CoinContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setCurrency } = useContext(CoinContext);
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  const currencyHandle = (event) => {
    switch(event.target.value){
      case "usd":
        setCurrency({ name: "usd", symbol: '$' });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: '€' });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: '₹' });
        break;
      case "aud":
        setCurrency({ name: "aud", symbol: 'A$' });
        break;
      default:
        setCurrency({ name: "usd", symbol: '$' });
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuth = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to='/'><img className="h-10 w-auto filter drop-shadow-md" src={logo} alt="Logo" /></Link>          
          </div>
          <div className="hidden md:flex md:space-x-1">
            <ul className="flex space-x-1 cursor-pointer">
            {['Home', 'Features', 'Pricing', 'Blog'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:scale-105"
                >
                  {item}
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select onChange={currencyHandle} className="appearance-none bg-white bg-opacity-20 text-black text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pl-3 pr-8 py-2 transition duration-300 ease-in-out hover:bg-opacity-50">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="aud">AUD</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <button 
              onClick={handleAuth}
              className="hidden md:inline-flex bg-white text-indigo-600 hover:bg-indigo-100 font-medium rounded-full text-sm px-5 py-2.5 items-center transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" 
              type="button"
            >
              {isLoading ? 'Loading...' : isAuthenticated ? 'Log Out' : 'Sign Up'}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Features', 'Pricing', 'Blog'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:bg-white hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button 
              onClick={() => {
                handleAuth();
                setIsMenuOpen(false);
              }}
              className="w-full text-left bg-white text-indigo-600 hover:bg-indigo-100 font-medium rounded-md text-base px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-2" 
              type="button"
            >
              {isLoading ? 'Loading...' : isAuthenticated ? 'Log Out' : 'Sign Up'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

