import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef.current.contains(e.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener('mousedown', closeDropDown);
    return () => {
      document.removeEventListener('mousedown', closeDropDown);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className='container mx-auto'>
      <nav className="flex items-center justify-between px-4 py-3 text-white mb-24">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-transform duration-200 hover:scale-110">
          <h2>Logo</h2>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="group flex cursor-pointer flex-col pb-1">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative text-white ${isActive ? 'text-blue border-b border-blue' : ''}`
                }
              >
                {label}
                <span
                  className={({ isActive }) =>
                    `absolute left-0 bottom-0 h-[3px] rounded-full bg-blue transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`
                  }
                ></span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='hidden items-center justify-between gap-10 md:flex'>
          <NavLink
            to="/register"
            className='underline hover:decoration-dotted hover:-translate-y-1 transition-all hover:text-blue'
          >
            Register
          </NavLink>
          <button className='btn bg-blue hover:bg-darkBlue hover:-translate-y-1 transition-all duration-300'>
            <h6>Sign in</h6>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div ref={dropDownMenuRef} className="relative flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setDropDownState(!dropDownState)}
            className="cursor-pointer"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </div>

        {dropDownState && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-75 flex flex-col items-center justify-center">
            <MdClose
              className="absolute top-5 right-5 text-white text-2xl cursor-pointer"
              onClick={() => setDropDownState(false)}
            />
            <ul className="flex flex-col items-center text-white">
              {navLinks.map(({ to, label }) => (
                <li key={to} className="py-2 text-lg">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `${isActive ? 'text-blue' : 'text-white'}`
                    }
                    onClick={() => setDropDownState(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
