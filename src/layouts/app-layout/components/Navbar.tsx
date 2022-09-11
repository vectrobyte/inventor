import React, { useEffect, useMemo, useState } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import inventorIcon from '../../../assets/inventor.png';
import { useModels } from '../../../hooks/data/useModels';
import { useIsDesktop } from '../../../hooks/useIsDesktop';

type NavbarProps = React.HTMLAttributes<HTMLElement>;

const MenuItem: React.FC<{ href: string; title: string }> = ({ href, title }) => {
  const location = useLocation();

  const isActive = matchPath(href, location.pathname);

  return (
    <li>
      <Link
        to={href}
        className={`block py-2 pr-4 pl-3 md:p-0 ${isActive ? 'text-purple-300' : 'text-gray-200'}`}
      >
        {title}
      </Link>
    </li>
  );
};

const Navbar: React.FC<NavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const { models } = useModels();

  const properModels = useMemo(
    () => models.filter((model) => model.title && model.fields.length),
    [models]
  );

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
        <Link to="/home" className="flex items-center">
          <img src={inventorIcon} className="mr-2 h-5" alt="" />
          <p className="text-xl font-semibold whitespace-nowrap text-white">Inventor</p>
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
          className={`w-full md:block md:w-auto transition-all transition-opacity duration-300 ${
            menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col p-4 m-2 rounded-lg border md:flex-row md:space-x-8 md:m-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
            <MenuItem href="/home" title="Home" />
            {properModels.map((model, key) => (
              <MenuItem key={key} href={`/model/${model.id}`} title={model.title} />
            ))}
            <MenuItem href="/model-builder" title="Model Builder" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
