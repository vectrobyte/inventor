import React, { useEffect, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import webbeeIcon from '../../../../assets/webbee.png';
import { useIsDesktop } from '../../../../hooks/useIsDesktop';
import { useStore } from '../../../../hooks/useStore';

type NavbarProps = React.HTMLAttributes<HTMLElement>;

const MenuItem: React.FC<{ href: string; title: string }> = ({ href, title }) => {
  const location = useLocation();

  const isActive = matchPath(href, location.pathname);

  console.log({ href, pathname: location.pathname, isActive });

  return (
    <li>
      <Link
        to={href}
        className={`block py-2 pr-4 pl-3 md:p-0 ${isActive ? 'text-blue-300' : 'text-gray-200'}`}
      >
        {title}
      </Link>
    </li>
  );
};

const Navbar: React.FC<NavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [{ models }] = useStore();

  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!isDesktop) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }, [isDesktop]);

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/home" className="flex items-baseline">
          <img src={webbeeIcon} className="mr-3 h-7" alt="Webbee" />
          <p className="text-xl font-semibold whitespace-nowrap text-white">Challenge</p>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="navbar-default"
          className={`${
            menuOpen ? 'h-full opacity-100' : 'h-0 opacity-0'
          } w-full md:block md:w-auto transition-spacing transition-opacity`}
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
            <MenuItem href="/home" title="Home" />
            {models.map((model, key) => (
              <MenuItem key={key} href={`/model/${model.id}`} title={model.title} />
            ))}
            <MenuItem href="/model-builder" title="Menu Builder" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
