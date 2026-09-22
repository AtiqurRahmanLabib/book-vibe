import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-[#8b6f47]"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/book"
          className="transition-colors duration-300 hover:text-[#8b6f47]"
        >
          Listed Books
        </Link>
      </li>

      <li>
        <Link
          href="/pages-to-read"
          className="transition-colors duration-300 hover:text-[#8b6f47]"
        >
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <header className="border-b border-[#e5ddd0] bg-[#fffdf8]">
      <div className="navbar container mx-auto min-h-[80px] px-4 sm:px-6 lg:px-8">

        {/* Logo + Mobile Menu */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-2 p-2 text-[#4b3a2b] lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-56 rounded-xl border border-[#e5ddd0] bg-[#fffdf8] p-3 text-[#51463a] shadow-lg"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-bold tracking-tight text-[#3d3025] sm:text-[28px]"
          >
            Book <span className="text-[#8b6f47]">Vibe</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1 font-medium text-[#66594b]">
            {links}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="navbar-end gap-2 sm:gap-3">

          <Link
            href="/signin"
            className="rounded-lg border border-[#cfc2b1] bg-transparent px-4 py-2.5 text-sm font-semibold text-[#514236] transition-all duration-300 hover:border-[#8b6f47] hover:bg-[#f5efe5] sm:px-5"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-[#4b3a2b] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#34281e] active:scale-[0.98] sm:px-5"
          >
            Sign Up
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;