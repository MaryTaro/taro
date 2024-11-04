import React, { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Tracks header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll direction
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll down and the user has scrolled past 100px, hide header
      setIsVisible(false);
    } else {
      // Scroll up, show header
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`text-gray-600 body-font transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed w-full top-0 bg-white z-10 shadow-md`}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo and Hamburger Menu in one line */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Maria Taro</span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden ml-auto text-gray-900 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex md:ml-auto flex-row items-center text-base justify-center">
          <a href="#taro" className="mr-5 hover:text-gray-900">
            Таро
          </a>
          <a href="#reiki" className="mr-5 hover:text-gray-900">
            Рейки
          </a>
          <a href="#matrica" className="mr-5 hover:text-gray-900">
            Матрица судьбы
          </a>
          <a href="#testimonials" className="mr-5 hover:text-gray-900">
            Отзывы
          </a>
        </nav>

        {/* Контакты Button for Desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Контакты
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>

      {/* Mobile Menu (Centered) */}
      {isOpen && (
        <div className="md:hidden w-full flex justify-center mb-4">
          <nav className="flex flex-col items-center text-base">
            <a href="#taro" className="mb-2 hover:text-gray-900">
              Таро
            </a>
            <a href="#reiki" className="mb-2 hover:text-gray-900">
              Рейки
            </a>
            <a href="#matrica" className="mb-2 hover:text-gray-900">
              Матрица судьбы
            </a>
            <a href="#testimonials" className="mb-2 hover:text-gray-900">
              Отзывы
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Контакты
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
